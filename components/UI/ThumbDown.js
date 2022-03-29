import Image from 'next/image'
import classes from './ThumbDown.module.css'

const ThumbDown = ({ variant, className }) => {
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
        <button className={`bg_yellow ${className} ${styling}`}>
            <Image src="/images/thumb-down.svg" alt="thumbs down" width={16} height={16} />
        </button>
    )
}

export default ThumbDown