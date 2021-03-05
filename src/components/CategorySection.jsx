import React, { useEffect } from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'

import { setSearchQuery } from '../Redux/Search/search.actions'
import { setRecipe} from '../Redux/Recipes/recipe.actions'

import breakfast from '../images/breakfast.jpg'
import beef from '../images/beef.jpg'
import cocktail from '../images/cocktail.jpg'
import salad from '../images/salad.jpg'
import burger from '../images/burgers.jpg'
import pizza from '../images/pizza.jpg'
import RecipeOverview from './RecipeOverview'



const CategorySection = ( {query, setQuery,recipes, setRecipe} ) => {


	const APP_ID = "6e821545"
	const APP_KEY = "62416024663e954d8a87f8360e32e985"
	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
	const getData = async () => {
	  if (query !== "") {
		const result = await Axios.get(url);
		if (!result.data.more) {
		  return console.log("No food with such name");
		}
		console.log(result);
		setRecipe(result.data.hits)
		console.log(recipes)
	
	  } else {
		console.log("Please fill the form");
	
	  }
	};



	const handleClick = (e) => {
		e.preventDefault();
		setQuery(e.target.id)
	}


	useEffect(()  =>  {
		getData()
	},[query]);




	return (


		<div class="background-light-grey">
			<div class="container padding-top-100px">
				<div class="row">

					<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
						<span class="d-block box-shadow background-main-color text-white hvr-float" >
							<div class="thum"><img src={breakfast} alt="" /></div>
							<h4 id="breakfast" class="text-center padding-15px" onClick={handleClick} >Breakfast</h4>

						</span>
					</div>

					<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px"  >
						<span class="d-block box-shadow background-main-color text-white hvr-float">
							<div class="thum"><img src={beef} alt="" /></div>
							<h4 id="Lunch" class="text-center padding-15px" onClick={handleClick}>Lunch</h4>
						</span>
					</div>
					<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px" >
						<span class="d-block box-shadow background-main-color text-white hvr-float">
							<div class="thum"><img src={cocktail} alt="" /></div>
							<h4 id="drinks" class="text-center padding-15px" onClick={handleClick}>Drinks</h4>
						</span>
					</div>
					<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px" >
						<span class="d-block box-shadow background-main-color text-white hvr-float">
							<div class="thum"><img src={salad} alt="" /></div>
							<h4 id="salad" class="text-center padding-15px" onClick={handleClick}>Salad</h4>
						</span>
					</div>
					<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
						<span class="d-block box-shadow background-main-color text-white hvr-float">
							<div class="thum"><img src={burger} alt="" /></div>
							<h4 id="burgers" class="text-center padding-15px" onClick={handleClick}>Burgers</h4>
						</span>
					</div>
					<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px"  >
						<span class="d-block box-shadow background-main-color text-white hvr-float">
							<div class="thum"><img src={pizza} alt="" /></div>
							<h4 id="pizza" class="text-center padding-15px" onClick={handleClick}>Pizza</h4>
						</span>
					</div>
				</div>
			</div>
{/* 			
				<div class="text-center">
					<span class="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white" >
						Load More Recipes
					</span>
				</div> */}

		</div>


	)
}

const mapStateToProps =(state)=>({
	query: state.query.query,
	recipes: state.recipes.recipe
 })
 
 const mapDispatchToProps = dispatch =>({
	 setQuery : (query) => dispatch(setSearchQuery(query)),
	 setRecipe: (recipe) => dispatch(setRecipe(recipe))
 })

export default connect(mapStateToProps,mapDispatchToProps) (CategorySection)

