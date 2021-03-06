import React from 'react'
import { addFavouriteRecipe} from '../Firebase/firebase.utils'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Toastify from 'toastify-js'


const RecipeItem = ({ recipe, match, history, index,user }) => {


    const { label, image, source, url, calories } = recipe.recipe;
    let servings = recipe.recipe.yield

    let favourites = recipe.recipe


    let handleSave = async => {
        if (user){
            addFavouriteRecipe(favourites, user.id)
            console.log(favourites)
             Toastify({
                text: `Added to favourites🎉`,
                backgroundColor: "linear-gradient(to right, #f44336, #ed3f32, #e73b2d, #e03629, #da3225)",
                className: "success",
                duration: 7000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: 'center', // `left`, `center` or `right`
                stopOnFocus: true,
              }).showToast()


        }else{
            history.push("/login")
        }
    }



    return (
        <div class="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px">
            <div class="card border-0 box-shadow">
                <div class="card-img-top"><span><img style={{ marginLeft: "auto", marginTop: "15px", marginRight: "auto", display: "block" }} src={image} alt="" id={index}
                    onClick={() => history.push(`/recipe/:${index}/${label}`)} />
                </span></div>

                <div class="padding-lr-30px padding-tb-20px">
                    <h5 class="margin-bottom-20px margin-top-10px"><span class="text-dark">{label}</span></h5>
                    <div class="col-8 text-left" style={{ marginLeft: "-15px", marginBottom: "5px", marginTop: "-17px" }} >
                        <a href="#" class="text-grey-2"> Calories: {Math.ceil(calories)}</a></div>
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
                    <div class="row no-gutters">
                    
                        <div class="col-4 text-left" ><span class="text-red"><i onClick={handleSave} class="far fa-heart" ></i> Save</span></div>
                        <div class="col-8 text-left"><span style={{ marginLeft: "15px" }} class="text-grey-2"><i class="fas fa-users" style={{ marginRight: "0px" }}></i> Servings: {servings} </span></div>

                    </div>
                </div>
                <div class="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                    <a href={url} target="_blank" class="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="http://placehold.it/50x50" class="height-30px border-radius-30 margin-right-15px" alt="" /> {source}</a>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    user: state.user.currentUser,
})



export default withRouter(connect(mapStateToProps)(RecipeItem)) ;
