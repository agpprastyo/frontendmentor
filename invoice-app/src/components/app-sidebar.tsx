import {
    Sidebar,

    SidebarFooter,

    SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar className='rounded-full'  >
           <SidebarHeader className='rounded-full' >My Sidebar Header</SidebarHeader>
            {/*<SidebarContent>*/}
            {/*    <SidebarGroup />*/}
            {/*    <SidebarGroup />*/}
            {/*</SidebarContent>*/}
            <SidebarFooter />
        </Sidebar>
    )
}
