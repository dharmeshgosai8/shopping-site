import React, { useEffect } from 'react';
const imgPathVal = process.env.PUBLIC_URL+'/images/';

function RightBar(props) {
    // console.log(props.passCatId)
    var arr = localStorage.getItem('myCart') ? JSON.parse(localStorage.getItem('myCart')) : [];
    useEffect(() => {
        var cpn = document.querySelectorAll('.btn');
        for (let i = 0; i < cpn.length; i++) {
            var getId = cpn[i].getAttribute("prd_id");
            for (var product in arr) {
                if (arr[product]['id'] === getId) {
                    // document.getElementById(getId).setAttribute("disabled", "disabled");
                    // cpn.target.setAttribute("disabled", "disabled");
                    document.getElementById(getId).innerHTML = "Added";
                }
            }
        }
        document.getElementById('cnt').innerHTML = arr.length;
    });
    function addToCart(e) {
        // e.target.setAttribute("disabled", "disabled");
        e.preventDefault();
        var cartPrdId = e.target.getAttribute("prd_id");
        var cartPrdTitle = e.target.getAttribute("prd_title");
        var cartPrdImg = e.target.getAttribute("prd_img");
        var cartPrdPrice = e.target.getAttribute("prd_price");
        const intObj = {
            id: cartPrdId,
            title:cartPrdTitle,
            img:cartPrdImg,
            price: cartPrdPrice
        };
        // props.getProduct(product);
        arr.push(intObj);
        localStorage.setItem('myCart', JSON.stringify(arr));
        
        props.getProduct(arr);
        // e.target.setAttribute("disabled", "disabled");
        e.target.innerHTML = "Added";
    }
    const ID = props.passCatId;
    return (
        <div className="rightbar">
            <div>
                {props.items.map((item) =>
                    <ul key={item} > 
                        {(ID == 4) ? (
                            <div className="row">
                                {item.product.map(function (prd) {
                                    return (
                                        <li key={prd.id} data_id={prd.categoryId} className="col-md-4 mb-4">
                                            <div className="text-center prd-wrap">
                                                <img src={imgPathVal + prd.imgPath} alt="product" />
                                                <h4 className="mt-2">{prd.title}</h4>
                                                <p>{prd.price}</p>
                                                <button className="btn" id={prd.id} prd_id={prd.id} prd_title={prd.title} prd_price={prd.price} prd_img={imgPathVal + prd.imgPath} onClick={addToCart}>Add to Cart</button>                                                
                                            </div>
                                        </li>
                                    )
                                })}
                            </div>
                        ):ID ? (
                            <div className="row">
                                {item.product.filter(prd => prd.categoryId == ID).map(filteredID => (
                                    <li key={filteredID.id} data_id={filteredID.categoryId} className="col-md-4 mb-4">
                                        <div className="text-center prd-wrap">
                                            <img src={imgPathVal + filteredID.imgPath} alt="product" />
                                            <h4 className="mt-2">{filteredID.title}</h4>
                                            <p>{filteredID.price}</p>
                                            <button className="btn" id={filteredID.id} prd_id={filteredID.id} prd_title={filteredID.title} prd_price={filteredID.price} prd_img={imgPathVal + filteredID.imgPath} onClick={addToCart}>Add to Cart</button>
                                        </div>
                                    </li>
                                ))}
                            </div>
                        ):(
                            <div className="row">
                                {item.product.map(function (prd) {
                                    return (
                                        <li key={prd.id} data_id={prd.categoryId} className="col-md-4 mb-4">
                                            <div className="text-center prd-wrap">
                                                <img src={imgPathVal + prd.imgPath} alt="product" />
                                                <h4 className="mt-2">{prd.title}</h4>
                                                <p>{prd.price}</p>
                                                <button className="btn" id={prd.id} prd_id={prd.id} prd_title={prd.title} prd_price={prd.price} prd_img={imgPathVal + prd.imgPath} onClick={addToCart}>Add to Cart</button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </div>   
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default RightBar;