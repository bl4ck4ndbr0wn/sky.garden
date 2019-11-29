import React from 'react';
import './ProductToolbar.scss'
import shoppinglady from "../../../../assets/deals/shoppinglady.png"
import discountcircle from "../../../../assets/deals/discountcircle.png"
import discountLine from "../../../../assets/deals/discount line.png"
import blackBubble from "../../../../assets/deals/black bubble .png"

const ProductCard = props => {

  return (
    <div className="toolbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <div className="toolbar-content">
              <div>
                <h1 className="toolbar-content__title">HOT holiday deals</h1>
                <p className="toolbar-content__description">
                  Sky. Garden loves all the fathers and knows that you need some
                  help in choosing something special. Here is few of the sweet things
                  we found and you might like.
                </p>
                <span>
                Deal expires in 01 : 13 : 12 hrs
              </span>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="toolbar__images">
              <img id="outerride" className="shoppinglady" src={shoppinglady} alt=""/>
              <div>

                <img id="innerride" className="discountcircle" src={discountcircle} alt=""/>
                <div className="text-block">
                  <h4>10 %</h4>
                  <hr className="discount-line"/>
                  <img id="innerride" className="discount-line" src={discountLine} alt=""/>
                </div>
                <div className="polygon">
                  <img id="innerride" className="black-bubble" src={blackBubble} alt=""/>
                  <div className="polygon-text-block">
                    <p className="polygon-text-block__text">
                      DELIVERY<br/>
                      SAME DAY!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
