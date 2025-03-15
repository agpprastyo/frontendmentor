
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FlagImage = ({ country }: { country: { flags: { svg: string }, alpha3Code: string } }) => {
    return (
        <LazyLoadImage
            width={'100%'}
            src={country.flags.svg}
            alt={`Flag of ${country.alpha3Code}`}
            effect="blur" // You can use "opacity" or "black-and-white" as well
            className="w-full h-[160px] object-cover rounded-t-lg"
        />
    );
};

export default FlagImage;
