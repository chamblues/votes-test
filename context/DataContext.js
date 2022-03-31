import { createContext, useContext, useState, useEffect } from 'react'

export const DataContext = createContext({
    votes: [],
    initialVotes: () => { },
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

    // const initialVotesHandler = (votes) => {
    //     setVotes(votes)
    // }

    useEffect(() => {
        let isSubscribed = true;
        const votesMade = localStorage.getItem('votes')
        if (votesMade) {
            setVotes(JSON.parse(votesMade))
        }
        return () => (isSubscribed = false)


    }, [])


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

                localStorage.setItem('votes', JSON.stringify(updatedSubmittedVote))
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

                localStorage.setItem('votes', JSON.stringify(updatedSubmittedVote))
                return updatedSubmittedVote
            } else {
                return prevState
            }
        })
    }

    const dataContext = {
        votes,
        // initialVotes: initialVotesHandler,
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





