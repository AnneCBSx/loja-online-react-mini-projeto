import { useState } from "react";
import "./App.css";
import Product from "./product";
import CarProducts from "./carProducts";
import { FaCartArrowDown } from "react-icons/fa";

function App() {
  const [carrinho, setCarrinho] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Produtos</h2>
        <div className="header">
          <div style={{ width: "100px" }}></div>
          <h3>Confira os nossos lançamentos</h3>
          <button
            style={{ display: "flex", alignItems: "center" }}
            className="btn2"
            onClick={() => setCarrinho(!carrinho)}
          >
            {carrinho ? "voltar" : "carrinho"}
            <div style={{ width: "10px" }}></div>{" "}
            {!carrinho && <FaCartArrowDown />}
          </button>
        </div>
      </header>
      <div className="container">
        {!carrinho ? (
          <div className="products">
            <Product name="roupa" price={10} url="./images/roupa-1.png" />
            <Product name="roupa 2" price={100} url="./images/roupa-2.png" />
            <Product name="roupa 3" price={100} url="./images/roupa-3.png" />
          </div>
        ) : (
          <CarProducts></CarProducts>
        )}
      </div>
    </div>
  );
}

export default App;
