import React from 'react'
import { withRouter } from "react-router-dom";
import { v4 as uuid } from 'uuid'
import UserRecipeComponent from '../components/UserRecipeComponents'
import Footer from '../components/Footer'



const UserRecipes = ({ user, userRecipes , history}) => {

    let recipesObject;
    let recipeArray =[]

    if (user ) {
        recipesObject = userRecipes[0]
        let { UsersRecipes } = recipesObject
        if (recipesObject) {
            recipeArray = UsersRecipes
        }
    }




    return (
        <div>


            <div id="page-title" class="padding-tb-30px gradient-white">
                <div class="container text-left">
                    <ol class="breadcrumb opacity-5">
                        <li><a href="/">Home</a></li>
                        <li class="active">recipes</li>
                    </ol>
                    <h1 class="font-weight-300">Recipes - Social Recipes</h1>
                </div>
            </div>

            <div class="container">
                <div class="margin-bottom-60px">
                    <div class="listing-search box-shadow">
                        <form class="row no-gutters">
                            <div class="col-md-8">
                                <div class="keywords">
                                    <input class="listing-form first" type="text" placeholder="Keywords..." value="" />
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

                {recipeArray !== [] &&
					recipeArray.map((recipe, index) => <UserRecipeComponent key={uuid()} recipe={recipe} user={user} index={index} />) 

				}
            </div>
            <Footer />


        </div>
    )
}


export default withRouter(UserRecipes)
