function Cart() {
    var arr = localStorage.getItem('myCart') ? JSON.parse(localStorage.getItem('myCart')) : [];
    // console.log(arr.length);

    function removeProduct(e) {
        e.preventDefault();
        var id = e.target.getAttribute("id");
        e.target.parentNode.parentNode.style.display="none";
        arr = arr.filter(function (element) {
            return element.id !== id;
        });
        localStorage.setItem('myCart', JSON.stringify(arr));
        document.getElementById('cnt').innerHTML = arr.length;
    }
    return(
        <div className="container">
            {arr.length > 0 ? (
                <div>
                <h3>Cart product</h3>
                <ul className="row">
                    {arr.map((item) =>                
                    <li className="col-sm-12 mb-4" key={item.id}>
                            <div className="d-flex align-items-center justify-content-around border border-secondary">
                            <img src={item.img} alt="product" />
                            <span>{item.title}</span>
                            <span>{item.price}</span>
                                <button id={item.id} type="button" className="btn btn-danger" onClick={removeProduct}>Remove</button>
                        </div>
                    </li>
                    )} 
                </ul>
                </div>
                ): 
                (
                    <div className="container">
                        <h3>No Product in Cart</h3>
                    </div>
                )
            }
        </div>
    )
}

export default Cart;