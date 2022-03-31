import Image from 'next/image'
import classes from './ThumbUp.module.css'

const ThumbUp = ({variant, className, onVoteSelected}) => {
    let styling;

    switch (variant) {
        case 'grid':
            styling = classes.grid
            break;
        case 'list':
            styling = classes.list
            break;
        default:
            styling = classes.others
    }
    
    return (
        <button className={`bg_green ${className} ${styling}`} onClick={() => {onVoteSelected('positive')}}>
            <Image src="/images/thumb-up.svg" alt="thumbs up" width={16} height={16} priority />
        </button>
    )
}

export default ThumbUp