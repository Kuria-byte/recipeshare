import React from 'react'
import chicken from '../images/chicken.jpg'
import beef from '../images/beef.jpg'
import cocktail from '../images/cocktail.jpg'
import salad from '../images/salad.jpg'
import burger from '../images/burgers.jpg'
import pizza from '../images/pizza.jpg'


const CategorySection = () => {
    return (
        

<div class="background-light-grey">
		<div class="container padding-top-100px">
			<div class="row">
				<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
					<a href="/" class="d-block box-shadow background-main-color text-white hvr-float">
						<div class="thum"><img src={chicken} alt=""/></div>
						<h4 class="text-center padding-15px">Chicken</h4>
					</a>
				</div>
				<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
					<a href="/" class="d-block box-shadow background-main-color text-white hvr-float">
						<div class="thum"><img src={beef} alt=""/></div>
						<h4 class="text-center padding-15px">Beef</h4>
					</a>
				</div>
				<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
					<a href="/" class="d-block box-shadow background-main-color text-white hvr-float">
						<div class="thum"><img src={cocktail} alt=""/></div>
						<h4 class="text-center padding-15px">Cocktails</h4>
					</a>
				</div>
				<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
					<a href="/" class="d-block box-shadow background-main-color text-white hvr-float">
						<div class="thum"><img src={salad} alt=""/></div>
						<h4 class="text-center padding-15px">Salads</h4>
					</a>
				</div>
				<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
					<a href="/" class="d-block box-shadow background-main-color text-white hvr-float">
						<div class="thum"><img src={burger} alt=""/></div>
						<h4 class="text-center padding-15px">Burgers</h4>
					</a>
				</div>
				<div class="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
					<a href="/" class="d-block box-shadow background-main-color text-white hvr-float">
						<div class="thum"><img src={pizza} alt=""/></div>
						<h4 class="text-center padding-15px">Pizza</h4>
					</a>
				</div>
			</div>
		</div>
   
	</div>
   
     
    )
}

export default CategorySection

