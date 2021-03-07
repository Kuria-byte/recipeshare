import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils"
// components & Pages
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import Recipe from "./pages/Recipe"
import AddRecipe from "./pages/AddRecipe";
import FavouriteRecipes from "./pages/FavouriteRecipes";
import SignUp from "./pages/SignUp";

//Redux
import { setCurrentUser } from './Redux/User/user.actions'

// Libraries and styling
import './assets/css/animate.css'
import './assets/css/owl.carousel.css'
import './assets/css/owl.theme.css'
import './assets/css/bootstrap.min.css'
import './assets/css/hover-min.css'
import './assets/css/flag-icon.min.css'
import './assets/css/style.css'
import './assets/css/colors/main.css'
import './assets/css/elegant_icon.css'
import './assets/css/fontawesome-all.min.css'
import Header from './components/Header';



class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         this.props.dispatch(setCurrentUser( {
          id: snapShot.id,
          ...snapShot.data()
        }))

        });

      } else {
        this.props.dispatch(setCurrentUser(null))
        
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {


    return (
      <div className="App">

      <Header/>
        <Switch>
 
          <Route exact path="/" component={HomePage} />
          <Route path="/login" render={(props) => <SignIn  {...props}  />} />
          <Route path="/signup" render={(props) => <SignUp  {...props} />} />
          <Route exact path="/addrecipe" component={AddRecipe} />
          <Route path="/recipe/:id" render={(props) => <Recipe {...props} />} />
          <Route path="/favourites" render={(props) => <FavouriteRecipes {...props} />} />
         

        </Switch>
      </div>
    );

  }


}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,

})


export default connect(mapStateToProps, null)(App);
