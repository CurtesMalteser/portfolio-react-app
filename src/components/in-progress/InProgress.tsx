import './InProgress.css';
import InProgressSVG from './InProgressSVG';

function InProgress() {
    return (
        <div className="in-progress">
            <div className="anim-container">
                <InProgressSVG ellipseClassName="ellipse-1" circleClassName="ellipse-1-motion" />
                <InProgressSVG ellipseClassName="ellipse-2" circleClassName="ellipse-2-motion" />
                <InProgressSVG ellipseClassName="ellipse-3" circleClassName="ellipse-3-motion" />
            </div>
        </div>
    );
}

export default InProgress;