import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Container } from "@/components/shared/Container"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import EventTypeSelector from "@/features/planner/components/checkboxes/EventTypeSelector";
import { DateTimePicker } from "@/components/shared/datetime/calendars/DateTimePicker.tsx";
import { EmailInviteInput } from "@/components/shared/Input/EmailInviteInput.tsx";
import {EventsService} from "@/services/events.service.ts";


interface CreateEventProps {
    children?: React.ReactNode;
}

interface DateTimeRange {
    from: Date | undefined;
    to: Date | undefined;
}

export const CreateEvent: React.FC<CreateEventProps> = ({ children }) => {
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
                    eventTypeName: eventType?.eventTypeName,
                },
                startDate: dateRange.from ? dateRange.from.toISOString() : undefined,
                endDate: dateRange.to ? dateRange.to.toISOString() : undefined,
            };

            const response = await EventsService.createEvent(payload);
            console.log("Event created:", response);
        } catch (error) {
            console.log("Error creating event:", error);
        }
    };

    return (
        <Container className="w-[650px]">
            <Card>
                <CardHeader>
                    <CardTitle>📆 Create Event</CardTitle>
                    <CardDescription>Enter the details for your new event.</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor={"text"}>Event Name</Label>
                            <Input
                                type={"text"}
                                id="eventName"
                                placeholder={"Enter Event"}
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

                        <div className="flex flex-col space-y-2">
                            <EmailInviteInput label={"Invite Attendees"} onChange={(emails => setInvitedEmails(emails))}/>
                        </div>

                        <div className="flex flex-col space-y-2" >
                            <Button
                                className="cursor-pointer"
                                onClick={handleSubmit}
                            >Create</Button>
                        </div>
                    </div>
                </CardContent>

                <CardFooter>
                    <p className={"text-sm text-muted-foreground"}>
                        Don't worry about getting the details correct now,
                        you can always edit the details of your event later on.
                    </p>
                </CardFooter>
            </Card>
        </Container>
    );
}