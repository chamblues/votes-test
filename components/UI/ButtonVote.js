import React from 'react'
import classes from './ButtonVote.module.css'

const ButtonVote = ({ variant }) => {
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
        <button className={`${styling} border border-white sm:text-sm xl:text-lg text-white bg_gray px-9 whitespace-nowrap`} >Vote Now</button>
    )
}

export default ButtonVote