import Image from 'next/image'
import classes from './CardGrid.module.css'
import ThumbUp from '../UI/ThumbUp'
import ThumbDown from '../UI/ThumbDown'
import ButtonVote from '../UI/ButtonVote'
import BarVote from '../UI/BarVote'

const CardGrid = () => {
  return (
    <article className={`${classes.card} relative text-white`} style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(/images/kanye.jpg) no-repeat center center" }}>
      
      <div className={`${classes.card_content}`}>
        <h2 className={`${classes.card_title} text-3xl xl:text-4xl`}>Kanye West</h2>
        <p className="text-base leading-tight">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…</p>
        <div className="text-white mb-3 mt-2  text-right text-xs">1 month ago in Entertainment</div>

        <div className="flex items-center justify-end">
          <ThumbUp className="mr-2" variant="grid" />
          <ThumbDown className="mr-2" variant="grid" />
          <ButtonVote variant="grid" />
        </div>
      </div>
      <div className="result_thumb absolute left-0 z-30" style={{ bottom: '160px'}}>
        <ThumbUp variant="grid" />
        {/* <ThumbDown variant="grid" /> */}
      </div>
      <BarVote thumbsUp="60" thumbsDown="40" variant="grid" />
    </article >
  )
}

export default CardGrid