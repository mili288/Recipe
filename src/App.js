import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';
import Recipes from './pages/Recipes';
import Desserts from './pages/Desserts';
import NoMatch from './pages/NoMatch';
import Salad from './pages/Salad';
import Shrimp from './RecipePages/Shrimp';
import Pork from './RecipePages/Pork';
import Orzo from './RecipePages/Orzo';
import Burrito from './RecipePages/Burrito';
import Cabbage from './RecipePages/Cabbage';
import Chilli from './RecipePages/Chilli';
import Mac from './RecipePages/Mac';
import Pancakes from './RecipePages/Pancakes';
import Pizza from './RecipePages/Pizza';
import Sushi from './RecipePages/Sushi';
import Burger from './RecipePages/Burger';
import Cookie from './RecipePages/Cookie';
import Bannana from './RecipePages/Bannana';
import Millionare from './RecipePages/Millionare';
import Poppyseed from './RecipePages/Poppyseed';
import Brownies from './RecipePages/Brownies';
import Cheesecake from './RecipePages/Cheesecake';



function App() {
  return (
    <div className="App">
      <div className="content-wrap">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/desserts" element={<Desserts/>}/>
          <Route path="/recipes/0001" element={<Salad/>}/>
          <Route path="/recipes/0002" element={<Shrimp/>}/>
          <Route path="/recipes/0003" element={<Pork/>}/>
          <Route path="/recipes/0004" element={<Orzo/>}/>
          <Route path="/recipes/0005" element={<Burrito/>}/>
          <Route path="/recipes/0006" element={<Cabbage/>}/>
          <Route path="/recipes/0007" element={<Chilli/>}/>
          <Route path="/recipes/0008" element={<Mac/>}/>
          <Route path="/recipes/0009" element={<Pancakes/>}/>
          <Route path="/recipes/0010" element={<Pizza/>}/>
          <Route path="/recipes/0011" element={<Sushi/>}/>
          <Route path="/recipes/0012" element={<Burger/>}/>
          <Route path="/recipes/0013" element={<Cookie/>}/>
          <Route path="/recipes/0014" element={<Bannana/>}/>
          <Route path="/recipes/0015" element={<Millionare/>}/>
          <Route path="/recipes/0016" element={<Poppyseed/>}/>
          <Route path="/recipes/0017" element={<Brownies/>}/>
          <Route path="/recipes/0018" element={<Cheesecake/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
        <Footer />
      </Router>
      </div>
    </div>
  );
}

export default App;
