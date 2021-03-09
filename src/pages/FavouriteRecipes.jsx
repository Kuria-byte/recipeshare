import React from 'react'
import { v4 as uuid } from 'uuid'
import Favourites from '../components/Favourites'
import Footer from '../components/Footer'




const FavouriteRecipes = ({ user }) => {

	let fetchedFavourites;
	let recipes = [];

	if (user) {
		recipes = user.favouriteRecipes
		console.log(recipes)

		if (recipes) {
			recipes.map((recipe) => fetchedFavourites = recipe)
			console.log(fetchedFavourites)
			
		}

	}


	return (
		<div>


			<div id="page-title" class="padding-tb-30px gradient-white">
				<div class="container text-left">
					<ol class="breadcrumb opacity-5">
						<li><a href="/">Home</a></li>
						<li class="active">recipes</li>
					</ol>
					<h1 class="font-weight-300">Recipes - Favourites</h1>
				</div>
			</div>

			<div class="container">
				<div class="margin-bottom-60px">
					<div class="listing-search box-shadow">
						<form class="row no-gutters">
							<div class="col-md-8">
								<div class="keywords">
									<input class="listing-form first" type="text" placeholder="Keywords..." value="" />
								</div>
							</div>

							<div class="col-md-4">
								<a class="listing-bottom background-second-color box-shadow" href="#">Search Now</a>
							</div>
						</form>
					</div>
				</div>
			</div>


			<div class="container margin-bottom-100px">

				{recipes !== [] &&
					recipes.map((recipe, index) => <Favourites key={uuid()} recipe={recipe} user={user} index={index} />) 

				}
			</div>
			<Footer />


		</div>
	)
}

// const mapStateToProps = (state) => ({
// 	// user: state.user.currentUser,

// })

export default (FavouriteRecipes)
