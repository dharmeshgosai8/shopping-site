import banner from './../../assets/images/home/banner-3.jpg';
import LeftBar from './LeftBar.js';
import RightBar from './RightBar.js';
import './Home.css';
import CartCount from './../CartCount.js';
import React, {useState, useEffect } from 'react';

function Home() {
    const DataApi = process.env.PUBLIC_URL + '/project.json';
    const [items, setItems] = useState([]);
    const [catID,setCatId] = useState();
    const [count, setCount] = useState();

    useEffect(() => {
        fetch(DataApi)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [DataApi])
    function getCatId(id){
        setCatId(id);
    }
    function myproduct(product) {
        // setProduct(products)
        var cnt = product.length;
        // console.log(count);
        setCount(cnt)
    }
    return(
        <div>
            <CartCount passCount={count} />
            <section>
                <img src={banner} alt="banner" width="100%" />
            </section>
            <div className="container mt-4">
                <LeftBar items={items} catgetId={getCatId}/>
                <RightBar items={items} passCatId={catID} getProduct={myproduct}/>
            </div>
        </div>
    )
}

export default Home;