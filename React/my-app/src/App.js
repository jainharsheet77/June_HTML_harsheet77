import logo from './logo.svg';
import './App.css';
import {data} from './data';
function App() {
  const user="Harsheet";
  const link="";
  let average=0;
  average=(data.reduce((acc,{price})=>acc+parseInt(price),0))/data.length;
  return (
    <div className="App">
      <h1>{average}</h1>
      <div className="product">
        {
          data.map((item,idx)=>{
            return(
              <div className="item">
                <img src={item.preview}/>
                <h4>{item.name}</h4>
              </div>
            )
          })
        }
      </div> 
    </div>
  );
  
}

export default App;