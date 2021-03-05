import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'
import Header from '../components/Header'

import { setRecipe } from '../Redux/Recipes/recipe.actions'
import { setParameters } from '../Redux/Search/search.actions'

const Recipe = ({ match, recipes, setRecipe, setParameters, parameters }) => {

	//Getting params from url

	// let matchParmeters = window.location.pathname.substring(8);
	let recipeParameters = Number((match.params.id).replace(":", ""))


	if (recipeParameters === null){
		setParameters(recipeParameters)
	}

	// Destructuring Recipe Object
	let fetchedRecipe = {};
	recipes.filter((recipe, index) => index === recipeParameters).map((recipe) => fetchedRecipe = recipe)
	const { label, image, source, calories, ingredients, url } = fetchedRecipe.recipe;
	let servings = fetchedRecipe.recipe.yield


	return (
		<div>
			<Header />
			<div id="page-title" class="padding-tb-30px gradient-white">
				<div class="container text-left">
					<ol class="breadcrumb opacity-5">
						<li><a href="/">Home</a></li>
						<li class="active">Recipe</li>
					</ol>
					<h1 class="font-weight-300">{label}</h1>
				</div>
			</div>


			<div class="container">
				<div class="row">

					<div class="col-lg-8">
						<div class="margin-bottom-40px card border-0 box-shadow">
							<div class="card-img-top"><a href="/">
								<img style={{ marginLeft: "auto", marginTop: "15px", marginRight: "auto", display: "block" }} src={image} alt={label} /></a>
							</div>
							<div class="padding-lr-30px padding-tb-20px">
								<h5 class="margin-bottom-20px margin-top-10px"><a class="text-dark" href="/">{label}</a></h5>
								<div class="col-8 text-left" style={{ marginLeft: "-17px", marginBottom: "5px", marginTop: "-15px" }} ><a href="/" class="text-grey-2">
									Calories: {Math.ceil(calories)}</a></div>

								<div class="rating">
									<ul>
										<li class="active"></li>
										<li class="active"></li>
										<li class="active"></li>
										<li class="active"></li>
										<li></li>
									</ul>
								</div>
								<hr />
								<h3>Ingredients</h3>
								<ul>
									{ingredients.map((ingredient) => <li key={uuid()} > <strong>{Math.ceil(ingredient.weight)}  <span> grams</span> - </strong> {ingredient.text} </li>)}

								</ul>

								<hr />
								<div class="row no-gutters">
									<div class="col-4 text-left"><a href="/" class="text-red"><i class="far fa-heart"></i> Save</a></div>
									<div class="col-8 text-left"><a href="/" class="text-grey-2"><i class="fas fa-users" style={{ marginRight: "0px" }}></i> Servings: {servings} </a></div>

								</div>
							</div>
							<div class="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">


								<a href={url} class="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="http://placehold.it/50x50" class="height-30px border-radius-30 margin-right-15px" alt="" /> {source}</a>
							</div>
						</div>


						<div class="margin-bottom-40px box-shadow">
							<div class="padding-30px background-white">
								<h3><i class="far fa-star margin-right-10px text-main-color"></i> Review &amp; Rating</h3>
								<hr />

								<ul class="commentlist padding-0px margin-0px list-unstyled text-grey-3">
									<li class="border-bottom-1 border-grey-1 margin-bottom-20px">
										<img src="http://placehold.it/60x60" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
										<div class="margin-left-85px">
											<a class="d-inline-block text-dark text-medium margin-right-20px" href="/">Bakhita alrawi </a>
											<span class="text-extra-small">Date :  <a href="/" class="text-main-color">July 15, 2016</a></span>
											<div class="rating">
												<ul>
													<li class="active"></li>
													<li class="active"></li>
													<li class="active"></li>
													<li class="active"></li>
													<li></li>
												</ul>
											</div>
											<p class="margin-top-15px text-grey-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
										</div>
									</li>
									<li class="border-bottom-1 border-grey-1 margin-bottom-20px">
										<img src="http://placehold.it/60x60" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
										<div class="margin-left-85px">
											<a class="d-inline-block text-dark text-medium margin-right-20px" href="/">Rabie Elkheir </a>
											<span class="text-extra-small">Date :  <a href="/" class="text-main-color">July 15, 2016</a></span>
											<div class="rating">
												<ul>
													<li class="active"></li>
													<li class="active"></li>
													<li></li>
													<li></li>
													<li></li>
												</ul>
											</div>
											<p class="margin-top-15px text-grey-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
										</div>
									</li>
									<li class="border-bottom-1 border-grey-1 margin-bottom-20px">
										<img src="http://placehold.it/60x60" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
										<div class="margin-left-85px">
											<a class="d-inline-block text-dark text-medium margin-right-20px" href="/">Adel Alsaeed </a>
											<span class="text-extra-small">Date :  <a href="/" class="text-main-color">July 15, 2016</a></span>
											<div class="rating">
												<ul>
													<li class="active"></li>
													<li class="active"></li>
													<li class="active"></li>
													<li class="active"></li>
													<li class="active"></li>
												</ul>
											</div>
											<p class="margin-top-15px text-grey-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
										</div>
									</li>
								</ul>

							</div>
						</div>

						<div class="margin-bottom-80px box-shadow">
							<div class="padding-30px background-white">
								<h3><i class="far fa-star margin-right-10px text-main-color"></i> Add Review </h3>
								<hr />
								<form>
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="inputName">Full Name</label>
											<input type="text" class="form-control" id="inputName" placeholder="Name" />
										</div>
										<div class="form-group col-md-6">
											<label for="inputEmail4">Email</label>
											<input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
										</div>
									</div>
									<div class="form-group">
										<label for="exampleFormControlTextarea1">Comment :</label>
										<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comment"></textarea>
									</div>
									<a href="/" class="btn-sm btn-lg btn-block background-main-color text-white text-center font-weight-bold text-uppercase border-radius-10 padding-10px">Add Now !</a>
								</form>
							</div>
						</div>



					</div>

					<div class="col-lg-4">
						<div class="listing-search box-shadow background-main-color padding-30px margin-bottom-30px">
							<form class="row no-gutters">
								<div class="col-md-12">
									<div class="keywords">
										<input class="listing-form first border-radius-10 margin-bottom-10px" type="text" placeholder="Keywords..." value="" />
									</div>
								</div>
								<div class="col-md-12">
									<div class="categories dropdown">
										<span class="listing-form d-block text-nowrap border-radius-10 margin-bottom-10px" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</span>
										<div class="dropdown-menu" aria-labelledby="dropdownMenu2">
											<button class="dropdown-item text-up-small" type="button">Fish</button>
											<button class="dropdown-item text-up-small" type="button">Cocktails</button>
											<button class="dropdown-item text-up-small" type="button">Salads</button>
											<button class="dropdown-item text-up-small" type="button">Asian</button>
											<button class="dropdown-item text-up-small" type="button">Fish</button>
											<button class="dropdown-item text-up-small" type="button">Cocktails</button>
											<button class="dropdown-item text-up-small" type="button">Salads</button>
											<button class="dropdown-item text-up-small" type="button">Asian</button>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<a class="listing-bottom border-radius-10 background-second-color box-shadow" href="/">Search Now</a>
								</div>
							</form>
						</div>

						<div class="row margin-tb-45px">
							<div class="col-6 margin-bottom-25px">
								<a href="/" class="d-block box-shadow background-main-color text-white hvr-float">
									<div class="thum"><img src="http://placehold.it/450x250" alt="" /></div>
									<h4 class="text-center padding-15px">Fish</h4>
								</a>
							</div>
							<div class="col-6 margin-bottom-25px">
								<a href="/" class="d-block box-shadow background-main-color text-white hvr-float">
									<div class="thum"><img src="http://placehold.it/450x250" alt="" /></div>
									<h4 class="text-center padding-15px">Cocktails</h4>
								</a>
							</div>
							<div class="col-6 margin-bottom-25px">
								<a href="/" class="d-block box-shadow background-main-color text-white hvr-float">
									<div class="thum"><img src="http://placehold.it/450x250" alt="" /></div>
									<h4 class="text-center padding-15px">Eggs</h4>
								</a>
							</div>
							<div class="col-6 margin-bottom-25px">
								<a href="/" class="d-block box-shadow background-main-color text-white hvr-float">
									<div class="thum"><img src="http://placehold.it/450x250" alt="" /></div>
									<h4 class="text-center padding-15px">Salads</h4>
								</a>
							</div>
						</div>

						<div class="widget widget_categories">
							<div class="margin-bottom-30px">
								<div class="padding-30px background-white border-radius-10">
									<h4><i class="fab fa-instagram margin-right-10px text-main-color"></i> Instagram</h4>
									<hr />
									<div class="row">
										<div class="col-6 margin-bottom-20px"><a href="/"><img class="border-radius-10" src="http://placehold.it/600x600" alt="" /></a></div>
										<div class="col-6 margin-bottom-20px"><a href="/"><img class="border-radius-10" src="http://placehold.it/600x600" alt="" /></a></div>
										<div class="col-6 margin-bottom-20px"><a href="/"><img class="border-radius-10" src="http://placehold.it/600x600" alt="" /></a></div>
										<div class="col-6 margin-bottom-20px"><a href="/"><img class="border-radius-10" src="http://placehold.it/600x600" alt="" /></a></div>
									</div>
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>

		</div>
	)
}

const mapStateToProps = (state) => ({
	recipes: state.recipes.recipe,
	parameters: state.query.parameters
})

const mapDispatchToProps = dispatch => ({
	setRecipe: (recipe) => dispatch(setRecipe(recipe)),
	setParameters: (parameters) => dispatch(setParameters(parameters))
})

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
