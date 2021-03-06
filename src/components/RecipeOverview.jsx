import React from 'react'
import { connect } from 'react-redux'
import RecipeItem from './RecipeItem'
import { v4 as uuid } from 'uuid'

import { setSearchCount } from '../Redux/Search/search.actions'



const RecipeOverview = ({  query, recipes, setCount, count }) => {


	return (

		<section class="padding-tb-100px background-light-grey">
			<div class="container">
				<div class="title text-center">
					<h2 class="font-weight-700 text-main-color">Latest {query} Recipes</h2>
					<div class="row justify-content-center margin-bottom-45px">
						<div class="col-md-7">
							<p class="text-grey-2">our app instantly finds matching recipes from the most popular cooking websites!</p>
						</div>
					</div>
				</div>

				<div class="row">

					{recipes !== [] &&
						recipes.map((recipe, index) => <RecipeItem key={uuid()} recipe={recipe} index={index}  />)

					}


				</div>
				{/* {
					query ==="" ? ""  : <div class="text-center">
						<a href="#" onClick={() => setCount(count + 4)} class="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white">
							Load More Recipes</a>
					</div>
				} */}

			</div>

		</section>

	)
}

const mapStateToProps = (state) => ({
	count: state.query.count,
	query: state.query.query,
	
})

const mapDispatchToProps = dispatch => ({
	setCount: (count) => dispatch(setSearchCount(count)),
})


export default connect(mapStateToProps, mapDispatchToProps)(RecipeOverview)
