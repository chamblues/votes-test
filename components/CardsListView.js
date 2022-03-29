import React from 'react'
import CardList from './Card/CardList'

const CardsListView = () => {
    return (
        <section className="section_list_view">
            <div className="container">
                <CardList />
                <CardList />
                <CardList />
                <CardList />
            </div>
        </section>
    )
}

export default CardsListView