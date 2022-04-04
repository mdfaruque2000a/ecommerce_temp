import React from "react";
const Cart=({img,title})=>{
    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={img} alt="Card image cap"/>
            
  <div  className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
        // <div>
        //     <img src={img} alt=''/>
        //     <p>{title}</p>
        // </div>
    )
}
export default Cart;