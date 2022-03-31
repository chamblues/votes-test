import CardGrid from './Card/CardGrid'
import classes from './CardsGridView.module.css'
import { useDataContext } from '../context/DataContext'

const CardsGridView = ({ rulings }) => {

	const dataContext = useDataContext();

	const votes = dataContext.votes

	return (

		<section className="section_grid_view">
			<div className="container">

				<div className={`${classes.grid_container} grid grid-flow-col md:grid-flow-row md:grid md:grid-cols-2 xl:grid-cols-3`}>
					{rulings.map((ruling, index) => (
						<CardGrid
							key={index}
							id={index}
							category={ruling.category}
							description={ruling.description}
							name={ruling.name}
							picture={ruling.picture}
							dateTime={ruling.lastUpdated}
							thumbUpCount={ruling.votes.positive}
							thumbDownCount={ruling.votes.negative}
							cardVoted={votes.filter(vote => vote.id === index)}
						/>
					))}

				</div>
			</div>
		</section>

	)
}

export default CardsGridView