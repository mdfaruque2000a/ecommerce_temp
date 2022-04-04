import React, {useState, useEffect} from 'react';
import axios from "axios";
function Products() {
    const [categoryList, setCategoryList] = useState([]);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>{
            if (res && res.data) {
                setCategoryList(res.data);
                onClickCategory('');
            }
        })
    }, []);

    const onClickCategory = category => {
        let apipath = 'https://fakestoreapi.com/products';
        if (category !== '') {
            apipath = 'https://fakestoreapi.com/products/category/'+category;
        }
        axios.get(apipath)
        .then((res)=>{
            if (res && res.data) {
                setProductList(res.data);
            }
        })
    }

    const categoriesSection = () => {
        return (
            <div className="button d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={() => onClickCategory('')}>All</button>
                {categoryList && categoryList.length && categoryList.map((item) => 
                    <button className="btn btn-outline-dark me-2" onClick={() => onClickCategory(item)}>{item}</button>
                )}
            </div>
        );
    }

    const productListSection = () => {
        return (
            <div className='row'>
                {
                    productList && productList.length && productList.map((item, index)=>(
                        <div class="col-sm-3">
                            <div className="card">
                                <img className="card-img-top" src={item.image} alt="" style={{height: 150, width: 120, alignSelf: 'center'}} />
                                <div className="card-body">
                                    <h6 className="card-title">{item.title}</h6>
                                    <p className="card-text">Rs. {item.price}</p>
                                    <a href="#" className="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }

    return (
        <div className='container'>
            <div className='container-fluid'>
                {categoriesSection()}
                {productListSection()}
            </div>
        </div>
    )
}
export default Products;
