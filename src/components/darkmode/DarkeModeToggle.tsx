import { useEffect, useState } from 'react';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';
// add this import after implement dropdown menu to select dark or light mode, or auto
// import { ReactComponent as DarkLight } from '../../assets/dark-light.svg';

// todo: implement dropdown menu to select dark or light mode, or auto
function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState('light')

    const setPreferredTheme = (prefersDarkMode: boolean) => {
        setIsDarkMode(prefersDarkMode ? 'dark' : 'light')
        document.querySelector('html')!!.setAttribute('data-bs-theme', prefersDarkMode ? 'dark' : 'light')
    };

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        setPreferredTheme(prefersDarkMode)
    }, []);

    return (
        <button 
        style={{ border: 'none', background: 'none' }}
        onClick={() => setPreferredTheme(isDarkMode === 'light' ? true : false)}
        > {isDarkMode === 'light' ? <Sun style={{ width: 24, height: 24, fill: 'white'}} /> : <Moon style={{ 
            fill: 'white',
            width: 24,
            height: 24
            }} />}
        </button>
    );
};

export default DarkModeToggle;