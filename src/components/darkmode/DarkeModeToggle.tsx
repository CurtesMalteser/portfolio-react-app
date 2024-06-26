import { useEffect, useState } from 'react';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import { ReactComponent as Auto } from '../../assets/dark-light.svg';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DarkModeToggleItem from './DarkModeToggleItem';

import './DarkModeToggle.css';
// add this import after implement dropdown menu to select dark or light mode, or auto
// import { ReactComponent as DarkLight } from '../../assets/dark-light.svg';


// todo: implement dropdown menu to select dark or light mode, or auto

const prefersDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

function TitleSelection(selectedMode: string) {
    switch (selectedMode) {
        case 'light':
            return <Sun className='color-mode' /> 
        case 'dark':
            return <Moon className='color-mode' /> 
        default:
            return <Auto className='color-mode' /> 
    }
}

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode())

    const setPreferredTheme = (selectedMode: string) => {
        setIsDarkMode(selectedMode)
        const selection : string = (selectedMode === 'auto') ? prefersDarkMode() : selectedMode
        document.querySelector('html')!!.setAttribute('data-bs-theme', selection)
    };

    useEffect(() => { 
        setPreferredTheme(prefersDarkMode())
    }, []);

    return (
        <DropdownButton
            key={isDarkMode}
            id={`dropdown-split-variants-${isDarkMode}`}
            variant={isDarkMode}
            title={ TitleSelection(isDarkMode) }
            onSelect={(e) => setPreferredTheme(e ?? 'auto')}
        >
            <DarkModeToggleItem Icon={Sun} mode='light' selectedMode={isDarkMode} />
            <DarkModeToggleItem Icon={Moon} mode='dark' selectedMode={isDarkMode} />
            <DarkModeToggleItem Icon={Auto} mode='auto' selectedMode={isDarkMode} />
        </DropdownButton>
    );
};

export default DarkModeToggle;