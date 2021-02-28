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
import HomeComponent from './components/HomeComponent'
import CategorySection from './components/CategorySection'
import RecipeOverview from './components/RecipeOverview'





function App() {
  return (
    <div className="App">
     <HomeComponent/>
     <CategorySection/>
     <RecipeOverview/>
    </div>
  );
}

export default App;
