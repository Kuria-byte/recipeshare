import React from 'react'	
import { withRouter } from "react-router-dom";
import { deleteFavourite } from '../Firebase/firebase.utils'
import Toastify from 'toastify-js'

const Favourites = ({ recipe, index, history, user }) => {


	const { label, image, url } = recipe;
	let servings = recipe.yield;
	let share = `https://www.facebook.com/sharer/sharer.php?u=${url}`


	  let handleDelete = async =>{
		  if (user){
			deleteFavourite(recipe, user.id)
			Toastify({
                text: `Deleted from favourites`,
                backgroundColor: "linear-gradient(to right, #f44336, #ed3f32, #e73b2d, #e03629, #da3225)",
                className: "success",
                duration: 7000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: 'center', // `left`, `center` or `right`
                stopOnFocus: true,
              }).showToast()

		  }
		 
	  }




	return (
		<div>
			<div class="row">
				<div class="col-lg-6 margin-bottom-30px">
				<i class="fa fa-times" onClick={handleDelete}></i>
					<div class="background-white thum-hover box-shadow hvr-float full-width">
						<div class="float-md-left margin-right-30px thum-xs">
						<img class="width-250px" src={image} alt={label} />
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
							<h3><a href="#" class="d-block text-dark text-capitalize text-medium margin-tb-15px">{label}</a></h3>
							<hr />
							<div class="row no-gutters">
								<div class="col-4 text-left"><a href={share} target="_blank" class="text-red"><i class="fa fa-share-alt" ></i>  share</a></div>

								<div class="col-8 text-right"><a href="#" class="text-grey-2"><i class="fas fa-users"></i> {servings}servings</a></div>
							
							</div>
						</div>
						
						<div class="clearfix"></div>
					</div>
				</div>


			</div>

		</div>
	)
}



export default withRouter(Favourites)
