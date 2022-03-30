import { createContext, useContext, useState } from 'react'

export const DataContext = createContext({
    votes: [],
    selectVote: (id, vote) => { },
    voteSubmitted: (id) => { },
    voteAgain: (id) => { },

})

export const useDataContext = () => {
    const context = useContext(DataContext)
    return context;
}

export const DataProvider = (props) => {

    const [votes, setVotes] = useState([]);

    const selectVoteHandler = (id, vote) => {


        setVotes(prevState => {
            const existingCardIndex = prevState.findIndex(vote => vote.id === id)
            const existingCard = prevState[existingCardIndex]  // if doesn't exist it will show undefined

            let updatedCardVotes = [...prevState]

            if (existingCard) {
                updatedCardVotes[existingCardIndex].vote = vote
            } else {
                updatedCardVotes.push({
                    id,
                    vote,
                    isEnabled: true,
                    isSubmitted: false
                })
            }

            return updatedCardVotes


        })

    }

    const voteSubmittedHandler = (id) => {
        setVotes(prevState => {
            const existingCardIndex = prevState.findIndex(vote => vote.id === id)
            const existingCard = prevState[existingCardIndex]

            if (existingCard) {
                const updatedSubmittedVote = [...prevState]
                updatedSubmittedVote[existingCardIndex].isSubmitted = true

                return updatedSubmittedVote
            } else {
                return prevState
            }
        })
    }

    const voteAgainHandler = id => {
        setVotes(prevState => {
            const existingCardIndex = prevState.findIndex(vote => vote.id === id)
            const existingCard = prevState[existingCardIndex]

            if (existingCard) {
                const updatedSubmittedVote = [...prevState]
                updatedSubmittedVote[existingCardIndex].isSubmitted = false
                updatedSubmittedVote[existingCardIndex].vote = ''

                return updatedSubmittedVote
            } else {
                return prevState
            }
        })
    }

    const dataContext = {
        votes,
        selectVote: selectVoteHandler,
        voteSubmitted: voteSubmittedHandler,
        voteAgain: voteAgainHandler,
    }

    return (
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    )
}





