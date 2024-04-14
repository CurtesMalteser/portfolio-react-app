import React, { useEffect, useState } from 'react';

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
        <button onClick={() => setPreferredTheme(isDarkMode === 'light' ? true : false)}>
            {isDarkMode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;