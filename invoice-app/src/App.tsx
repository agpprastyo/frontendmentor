import {Button} from "@/components/ui/button.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {AppSidebar} from "@/components/app-sidebar.tsx";


function App() {


  return (
     <SidebarProvider style={{ borderRadius: 99 }}>
          <AppSidebar />
          <main>
              <SidebarTrigger />
             <Button>Hello</Button>
              <ModeToggle/>
          </main>
      </SidebarProvider>
  )
}

export default App
