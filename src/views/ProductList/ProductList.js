import React from 'react';
import {ProductCard, ProductsToolbar} from "./components";
import "./ProductList.scss"

const ProductList = props => {
  const products = [1, 2, 3, 4, 5, 8, 9, 1,];
  return (
    <div>
      <ProductsToolbar/>
      <div className="content" style={{backgroundColor: "#F4F4F4"}}>
        <div className="container product">
          <div className="row">
            {products.map(product =>
              <ProductCard product={product}/>
            )}
          </div>
          <div className="row">
            <div className="load">
              <button className="btn btn-lg">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductList;
