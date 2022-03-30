import React from 'react'
import classes from './ButtonVote.module.css'

const ButtonVote = ({ variant, onVoteSubmitted, onVoteAgain, isSubmitted, isEnabled }) => {
    let styling, buttonVoteState;

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

    const enableClass = isEnabled ? classes.enable : ''

    if (isSubmitted) {
        buttonVoteState = (<button className={`${styling} border border-white sm:text-sm xl:text-lg text-white bg_gray px-9 whitespace-nowrap`}
            disabled={!isEnabled}
            onClick={() => { onVoteAgain() }}>
            Vote Again
        </button>)
    } else {
        buttonVoteState = (<button className={`${styling} ${enableClass} border border-white sm:text-sm xl:text-lg text-white bg_gray px-9 whitespace-nowrap opacity-50`}
            disabled={!isEnabled}
            onClick={() => { onVoteSubmitted('positive') }}>
            Vote Now
        </button>)
    }

    return (
        <>
            {buttonVoteState}
        </>

    )
}

export default ButtonVote