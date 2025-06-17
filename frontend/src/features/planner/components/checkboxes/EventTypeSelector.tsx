import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";


interface EventTypeSelectorProps {
    title: string;
}

export const EventTypeSelector: React.FC<EventTypeSelectorProps> = ({title}) => {
    return (
        <div>
            <Label className={"pb-3 space-y-2"} htmlFor={"event-type-select"}>{title}</Label>
            <div className={"flex items-center gap-6"}>
                <div className={"flex items-center space-x-2"}>
                    <Checkbox id={"singleVenue"} />
                    <Label htmlFor={"singleVenue"}>Single-Venue</Label>
                </div>
                <div className={"flex items-center space-x-2"}>
                    <Checkbox id={"multiVenue"} />
                    <Label htmlFor={"multiVenue"}>Multi-Venue</Label>
                </div>
                <div className={"flex items-center space-x-2"}>
                    <Checkbox id={"holiday"} />
                    <Label htmlFor={"holiday"}>Holiday</Label>
                </div>
                <div className={"flex items-center space-x-2"}>
                    <Checkbox id={"businessMeeting"} />
                    <Label htmlFor={"businessMeeting"}>Business Meeting</Label>
                </div>
            </div>
        </div>
    );
}

export default EventTypeSelector;