import Image from 'next/image'
import classes from './ThumbUp.module.css'

const ThumbUp = ({variant, className}) => {

    let styling;

    switch (variant) {
        case 'grid':
            styling = classes.grid
            break;
        case 'list':
            styling = classes.list
            break;
        default:
            styling = ''
    }
    return (
        <button className={`bg_green ${className} ${styling}`}>
            <Image src="/images/thumb-up.svg" alt="thumbs up" width={16} height={16} />
        </button>
    )
}

export default ThumbUp