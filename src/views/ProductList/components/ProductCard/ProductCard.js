import React from 'react';
import PropTypes from 'prop-types';
import "./ProductCard.scss"

const ProductCard = props => {
  const {product} = props;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
      <div className="card">
        <img className="card-img"
             src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
             alt="Vans" height="234px" width="156px"/>
        <div className="card-img-overlay d-flex justify-content-start d-percentage">
          <div className="card-link text-white d-percentage__text">
            -10 %
          </div>
        </div>
        <div className="card-body p-4">
          <h4 className="card-title">Men Women Vintage PU Leather Bag Back Pack</h4>
          <h6 className="card-subtitle mb-2 text-muted jadira-bags">Jadira Bags</h6>
          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-success d-flex">
              <h5 className="mt-4 new-price">2,122 KSH</h5>
              <h6 className="mt-4 p-2 text-muted old-price"><s>2,322 KSH</s></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
