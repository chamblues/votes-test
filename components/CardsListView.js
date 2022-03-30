import React from 'react'
import CardList from './Card/CardList'
import { useDataContext } from '../context/DataContext'

const CardsListView = ({ rulings }) => {
    const dataContext = useDataContext();

    const votes = dataContext.votes
    return (
        <section className="section_list_view">
            <div className="container">
                {rulings.map((ruling, index) => (
                    <CardList
                        key={index}
                        id={index}
                        category={ruling.category}
                        description={ruling.description}
                        name={ruling.name}
                        picture={ruling.picture}
                        thumbUpCount={ruling.votes.positive}
                        thumbDownCount={ruling.votes.negative}
                        cardVoted={votes.filter(vote => vote.id === index)}
                    />
                ))}


            </div>
        </section>
    )
}

export default CardsListView