import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Blog.module.css';
import axios from 'axios';

class Blog extends Component{
  constructor(props){
    super(props);
    this.state={
      ctr:0,
      loader:true,
      products:[],
      cart: []
    }
  }
  componentDidMount() {
    fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => res.json())
      .then((res) => {
        debugger;
        setTimeout(() => {
          this.setState({
            products: res,
            loader: false
          });
        }, 5000);
      })
      .catch((err) => console.log(err));

  }
  addToCart = (item) => {
    this.setState({
      cart: [...this.state.cart,item]
    });
  };
  increment=()=>{
    // this.setState({ctr:this.state.ctr<=10?this.state.ctr+1:0})
    this.setState({ctr:this.state.ctr+1});

  }
  decrement=()=>{
    // this.setState({ctr:this.state.ctr>0?this.state.ctr-1:10})
    this.setState({ctr:this.state.ctr-1});
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextState.ctr>=0&&nextState.ctr<=5){
      return true;
    }
    else{
      nextState.ctr=this.state.ctr>=5?5:0;
      return false;
    }
  }
  render(){
  const { loader, products, cart } = this.state;

  return (
    <div className={styles.Blog}>
      {cart.length && cart.map((item) => <li>{item}</li>)}
      {loader? (<h1>Loading...</h1>):(products.length && (
        <div className="product"> 
          {products.map((item,idx)=>{
            return(
              <div className="item">
                <img src={item.preview}/>
                <h4>{item.name}</h4>
                <button
                      onClick={(id) => {
                        this.addToCart(item.name);
                      }}
                    >
                      Add to cart
                    </button>
              </div>
            )
          })}
          </div>
        ))
      }
      <h2>{this.state.ctr}</h2>
      <button onClick={this.increment}>PLUS</button>
      <button onClick={this.decrement}>MINUS</button>  
    </div>
  )}
}

export default Blog;
