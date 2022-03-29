import Image from 'next/image'
import classes from './BarVote.module.css'

const BarVote = ({ thumbsUp, thumbsDown, variant }) => {
    
    let styling

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
        <div className={`${styling} bar_votes flex absolute bottom-0 w-full text-white text-3xl z-50 leading-none`}>
            <div style={{
                width: thumbsUp + '%',
                background: "rgba(60, 187, 180, 0.6)",
            }}>
                <div className={`pl-5 ${classes.pad_fix}`}>
                    <span><Image src="/images/thumb-up.svg" alt="thumbs up" width={15} height={15} /></span>
                    <span className={`pl-3 ${classes.percentage}`}>{thumbsUp}%</span>
                </div>
            </div>
            <div style={{
                width: thumbsDown + '%',
                background: "rgba(249, 173, 29, 0.6)",
                textAlign: 'right'
            }}>
                <div className={`pr-5 ${classes.pad_fix}`}>
                    <span className={`inline-block pr-3 ${classes.percentage}`}>{thumbsDown}%</span>
                    <span className={`inline-block`}><Image src="/images/thumb-down.svg" alt="thumbs up" width={15} height={15} /></span>
                </div>
            </div>
        </div>
    )
}

export default BarVote
