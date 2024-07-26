import { FunctionComponent, SVGProps } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './DarkModeToggle.css';

export default function DarkModeToggleItem({ Icon, mode, selectedMode }: { Icon: FunctionComponent<SVGProps<SVGSVGElement>>, mode: string, selectedMode: string }) {
    return (<Dropdown.Item active={mode === selectedMode} eventKey={mode}>
        <Icon className='icon-size' /> {mode}
    </Dropdown.Item>
    )
}
