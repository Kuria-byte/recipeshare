import React from 'react'

const AddRecipe = () => {
    return (
        <div>
        	<div id="page-title" class="padding-tb-30px gradient-white">
		<div class="container">
			<ol class="breadcrumb opacity-5">
				<li><a href="/">Home</a></li>
				<li><a href="/">Add Recipe</a></li>
			</ol>
			<h1 class="font-weight-300">Add Recipe</h1>
		</div>
	</div>

	<div class="container">

		<div class="margin-tb-45px full-width">
			<h4 class="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10"><i class="far fa-list-alt margin-right-10px text-main-color"></i>Basic Informations</h4>
			<div class="padding-30px padding-bottom-30px background-white border-radius-10">
				<form>
					<div class="form-group margin-bottom-20px">
						<label><i class="far fa-list-alt margin-right-10px"></i> Recipe Title</label>
						<input type="text" class="form-control form-control-sm" id="ListingTitle" placeholder="Listing Title"/>
					</div>
					<div class="form-group margin-bottom-20px">
						<div class="row">
							<div class="col-md-6">
								<label><i class="far fa-folder-open margin-right-10px"></i> Category</label>
								<select class="form-control form-control-sm">
                                    <option>Fish</option>
                                    <option>Cocktails</option>
                                    <option>Eggs</option>
                                    <option>Salads</option>
                                    <option>Asian</option>
                                    <option>Pizza</option>
                                </select>
							</div>
							<div class="col-md-6">
								<div class="form-group margin-bottom-20px">
									<label><i class="far fa-flag margin-right-10px"></i> Keywords</label>
									<input type="text" class="form-control form-control-sm" id="ListingKeywords" placeholder="Keywords"/>
								</div>
							</div>
						</div>
					</div>

				</form>
			</div>
		</div>

		<div class="margin-bottom-45px full-width">
			<h4 class="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10"><i class="far fa-list-alt margin-right-10px text-main-color"></i>Description</h4>
			<div class="padding-30px padding-bottom-30px background-white border-radius-10">
				<div class="margin-bottom-20px">
					<textarea class="form-control" placeholder="Html Tag Enabled" id="exampleTextarea" rows="8"></textarea>
				</div>
				<div class="row">
					<div class="col-md-6 margin-bottom-20px">
						<label><i class="fas fa-video margin-right-10px"></i> Video URL</label>
						<input type="text" class="form-control form-control-sm" placeholder="http://www."/>
					</div>
					<div class="col-md-6 margin-bottom-20px">
						<label><i class="far fa-images margin-right-10px"></i> Image URL</label>
						<input type="text" class="form-control form-control-sm" placeholder="http://www."/>
					</div>
				</div>
			</div>
		</div>
		<a href="#/" class="btn btn-lg border-2  ba-1 text-white margin-bottom-80px btn-block border-radius-15 padding-15px box-shadow">Add Recipe</a>

	</div>
            
        </div>
    )
}

export default AddRecipe
