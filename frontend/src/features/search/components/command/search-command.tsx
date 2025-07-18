import React, { useState } from "react";
import SearchBar from "@/features/search/components/input/search-bar.tsx";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandItem,
    CommandGroup,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button.tsx";

export const SearchCommand: React.FC = () => {
    const [open, setDialogOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">Search</Button>
            </DialogTrigger>

            <DialogContent className="p-0 overflow-hidden max-w-lg">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>

                        <CommandGroup heading="Events">
                            <CommandItem>Business Meeting</CommandItem>
                            <CommandItem>2026 Paris City Break</CommandItem>
                        </CommandGroup>

                        <CommandGroup heading="Actions">
                            <CommandItem>Create Event</CommandItem>
                            <CommandItem>Go to Dashboard</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    );
};

