import React, { useState } from 'react';

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        console.log(`Dark mode toggled: ${isDarkMode ? 'off' : 'on'}`)
        // Add logic to toggle dark mode here
    };

    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;