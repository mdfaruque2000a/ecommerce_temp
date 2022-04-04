import axios from "axios";
import React from "react";
import Cart from "../../Cart";
import "./Products.css"; 
//import {useState} from 'react';
class Products extends React.Component
{
    //const [data,setData]=useState([]);

    state={
        data:[],
    
    }
    disp=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(
            (res)=>{

                //console.log(res.data)
                this.setState(
                    {
                        data:res.data

                        // id:res.data.id,
                        // title:res.data.title,
                        // price:res.data.price,
                        // description:res.data.description,
                        // category:res.data.category,
                        // image:res.data.image,
                        // rating:res.data.rating,
                        
                    }
                    
                )
                console.log('data',this.state.data)
            }

        )
        .catch(
            (err)=>{
                console.log("Error :"+err)
            }
        )
    }
    //console.log('data',this.state.data)
    render()
    {
    return(
        <div className="products">
            <input type="button" value="show" onClick={this.disp}/>
            <br></br>
            
                {
                    this.state.data.map((item)=>(
                    //  <li>{item.image}</li>
                    //<img src={item.image} alt=''/>
                        
                    <Cart img={item.image} title={item.title}/>
                    
                    ))
                    
                }                
            

        
        </div>
        
    );
}
}
export default Products;
