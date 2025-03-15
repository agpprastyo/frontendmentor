import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "./context/theme.tsx";
import App from "./App.tsx";
import { scan } from "react-scan";

scan({
    enabled: false,

});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </StrictMode>,
)
