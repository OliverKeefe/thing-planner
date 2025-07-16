import React, { useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EventTypeSelector from "@/features/planner/components/checkboxes/EventTypeSelector";
import { DateTimePicker } from "@/components/shared/datetime/calendars/DateTimePicker";
import { EmailInviteInput } from "@/components/shared/Input/EmailInviteInput";
import { EventsService } from "@/services/events.service";

interface DateTimeRange {
    from: Date | undefined;
    to: Date | undefined;
}

export const CreateEventDialog: React.FC = () => {
    const [open, setDialogOpen] = useState(false);

    const [invitedEmails, setInvitedEmails] = useState<string[]>([]);
    const [eventName, setEventName] = useState("");
    const [eventType, setEventType] = useState<{ id: number; eventTypeName: string } | null>(null);
    const [dateRange, setDateRange] = useState<DateTimeRange>({ from: undefined, to: undefined });

    const handleSubmit = async () => {
        if (!eventType) {
            console.error("Event type not selected.");
            return;
        }

        try {
            const payload = {
                id: null,
                name: eventName,
                eventType: {
                    id: eventType.id,
                    eventTypeName: eventType.eventTypeName,
                },
                startDate: dateRange.from?.toISOString(),
                endDate: dateRange.to?.toISOString(),
            };

            const response = await EventsService.createEvent(payload);
            console.log("Event created:", response);

            setDialogOpen(false);
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button>Create New Event</Button>
            </DialogTrigger>

            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle>📆 Create Event</DialogTitle>
                    <DialogDescription>Enter the details for your new event.</DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="eventName">Event Name</Label>
                        <Input
                            id="eventName"
                            placeholder="Enter Event"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                        />
                    </div>

                    <EventTypeSelector
                        title="Event Type"
                        selectedType={eventType}
                        onChange={(type) => setEventType(type)}
                    />

                    <DateTimePicker
                        value={dateRange}
                        onChange={(range) => setDateRange(range)}
                        label="Event Time"
                        doesGetTime={false}
                    />

                    <EmailInviteInput
                        label="Invite Attendees"
                        onChange={(emails) => setInvitedEmails(emails)}
                    />

                    <div className="flex flex-col space-y-2" >
                        <Button
                            className="cursor-pointer"
                            onClick={handleSubmit}>Create</Button>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                    Don’t worry about getting the details correct now — you can always edit your event later.
                </p>
            </DialogContent>
        </Dialog>
    );
};


export default CreateEventDialog;