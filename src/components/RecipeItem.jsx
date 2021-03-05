import React from 'react'
import { withRouter } from "react-router-dom";



const RecipeItem = ({ recipe, match, history, index }) => {


    const { label, image, source, url, calories } = recipe.recipe;

    // let handleClick  = (e) =>{
    //     console.log(e.target.id)
    // }
  
    let servings = recipe.recipe.yield
  
   


    return (
        <div class="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px">
            <div class="card border-0 box-shadow">
                <div class="card-img-top"><span><img style={{marginLeft: "auto", marginTop: "15px", marginRight:"auto", display:"block" }} src={image} alt="" id={index}
                   onClick={() => history.push(`/recipe/:${index}/${label}`)} />
                  </span></div>

                <div class="padding-lr-30px padding-tb-20px">
                    <h5 class="margin-bottom-20px margin-top-10px"><span class="text-dark">{label}</span></h5>
                    <div class="col-8 text-left" style={{marginLeft: "-15px", marginBottom: "5px", marginTop: "-17px" }} >
                    <a href="/" class="text-grey-2"> Calories: {Math.ceil(calories)}</a></div>
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
                        <div class="col-4 text-left"><a href="/" class="text-red"><i class="far fa-heart"></i> Save</a></div>
                        <div class="col-8 text-left"><span  style={{marginLeft: "15px"}} class="text-grey-2"><i class="fas fa-users" style={{ marginRight: "0px" }}></i> Servings: {servings} </span></div>

                    </div>
                </div>
                <div class="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                    <a href={url} class="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="http://placehold.it/50x50" class="height-30px border-radius-30 margin-right-15px" alt="" /> {source}</a>
                </div>
            </div>
        </div>
    )
}

export default withRouter(RecipeItem);
