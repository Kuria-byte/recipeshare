import React, { useState } from 'react'
import Axios from 'axios'

import chicken from '../images/chicken.jpg'
import beef from '../images/beef.jpg'
import cocktail from '../images/cocktail.jpg'
import salad from '../images/salad.jpg'
import burger from '../images/burgers.jpg'
import pizza from '../images/pizza.jpg'
import RecipeOverview from './RecipeOverview'


const CategorySection = () => {
	const [query, setQuery] = useState("")
	let [recipes, setRecipes] = useState([])
	let [count, setCount] = useState(10)
	const [alert, setAlert] = useState("");

	const APP_ID = "6e821545"
	const APP_KEY = "62416024663e954d8a87f8360e32e985"
	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${count}`


	const getData = async () => {
		if (query !== "") {
			const result = await Axios.get(url);
			if (!result.data.more) {
				return setAlert("No food with such name");
			}
			console.log(result);
			setRecipes(result.data.hits);
			setAlert("");
		} else {
			setAlert("Please fill the form");
			setAlert(alert)
		}
	};


	const handleClick = (e) => {
		e.preventDefault();
		setQuery(e.target.id)
		if (recipes !== []) {
			getData()
		}

	}



	return (


		<div class="background-light-grey">
			<div class="container padding-top-100px">
				<div class="row">

					<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
						<span class="d-block box-shadow background-main-color text-white hvr-float" >
							<div class="thum"><img src={chicken} alt="" /></div>
							<h4 id="chicken" class="text-center padding-15px" onClick={handleClick}  >Chicken</h4>

						</span>
					</div>

					<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px"  >
						<span class="d-block box-shadow background-main-color text-white hvr-float">
							<div class="thum"><img src={beef} alt="" /></div>
							<h4 id="beef" class="text-center padding-15px" onClick={handleClick}>Beef</h4>
						</span>
					</div>
					<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px" >
						<span class="d-block box-shadow background-main-color text-white hvr-float">
							<div class="thum"><img src={cocktail} alt="" /></div>
							<h4 id="cocktail" class="text-center padding-15px" onClick={handleClick}>Cocktails</h4>
						</span>
					</div>
					<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px" >
						<span class="d-block box-shadow background-main-color text-white hvr-float">
							<div class="thum"><img src={salad} alt="" /></div>
							<h4 id="salad" class="text-center padding-15px" onClick={handleClick}>Salads</h4>
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
			{query === "" ? "" : <RecipeOverview recipes={recipes} query={query} />}

			{ query === "" ? "" :
				<div class="text-center">
					<span class="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white" onClick={() => { setCount(count + 10) }} >
						Load More Recipes
					</span>
				</div>}

		</div>


	)
}

export default CategorySection

