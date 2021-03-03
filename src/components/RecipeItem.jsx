import React from 'react'



const RecipeItem = ({ recipe }) => {


    const { label, image, source, url, calories } = recipe.recipe;
    // let bookmarked = recipe.bookmarked

    // const [bookmark, setBookmark] = useState(bookmarked)

  
    let servings = recipe.recipe.yield

    console.log(recipe.recipe.yield);


    return (
        <div class="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px">
            <div class="card border-0 box-shadow">
                <div class="card-img-top"><a href="/"><img src={image} alt="" /></a></div>
                <div class="padding-lr-30px padding-tb-20px">
                    <h5 class="margin-bottom-20px margin-top-10px"><a class="text-dark" href="/">{label}</a></h5>
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
                        <div class="col-8 text-left"><a href="/" class="text-grey-2"><i class="fas fa-calculator" style={{ marginRight: "5px" }}> </i>Calories: {Math.ceil(calories)}</a></div>
                        <div class="col-8 text-left"><a href="/" class="text-grey-2"><i class="fas fa-users" style={{ marginRight: "0px" }}></i> Servings: {servings} </a></div>

                    </div>
                </div>
                <div class="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                    <a href={url} class="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="http://placehold.it/50x50" class="height-30px border-radius-30 margin-right-15px" alt="" /> {source}</a>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem
