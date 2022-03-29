import CardGrid from './Card/CardGrid'
import classes from './CardsGridView.module.css'

const CardsGridView = () => {
	return (

		<section className="section_grid_view">
			<div className="container">

				<div className={`${classes.grid_container} grid grid-flow-col md:grid-flow-row md:grid md:grid-cols-2 xl:grid-cols-3`}>
					<CardGrid />
					<CardGrid />
					<CardGrid />
					<CardGrid />
					<CardGrid />
					<CardGrid />
				</div>
			</div>
		</section>

	)
}

export default CardsGridView