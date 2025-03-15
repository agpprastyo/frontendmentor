import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "../context/theme.tsx";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={toggleTheme}
                className="flex items-center gap-2 p-2 rounded-full  transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-600 "
                aria-label="Toggle theme"
            >
              {theme === "light" ? (
                    <MoonIcon className="w-5 h-5 text-gray-800 transition-opacity duration-500 opacity-100" />
                ) : (
                    <SunIcon className="w-5 h-5 text-yellow-400 transition-opacity duration-500 opacity-100" />
                )}
                <p className="text-sm font-medium">{theme === "light" ? "Light Mode" : "Dark Mode"}</p>
            </button>
        </div>
    );
};
