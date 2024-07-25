import { useEffect, useRef } from 'react';
import './UnderConstruction.css';

function UnderConstruction() {

    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {

        const updateBackgroundSize = () => {
            document.documentElement.style.setProperty('--dynamic-bg-size', `${calculateDynamicSize()}px`);
        };

        const calculateDynamicSize = () => {
            if (headingRef.current) {
                return headingRef.current.scrollHeight;
            } else {
                return 0;
            }
        };

        updateBackgroundSize();

        window.addEventListener('resize', updateBackgroundSize);

        return () => {
            window.removeEventListener('resize', updateBackgroundSize);
        };
    }, []);

    return (
        <>
            <div  className="tape-container" >
                <h1 ref={headingRef} className='tape'>Under Construction</h1>
            </div>
            <h3 className='subtitle'>Sorry, this page is under construction.</h3>
        </>
    )
}

export default UnderConstruction;