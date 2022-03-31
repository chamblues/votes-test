import classes from './CardGrid.module.css'
import ThumbUp from '../UI/ThumbUp'
import ThumbDown from '../UI/ThumbDown'
import ButtonVote from '../UI/ButtonVote'
import BarVote from '../UI/BarVote'
import { useDataContext } from '../../context/DataContext'
import useUpdateVote from '../../hooks/useUpdateVote'
import Moment from 'react-moment'

const CardGrid = ({ id, category, description, name, picture, dateTime, thumbUpCount, thumbDownCount, cardVoted }) => {

  const dataContext = useDataContext();
  const updateVote = useUpdateVote();

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
    const voteSelected = {
      id,
      voteValue: cardVoted[0].vote,
      thumbUpCount,
      thumbDownCount
    }
    updateVote(voteSelected)
    dataContext.voteSubmitted(id)

  }

  const onVoteAgainHandler = () => {
    dataContext.voteAgain(id)
  }

  return (
    <article
      className={`${classes.card} relative text-white`}
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(/images/" + picture + ") no-repeat center center",
        backgroundSize: "cover, cover"
      }}
    >

      <div className={`${classes.card_content}`}>
        <h2 className={`${classes.card_title} text-3xl xl:text-4xl`}>{name}</h2>
        <p className="text-base leading-tight ">{description.substring(0, 60).concat('...')}</p>
        <div className="text-white mb-3 mt-2  text-right text-xs">{eyebrowText}</div>

        <div className="flex items-center justify-end">
          {
            !isSubmitted && (
              <>
                <ThumbUp className={`mr-2 ${voteThumbUp}`} variant="grid" onVoteSelected={voteHandler} />
                <ThumbDown className={`mr-2 ${voteThumbDown}`} variant="grid" onVoteSelected={voteHandler} />
              </>
            )
          }

          <ButtonVote variant="grid" onVoteSubmitted={voteSubmittedHandler} onVoteAgain={onVoteAgainHandler} isSubmitted={isSubmitted} isEnabled={isEnabled} />
        </div>
      </div>
      <div className="result_thumb absolute left-0 z-30" style={{ bottom: '160px' }}>
        {thumbUpCount > thumbDownCount ? <ThumbUp variant="grid"/> : <ThumbDown variant="grid" />}
        
      </div>
      <BarVote thumbsUp={thumbUpCount} thumbsDown={thumbDownCount} variant="grid" />
    </article >
  )
}

export default CardGrid