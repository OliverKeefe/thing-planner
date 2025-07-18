import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupLabel,
    SidebarHeader,
} from "@/components/ui/sidebar"
import CreateEventDialog from "@/features/planner/components/dialog/forms/CreateEventDialog.tsx";
import AppTopbar from "@/components/shared/navigation/sidebars/app-topbar.tsx";
import { SearchDialog } from "@/features/search/components/dialog/search-dialog.tsx";

export function AppSidebar() {
    return (
        <Sidebar>
            <AppTopbar />
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup >
                    <SidebarContent>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <CreateEventDialog />
                        <SearchDialog />

                        <SidebarGroupLabel>Events</SidebarGroupLabel>

                    </SidebarContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar;