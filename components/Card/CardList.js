import React from 'react'
import classes from './CardList.module.css'
import ThumbUp from '../UI/ThumbUp'
import ThumbDown from '../UI/ThumbDown'
import Image from 'next/image'
import ButtonVote from '../UI/ButtonVote'
import BarVote from '../UI/BarVote'

const CardList = () => {
  return (
    <article className={`${classes.card} card_list relative pr-4 mb-5`} style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%)" }}>
      <div className="flex">
        <div className="card_image ">
          <Image src="/images/kanye.jpg" className={`${classes.card_list_image} mix-blend-hue`} alt="Kanye" width={267} height={348} />
        </div>
        <div className={`text-white`}>
          <h2 className={`${classes.card_title} xl:text-4xl leading-loose`}>Kanye West</h2>
          <p className="sm:text-sm lg:text-xl leading-5 pr-4">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit</p>
        </div>
        <div className="card_vote">
          <div style={{ fontSize: '15px' }} className="text-white mb-3 mt-2  text-right">1 month ago in Entertainment</div>
          <div className="flex items-center">
            <ThumbUp className="mr-2" variant="list" />
            <ThumbDown className="mr-2" variant="list" />
            <ButtonVote variant="list" />
          </div>

        </div>
      </div>

      <BarVote thumbsUp="60" thumbsDown="40" variant="list" />

      <div className="result_thumb absolute top-0 left-0">
        <ThumbUp variant="list" />
        {/* <ThumbDown variant="list" /> */}
      </div>
    </article>
  )
}

export default CardList