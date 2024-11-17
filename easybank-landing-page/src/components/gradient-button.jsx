const GradientButton = ({text, onClick, disabled, className}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:from-primary-lightLimeGreen hover:to-primary-lightBrightCyan'} ${className}`}
        >
            {text}
        </button>
    );
};

export default GradientButton;