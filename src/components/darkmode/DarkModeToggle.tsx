import { useEffect, useState } from 'react';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import { ReactComponent as Auto } from '../../assets/dark-light.svg';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DarkModeToggleItem from './DarkModeToggleItem';
import './DarkModeToggle.css';

const prefersDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

function TitleSelection(selectedMode: string) {
    switch (selectedMode) {
        case 'light':
            return <Sun className='icon-size' /> 
        case 'dark':
            return <Moon className='icon-size' /> 
        default:
            return <Auto className='icon-size' /> 
    }
}

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode())

    const setPreferredTheme = (selectedMode: string) => {
        setIsDarkMode(selectedMode)
        const selection : string = (selectedMode === 'auto') ? prefersDarkMode() : selectedMode
        // TODO: Set mode in local storage and retrieve it on page load
        document.querySelector('html')!!.setAttribute('data-bs-theme', selection)
    };

    useEffect(() => { 
        setPreferredTheme(prefersDarkMode())
    }, []);

    return (
        <DropdownButton
            key={isDarkMode}
            className="me-2"
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