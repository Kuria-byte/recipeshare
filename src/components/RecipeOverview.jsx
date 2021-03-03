import React from 'react'
import RecipeItem from './RecipeItem'
import { v4 as uuid } from 'uuid'



const RecipeOverview = ({recipes, query}) => {




	return (


		<section class="padding-tb-100px background-light-grey">
			<div class="container">
				<div class="title text-center">
					<h2 class="font-weight-700 text-main-color">Latest {query} recipes</h2>
					<div class="row justify-content-center margin-bottom-45px">
						<div class="col-md-7">
							<p class="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
						</div>
					</div>
				</div>

				<div class="row">

					{recipes !== [] &&
						recipes.map((recipe, bookmarked) => <RecipeItem key={uuid()}  recipe={recipe} bookmarked={bookmarked} /> )
					
						}


				</div>

				{/* <div class="text-center">
					<a href="/" class="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white">Show All Recipes</a>
				</div> */}
			</div>

		</section>



	)
}

export default RecipeOverview
