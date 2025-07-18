import React, { useState } from "react";
import SearchBar from "@/features/search/components/input/search-bar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const SearchDialog: React.FC = () => {
    const [open, setDialogOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">Search</Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                </DialogHeader>

                <SearchBar />
            </DialogContent>
        </Dialog>
    );
};
