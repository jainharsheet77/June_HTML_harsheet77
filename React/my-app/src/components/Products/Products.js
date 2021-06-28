import axios from "axios";
import { useEffect, useState } from "react";

const Products=() =>{
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <div className="product">
        {products.length&&products.map((item, idx) => {
          return (
            <div className="card" style={{
              width:"18rem"
            }}>
              <img className="card-img-top" src={item.preview} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>);
            // <div key={item.id} className="item">
            //   <img src={item.preview} alt="product" />
            //   <h4>{item.name}</h4>
            //   <button
            //     onClick={(id) => {
            //       this.addToCart(item.name);
            //     }}
            //   >
            //     Add to cart
            //   </button>
            // </div>
          // );
        })}
      </div>
    </div>
  );
}

export default Products;