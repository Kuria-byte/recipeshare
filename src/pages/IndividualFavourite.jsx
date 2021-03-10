import React from 'react'

const IndividualFavourite = () => {
    return (
        <div>

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
									<div class="col-4 text-left"><a href="#" class="text-red"><i onClick={handleSave} class="far fa-heart"></i> Save</a></div>
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
											<p class="margin-top-15px text-grey-2">This recipes are really good, I always save some for later </p>
										</div>
									</li>
									<li class="border-bottom-1 border-grey-1 margin-bottom-20px">
										<img src="http://placehold.it/60x60" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
										<div class="margin-left-85px">
											<a class="d-inline-block text-dark text-medium margin-right-20px" href="/">Rabie Elkheir </a>
											<span class="text-extra-small">Date :  <a href="/" class="text-main-color">July 15, 2020</a></span>
											<div class="rating">
												<ul>
													<li class="active"></li>
													<li class="active"></li>
													<li></li>
													<li></li>
													<li></li>
												</ul>
											</div>
											<p class="margin-top-15px text-grey-2"> I'm in bed scrolling through my next meals, should i get breakfast or cocktails </p>
										</div>
									</li>
									<li class="border-bottom-1 border-grey-1 margin-bottom-20px">
										<img src="http://placehold.it/60x60" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
										<div class="margin-left-85px">
											<a class="d-inline-block text-dark text-medium margin-right-20px" href="/">Adel Alsaeed </a>
											<span class="text-extra-small">Date :  <a href="/" class="text-main-color">July 15, 2021</a></span>
											<div class="rating">
												<ul>
													<li class="active"></li>
													<li class="active"></li>
													<li class="active"></li>
													<li class="active"></li>
													<li class="active"></li>
												</ul>
											</div>
											<p class="margin-top-15px text-grey-2">Well detailed recipe informations, on my way to the grocery store </p>
										</div>
									</li>
								</ul>

							</div>
						</div>
					</div>


				</div>
			</div>

        
            
        </div>
    )
}

export default IndividualFavourite
