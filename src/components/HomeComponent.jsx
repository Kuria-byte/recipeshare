import React from 'react'
import bg from '../images/bg6.jpg'
import Header from './Header'
const HomeComponent = () => {
    return (
        <div>
        
<Header/>
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
