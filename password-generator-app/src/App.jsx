import {useState} from 'react';
import ArrowRight from "./components/ArrowRight.jsx";

function App() {
    const [length, setLength] = useState(3);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('TOO WEAK!');
    const [copySuccess, setCopySuccess] = useState('');

    const getStrengthBarColors = () => {
        let activeColor = 'transparent';
        let filledBars = 0;

        switch (passwordStrength) {
            case 'TOO WEAK!':
                activeColor = 'var(--color-1-red)'; // Red
                filledBars = 1;
                break;
            case 'WEAK':
                activeColor = 'var(--color-2-orange)';
                filledBars = 2;
                break;
            case 'GOOD':
                activeColor = 'var(--color-3-yellow)';
                filledBars = 3;
                break;
            case 'STRONG':
                activeColor = 'var(--color-neon-green)';
                filledBars = 4;
                break;
            default:
                break;
        }

        return Array(4).fill(undefined, undefined, undefined).map((_, index) => ({
            backgroundColor: index < filledBars ? activeColor : 'transparent',
            border: '2px solid',
            borderColor: index < filledBars ? activeColor : 'white'
        }));
    };

    const handleLengthChange = (event) => {
        setLength(event.target.value);
    };

    const getSliderBackground = (length) => {
        const percent = (length / 20) * 100;
        return `linear-gradient(
            to right,
            #39FF14 ${percent}%,
            white ${percent}%
        )`;
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const generatePassword = () => {
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";

        let characterPool = '';
        if (includeUppercase) characterPool += uppercase;
        if (includeLowercase) characterPool += lowercase;
        if (includeNumbers) characterPool += numbers;
        if (includeSymbols) characterPool += symbols;

        if (characterPool.length === 0) {
            alert("Please select at least one character type.");
            return;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            password += characterPool[randomIndex];
        }

        setGeneratedPassword(password);
        assessPasswordStrength(password);
    };

    const assessPasswordStrength = (password) => {
        let strength = 'TOO WEAK!';
        if (password.length > 5) strength = 'WEAK';
        if (password.length > 8 && (includeUppercase || includeLowercase) && includeNumbers) strength = 'GOOD';
        if (password.length >= 12 && includeUppercase && includeLowercase && includeNumbers && includeSymbols) strength = 'STRONG';
        setPasswordStrength(strength);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPassword)
            .then(() => {
                setCopySuccess('Password copied!');
                setTimeout(() => setCopySuccess(''), 2000);
            })
            .catch(() => {
                setCopySuccess('Failed to copy!');
                setTimeout(() => setCopySuccess(''), 2000);
            });
    };


    const strengthBarColors = getStrengthBarColors();

    return (
        <div className='bg-color-very-dark-grey h-screen w-screen overflow-hidden text-color-almost-white'>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <h1 className='text-style-heading-m'>Password Generator</h1>
                <div className='lg:w-[540px] w-full lg:px-0 md:px-28 px-4 mt-8'>
                    <div className='w-full flex flex-row justify-between content-between px-8 py-6 bg-color-dark-grey'>
                        <p className='text-style-heading-l'>{generatedPassword || 'PTx1f5DaFX'}</p>
                        <img
                            src='/assets/images/icon-copy.svg'
                            alt='icon Copy'
                            className='object-contain cursor-pointer'
                            onClick={copyToClipboard}
                        />
                    </div>
                    <div
                        className='w-full flex flex-col justify-between content-between mt-6 px-8 py-6 bg-color-dark-grey'>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='text-style-body-m'>Character Length</p>
                            <p className='text-style-heading-l text-color-neon-green ml-2'>{length}</p>
                        </div>
                        <input
                            type='range'
                            min='1'
                            max='20'
                            value={length}
                            onChange={handleLengthChange}
                            className='slider ml-2 mt-6'
                            style={{background: getSliderBackground(length)}}
                        />
                        <div className='flex flex-col mt-8 text-style-body-m gap-2'>
                            <label className='flex items-center'>
                                <input
                                    type='checkbox'
                                    checked={includeUppercase}
                                    onChange={() => setIncludeUppercase(!includeUppercase)}
                                    className='mr-6 accent-color-neon-green '
                                />
                                Include Uppercase Letters
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='checkbox'
                                    checked={includeLowercase}
                                    onChange={() => setIncludeLowercase(!includeLowercase)}
                                    className='mr-6 accent-color-neon-green'
                                />
                                Include Lowercase Letters
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='checkbox'
                                    checked={includeNumbers}
                                    onChange={() => setIncludeNumbers(!includeNumbers)}
                                    className='mr-6 accent-color-neon-green'
                                />
                                Include Numbers
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='checkbox'
                                    checked={includeSymbols}
                                    onChange={() => setIncludeSymbols(!includeSymbols)}
                                    className='mr-6 accent-color-neon-green'
                                />
                                Include Symbols
                            </label>
                        </div>

                        <div className='w-full py-8 flex flex-row items-center'>
                            <p className='text-style-body-m text-color-grey'>STRENGTH</p>
                            <div className='w-full flex flex-row justify-end items-center gap-4'>
                                <p className='text-style-heading-m text-color-almost-white'>{passwordStrength}</p>
                                <div className='flex flex-row justify-end items-center gap-1'>
                                    {strengthBarColors.map((style, index) => (
                                        <div
                                            key={index}
                                            className="w-2.5 h-7"
                                            style={style}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>


                        <button
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onClick={generatePassword} // Call generatePassword on click
                            className={`w-full h-[65px] text-style-heading-m ${isFocused ? 'bg-transparent border-4 border-color-neon-green' : 'bg-color-neon-green'} mt-6 text-color-dark-grey flex flex-row items-center justify-center gap-6 focus:outline-none`}>
                            <p className={`text-style-body-m ${isFocused ? 'text-color-neon-green' : ''}`}>Generate
                                Password</p>
                            <ArrowRight isPressed={isFocused}/>
                        </button>

                        {copySuccess &&
                            <p className="text-color-neon-green mt-2">{copySuccess}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
