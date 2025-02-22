const ArrowRight = ({isPressed}) => {
    return (
        <div>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"
                 className={`${isPressed ? 'fill-color-neon-green' : 'fill-color-dark-grey'}`}>
                <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
            </svg>
        </div>
    );
};

export default ArrowRight;
