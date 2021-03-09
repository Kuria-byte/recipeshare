import React from 'react'	
import { withRouter } from "react-router-dom";


const UserRecipeComponent = ({ recipe, index, history, user }) => {

	const { image,	name, userName} = recipe;





	return (
		<div>
			<div class="row">
				<div class="col-lg-6 margin-bottom-30px">
					<div class="background-white thum-hover box-shadow hvr-float full-width">
						<div class="float-md-left margin-right-30px thum-xs">
						<img class="width-250px height-250px"  src={image}alt={name} />
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
							<h3><a href="#" class="d-block text-dark text-capitalize text-medium margin-tb-15px">{name}</a></h3>
							<hr />
							<div class="row no-gutters">
								<div class="col-4 text-left"><a href={"share"} target="_blank" class="text-red"><i class="fa fa-user" ></i> {userName}</a></div>

								<div class="col-8 text-right"><a href="#" class="text-grey-2"><i class="fas fa-share-alt"></i> save</a></div>
							
							</div>
						</div>
						
						<div class="clearfix">

						</div>
					</div>
				</div>


			</div>

		</div>
	)
}



export default withRouter(UserRecipeComponent)
