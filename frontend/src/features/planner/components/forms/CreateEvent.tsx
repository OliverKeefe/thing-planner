import React, { useState } from "react";
import styled from "styled-components"
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
import {EmailInviteInput} from "@/components/shared/Input/EmailInviteInput.tsx";


interface CreateEventProps {
    children?: React.ReactNode;
}

export const CreateEvent: React.FC<CreateEventProps> = ({ children }) => {
    const [dateTime, setDateTime] = useState(new Date());

    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle>📆 Create Event</CardTitle>
                    <CardDescription>Enter the details for your new event.</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor={"text"}>Event Name</Label>
                            <Input type={"text"} id="eventName" placeholder={"Enter Event"} />
                        </div>

                        <EventTypeSelector title={"Event Type"} />

                        <DateTimePicker
                            value={dateTime}
                            onChange={setDateTime}
                            label="Start Time"
                            doesGetTime={false}
                        />

                        <div className="flex flex-col space-y-2">
                            <EmailInviteInput />
                        </div>

                        <div className="flex flex-col space-y-2" >
                            <Button className="cursor-pointer">Create</Button>
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