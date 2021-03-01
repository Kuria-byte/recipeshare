import React from 'react'
import CategorySection from '../components/CategorySection'
import Footer from '../components/Footer'
import HomeComponent from '../components/HomeComponent'
import RecipeOverview from '../components/RecipeOverview'

const HomePage = () => {
    return (
        <div>
        <HomeComponent/>
        <CategorySection/>
        <RecipeOverview/>
        <Footer/>
      </div>
    )
}

export default HomePage
