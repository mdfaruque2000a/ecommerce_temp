import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
//import Products from './Component/font/Products/Products';
//import data from './Component/back/Data/Data';
//import Header from './Component/font/Header/Header';
//import Routes from './Component/font/Routes/Routes';
//import { BrowserRouter as Router } from 'react-router-dom';
const App = () => 
  {
    //const {productItems}=data;
    return( 
      <div>
        <Navbar/>
        <Home/>
        
        {/* <Products/> */}
        {/* <data/> */}
    {/* <Router>
      <Header/>
      <Routes/> */}
      {/* <Routes productItems={productItems}/>
      <Routes/> */}
    {/* </Router> */}
    </div>
      
      );
  };

export default App;
