import React from 'react'
import Footer from '../components/Footer'


const FavouriteRecipes = () => {
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
							<input class="listing-form first" type="text" placeholder="Keywords..." value=""/>
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

<div class="row">
<div class="col-lg-6 margin-bottom-30px">
				<div class="background-white thum-hover box-shadow hvr-float full-width">
					<div class="float-md-left margin-right-30px thum-xs">
						<img class="width-250px" src="http://placehold.it/420x335" alt=""/>
					</div>
					<div class="padding-25px">
						<div class="rating">
							<ul>
								<li class="active"></li>
								<li class="active"></li>
								<li class="active"></li>
								<li class="active"></li>
								<li></li>
							</ul>
						</div>
						<h3><a href="#" class="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</a></h3>
						<hr/>
						<div class="row no-gutters">
							<div class="col-4 text-left"><a href="#" class="text-red"><i class="far fa-heart"></i> Save</a></div>
							<div class="col-8 text-right"><a href="#" class="text-grey-2"><i class="fas fa-users"></i> 6-8 servings</a></div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
			

</div>
</div>
<Footer/>
            
            
        </div>
    )
}

export default FavouriteRecipes
