import classes from './CardList.module.css'
import ThumbUp from '../UI/ThumbUp'
import ThumbDown from '../UI/ThumbDown'
import Image from 'next/image'
import ButtonVote from '../UI/ButtonVote'
import BarVote from '../UI/BarVote'
import { useDataContext } from '../../context/DataContext'

const CardList = ({ id, category, description, name, picture, thumbUpCount, thumbDownCount, cardVoted }) => {

  const dataContext = useDataContext();

  const voteHandler = (voteValue) => {
    dataContext.selectVote(id, voteValue)
  }

  let voteThumbUp, voteThumbDown, isEnabled, isSubmitted, eyebrowText;

  if (cardVoted.length) {
    isEnabled = cardVoted[0].isEnabled
    isSubmitted = cardVoted[0].isSubmitted
    voteThumbUp = cardVoted[0].vote === 'positive' ? classes.voted : ''
    voteThumbDown = cardVoted[0].vote === 'negative' ? classes.voted : ''
  }

  if (isSubmitted) {
    eyebrowText = 'Thank you for voting!'
  } else {
    eyebrowText = '1 month ago in ' + category
  }

  const voteSubmittedHandler = () => {
    dataContext.voteSubmitted(id)
  }

  const onVoteAgainHandler = () => {
    dataContext.voteAgain(id)
  }


  return (
    <article data-id={id} className={`${classes.card} card_list relative pr-4 mb-5`} style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%)" }}>
      <div className="flex">
        <div className="card_image ">
          <Image src={`/images/${picture}`} className={`${classes.card_list_image} mix-blend-hue`} alt="Kanye" width={267} height={348} />
        </div>
        <div className={`text-white`}>
          <h2 className={`${classes.card_title} xl:text-4xl leading-loose`}>{name}</h2>
          <p className="sm:text-sm lg:text-xl leading-5 pr-4">{description.substring(0, 130).concat('...')}</p>
        </div>
        <div className="card_vote">
          <div style={{ fontSize: '15px' }} className="text-white mb-3 mt-2  text-right">{eyebrowText}</div>
          <div className="flex items-center">
            {
              !isSubmitted && (
                <>
                  <ThumbUp className={`mr-2 ${voteThumbUp}`} variant="list" onVoteSelected={voteHandler} />
                  <ThumbDown className={`mr-2 ${voteThumbDown}`} variant="list" onVoteSelected={voteHandler} />
                </>
              )
            }

            <ButtonVote variant="list" onVoteSubmitted={voteSubmittedHandler} onVoteAgain={onVoteAgainHandler} isSubmitted={isSubmitted} isEnabled={isEnabled}/>
          </div>

        </div>
      </div>

      <BarVote thumbsUp={thumbUpCount} thumbsDown={thumbDownCount} variant="list" />

      <div className="result_thumb absolute top-0 left-0">
        <ThumbUp variant="list" />
        {/* <ThumbDown variant="list" /> */}
      </div>
    </article >
  )
}

export default CardList