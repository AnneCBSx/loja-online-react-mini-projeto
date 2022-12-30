import { useEffect, useState } from "react";
import "./App.css";
import CarProduct from "./carProduct";
function CarProducts(props) {
  const [carProducts, setCarproducts] = useState([]);
  useEffect(() => {
    setCarproducts(JSON.parse(localStorage.getItem("carProducts")));
    console.log(
      JSON.parse(localStorage.getItem("carProducts")),
      JSON.parse(localStorage.getItem("carProducts")).length
    );
  }, []);
  function updateAmount(number, props) {
    let carProducts = JSON.parse(localStorage.getItem("carProducts"));
    let filteredProducts = carProducts.filter(
      (product) =>
        product.name === props.name &&
        product.price === props.price &&
        product.url === props.url
    );
    carProducts[carProducts.indexOf(filteredProducts[0])].amount += number;
    localStorage.setItem("carProducts", JSON.stringify(carProducts));
    setCarproducts(carProducts);
  }
  return (
    <div className="carProducts">
      {carProducts.length != null ? (
        carProducts.length != null ? (
          <>
            {carProducts.map((carProduct) => (
              <CarProduct
                name={carProduct.name}
                key={carProduct.name}
                price={carProduct.price}
                url={carProduct.url}
                amount={carProduct.amount}
                updateAmount={updateAmount}
              ></CarProduct>
            ))}
          </>
        ) : (
          <p>Carrinho Vazio</p>
        )
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default CarProducts;
