import React from 'react'
import  { useState } from 'react';
import Axios from 'axios'


import bg from '../images/bg6.jpg'
import Header from './Header'
import RecipeOverview from './RecipeOverview';
import CategorySection from './CategorySection';



const HomeComponent = () => {


    const [query, setQuery] = useState("")
	let [recipes, setRecipes] = useState([])
	const [alert, setAlert] = useState("");
  
	const APP_ID = "6e821545"
	const APP_KEY = "62416024663e954d8a87f8360e32e985"
	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
	const getData = async () => {
	  if (query !== "") {
		const result = await Axios.get(url);
		if (!result.data.more) {
		  return setAlert("No food with such name");
		}
		console.log(result);
		setRecipes(result.data.hits);
        setQuery("")
		setAlert("");
	  } else {
		setAlert("Please fill the form");
		setAlert(alert)
	  }
	};


  
	const onChange = (e) => {
	  setQuery(e.target.value)
  
	}
  
	const onSubmit = (e) => {
	  e.preventDefault();
  
	  getData();
	}


    return (



        <div>
        
<Header/>
    <div class="banner padding-tb-20px background-overlay" style={{ backgroundImage: `url(${bg})`}}  >
		<div class="container">

			<div class="padding-tb-120px z-index-2 position-relative" >
				<div class="text-center">
					<h1 class="text-white pull-l icon-large font-weight-500 margin-bottom-40px">+30,000</h1>
					<h3 class="text-white icon-large font-weight-100">Cooking Recipes</h3>
				</div>
				<div class="margin-top-45px">
					<div class="row justify-content-center margin-tb-60px">
						<div class="col-lg-8">
							<div class="listing-search">
								<form class="row no-gutters" onSubmit={onSubmit}>
									<div class="col-md-8">
										<div class="keywords" id="keys" value='chicken' >
											<input class="listing-form first" type="text" placeholder="Keywords..." onChange={onChange} value={query}/>
										</div>
									</div>

									<div class="col-md-4">
										<button class="listing-bottom background-second-color box-shadow" onClick={getData} type="submit" >Search Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
 


	</div>
	<CategorySection/>
	{recipes === [] ? "":  <RecipeOverview recipes={recipes} query={query}/> }


</div>
            
 
    )
}

export default HomeComponent
