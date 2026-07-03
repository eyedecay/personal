import React, {useEffect, useState} from "react"; 


export default function ModeToggle() {
    const [theme, setTheme] = useState<string>("light"); 

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
  
    return (
        <button className = "mode-toggle-button" onClick = {toggleTheme}>
            {theme === "light" ? "Dark Mode": "Light Mode"}
        </button>
    );
} 