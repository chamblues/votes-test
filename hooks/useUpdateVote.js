import { useCallback } from 'react'


const useUpdateVote = () => {

    const updateVote = useCallback(async ({id, voteValue, thumbUpCount, thumbDownCount}) => {

        let voteValueToSend;
        try {
            if (voteValue === 'positive') {
                voteValueToSend = {
                    negative: thumbDownCount,
                    positive: thumbUpCount + 1
                }
            } else {
                voteValueToSend = {
                    negative: thumbDownCount + 1,
                    positive: thumbUpCount
                }
            }

            const response = await fetch(`https://zemoga-test-f133f-default-rtdb.firebaseio.com/data/${id}/votes.json`,
                {
                    method: 'PATCH',
                    body: JSON.stringify(voteValueToSend)
                })

            const savedVote = response.json()
            

            return savedVote

        } catch (error) {

            // we could use some kind of notification here
            console.log(error)
        }
    }, [])


    return updateVote
}

export default useUpdateVote