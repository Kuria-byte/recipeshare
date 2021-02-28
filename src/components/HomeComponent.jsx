import React from 'react'
import logo from '../assets/img/logo-small.png'
import bg from '../images/bg6.jpg'
const HomeComponent = () => {
    return (
        <div>
        	<header class="background-main-color">
		<div class="container">
			<div class="header-output">
				<div class="header-in">

					<div class="row">
						<div class="col-lg-2 col-md-12">
							<a id="logo" href="/" class="d-inline-block margin-tb-5px"><img src={logo} alt=""/></a>
							<a class="mobile-toggle padding-13px background-main-color"  href='/' ><i class="fas fa-bars"></i></a>
						</div>
						<div class="col-lg-8 col-md-12 position-inherit">
							<ul id="menu-main" class="white-link dropdown-dark text-lg-center nav-menu link-padding-tb-17px">
								<li class="has-dropdown"><a href="/">Home</a>
							
								</li>
								<li class="has-dropdown"><a href="/">Recipes</a>
									<ul class="sub-menu text-left">
										<li><a href="recipes-grid-layout.html">Recipes - Grid Layout </a></li>
										<li><a href="recipes-list-layout.html">Recipes - List Layout</a></li>

									</ul>
								</li>
								<li class="has-dropdown"><a href="/">Pages</a>
									<ul class="sub-menu text-left">
								
									</ul>
								</li>
								<li><a href="page-contact-us.html">Conact Us</a></li>
							</ul>
						</div>
						<div class="col-lg-2 col-md-12 d-none d-lg-block">
							<hr class="margin-bottom-0px d-block d-sm-none"/>
							<a href="add-recipe.html" class="text-white ba-2 box-shadow float-right padding-lr-23px padding-tb-15px text-extra-large"><i class="fas fa-plus"></i></a>
							<a href="page-login.html" class="text-white ba-1 box-shadow float-right padding-lr-23px padding-tb-15px text-extra-large"><i class="far fa-user"></i></a>
						</div>
					</div>

				</div>
			</div>
		</div>
	</header>





    <div class="banner padding-tb-20px background-overlay" style={{ backgroundImage: `url(${bg})`}}  >
		<div class="container">

			<div class="padding-tb-120px z-index-2 position-relative">
				<div class="text-center">
					<h1 class="text-white pull-l icon-large font-weight-500 margin-bottom-40px">+30,000</h1>
					<h3 class="text-white icon-large font-weight-100">Cooking Recipes</h3>
				</div>
				<div class="margin-top-45px">
					<div class="row justify-content-center margin-tb-60px">
						<div class="col-lg-8">
							<div class="listing-search">
								<form class="row no-gutters">
									<div class="col-md-8">
										<div class="keywords">
											<input class="listing-form first" type="text" placeholder="Keywords..." value=""/>
										</div>
									</div>

									<div class="col-md-4">
										<a class="listing-bottom background-second-color box-shadow" href="/">Search Now</a>
									</div>
								</form>
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

export default HomeComponent
