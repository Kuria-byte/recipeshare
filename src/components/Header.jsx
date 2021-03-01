import React from 'react'
import logo from '../assets/img/logo-small.png'

const Header = () => {
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
								<li class="has-dropdown"><a href="/">Favourites</a>
									<ul class="sub-menu text-left">
								
									</ul>
								</li>
								<li><a href="page-contact-us.html">Conact Us</a></li>
							</ul>
						</div>
						<div class="col-lg-2 col-md-12 d-none d-lg-block">
							<hr class="margin-bottom-0px d-block d-sm-none"/>
							<a href="/addrecipe" class="text-white ba-2 box-shadow float-right padding-lr-23px padding-tb-15px text-extra-large"><i class="fas fa-plus"></i></a>
							<a href="/login" class="text-white ba-1 box-shadow float-right padding-lr-23px padding-tb-15px text-extra-large"><i class="far fa-user"></i></a>
						</div>
					</div>

				</div>
			</div>
		</div>
	</header>
            
        </div>
    )
}

export default Header
