import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { isValidEmail } from "@/utils/inputValidation";

interface EmailInviteInputProps {
    label?: string;
    onChange?: (emails: string[]) => void;
}

export const EmailInviteInput = ({label, onChange}: EmailInviteInputProps) => {
    const [inputValue, setInputValue] = useState("");
    const [emails, setEmails] = useState<string[]>([]);

    const addEmail = (email: string) => {
        const trimmedEmail = email.trim();

        if (isValidEmail(trimmedEmail) && !emails.includes(trimmedEmail)) {
            const updatedEmails = [...emails, trimmedEmail];
            setEmails(updatedEmails);
            onChange?.(updatedEmails);
        }

        setInputValue("");

    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            addEmail(inputValue);
        }
    };

    const removeEmail = (email: string) => {
        const updatedEmails = emails.filter((e) => e !== email);
        setEmails(updatedEmails);
        onChange?.(updatedEmails);
    };

    return (
        <div>
            {label && <label className="mb-1 block text-sm">{label}</label>}
            <div>
                <Input
                    placeholder={"Invite attendees  Enter an email address"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
                {emails.map((email) => (
                    <div
                    key={email}
                    className="flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                        {email}
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => removeEmail(email)}
                            className="ml-1 h-4 w-4"
                        >
                            <X className="h-3 w-3"/>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};
