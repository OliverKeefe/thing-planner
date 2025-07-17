import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Container} from "@/components/shared/Container.tsx";
import {Button} from "@/components/ui/button.tsx";

interface EventCardInfo {
    eventTitle: string;
    eventDescription: string;
    imagePath: string;
    attendees: string[];
    eventIcon: string;
}

export const EventCard: React.FC = () => {


    const exampleEvent: EventCardInfo = {
        eventTitle: "Italian Holiday 2026",
        eventDescription: "Italy in 2026 for Ben and Vicky's engagement celebrations!",
        imagePath: "https://picsum.photos/id/128/300/200",
        attendees: ["alice@example.com", "bob@example.com"],
        eventIcon: "🇮🇹",
    };

    return (
        <Container className="max-w-[300px]">
            <Card className="p-0 rounded-t-2xl">
                <img
                    src={exampleEvent.imagePath}
                    alt="Event image"
                    className="w-full h-48 object-cover rounded-t-2xl"
                />
                <CardHeader>
                    <CardTitle>{exampleEvent.eventIcon} {exampleEvent.eventTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{exampleEvent.eventDescription}</CardDescription>
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </Container>
    );
};
