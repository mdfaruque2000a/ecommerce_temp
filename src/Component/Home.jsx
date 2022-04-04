import React from "react";
import Products from "./Products";
const Home =()=>
{
    return(
    <div className="hero">
        <div className="card bg-dark text-white">
            <img src="/pics/cy.jpg" className="card-img" alt="background" height="600px"/>
            {/* <img src="/pics/cy.jpg" className="card-img" alt="background" height="550px"/> */}
                <div class="card-img-overlay d-flex flex-column justify-content-center ">
                    <div className="container">
                        <h5 className="home-title">New Season arrivals</h5>
                    
                    {/* <h5 className="card-title">Card title</h5> display-3 fw-bolder mb-0*/}
                    <p className="home-text">
                        CHECK OUT ALL THE TRENDS
                    </p>
                    
                </div>
                </div>
        </div>
        <Products/>

        <div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="imgage" alt=''/>
            
  {/* <div  className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div> */}
</div>
        </div>




    </div>
    );
}
export default Home