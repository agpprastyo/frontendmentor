import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the shape of your context
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Create theme context with proper typing
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Add proper typing to the ThemeProvider props
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<string>(() => {
        // Check for saved theme in localStorage
        const savedTheme = localStorage.getItem('theme');
        // Check user's system preference if no saved theme
        if (!savedTheme) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return savedTheme;
    });

    // Update theme class on document element and save to localStorage
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle theme function
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};