import React from 'react';
import {Input} from "@/components/ui/input.tsx";


export const SearchBar: React.FC = () => {
    return (
            <Input
                type="search"
                className="w-full"
                title="search"
                placeholder="Search..."
            />
    );
};

export default SearchBar;