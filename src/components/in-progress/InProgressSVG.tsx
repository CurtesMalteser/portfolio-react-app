interface InProgressSVGProps {
    ellipseClassName: string;
    circleClassName: string;
}

const InProgressSVG = ({ ellipseClassName, circleClassName }: InProgressSVGProps) => {
    return (
        <div className={ellipseClassName}>
            <svg viewBox="0 0 240 240">
                <path className="ellipse"
                    d="M 120 5 A 70 115 0 1 1 120 237 A 1 1.7 0 1 1 120 5"
                />
            </svg>
            <div className={`circle ${circleClassName}`}></div>
        </div>
    );
}

export default InProgressSVG;