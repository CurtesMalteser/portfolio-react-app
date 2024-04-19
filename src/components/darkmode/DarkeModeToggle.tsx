import { useEffect, useState } from 'react';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import { ReactComponent as Auto } from '../../assets/dark-light.svg';
import SplitButton from 'react-bootstrap/SplitButton';
import DarkModeToggleItem from './DarkModeToggleItem';

import './DarkModeToggle.css';
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

    const isDarkModeActive = () => isDarkMode === 'dark'
    return (
        <>
            <button
                style={{ border: 'none', background: 'none' }}
                onClick={() => setPreferredTheme(isDarkMode === 'light' ? true : false)}
            > {isDarkMode === 'light' ? <Sun className='color-mode' /> : <Moon className='color-mode'/>}
            </button>

            <SplitButton
                key={isDarkMode}
                id={`dropdown-split-variants-${isDarkMode}`}
                variant={isDarkMode}
                title={isDarkMode === 'light' ? <Sun className='color-mode' /> : <Moon className='color-mode'/>}
            >
                <DarkModeToggleItem Icon={Sun} mode='light' selectedMode={isDarkMode}/>
                <DarkModeToggleItem Icon={Moon} mode='dark' selectedMode={isDarkMode}/>
                <DarkModeToggleItem Icon={Auto} mode='auto' selectedMode={isDarkMode}/>
            </SplitButton>
        </>
    );
};

export default DarkModeToggle;