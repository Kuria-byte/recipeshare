import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import Recipe from "./pages/Recipe"


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
import AddRecipe from "./pages/AddRecipe";





function App() {




  return (
    <div className="App">
     <Switch>
     <Route exact path="/" component={HomePage} />
     <Route exact path="/login" component={SignIn} />
     <Route exact path="/addrecipe" component={AddRecipe} />
     <Route exact path="/recipe" component={Recipe} />
     </Switch>
    </div>
  );
}

export default App;
