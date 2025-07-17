import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const AppTopbar: React.FC = () => {
    return (
        <div className="p-4 flex item-center justify-between px-4 h-12">
            <h1 className="text-lg font-semibold">ThingPlanner</h1>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>OK</AvatarFallback>
            </Avatar>
        </div>
    );
}

export default AppTopbar;