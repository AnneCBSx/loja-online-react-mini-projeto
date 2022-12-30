import "./App.css";
import { FaCartPlus } from "react-icons/fa";
function Product(props) {
  function press() {
    let carProducts = JSON.parse(localStorage.getItem("carProducts"));
    if (carProducts == null) {
      localStorage.setItem(
        "carProducts",
        JSON.stringify([
          {
            name: props.name,
            price: props.price,
            url: props.url,
            amount: 1,
            src: props.src,
          },
        ])
      );
    } else {
      let filteredProducts = carProducts.filter(
        (product) =>
          product.name === props.name &&
          product.price === props.price &&
          product.url === props.url
      );
      if (filteredProducts.length === 0)
        localStorage.setItem(
          "carProducts",
          JSON.stringify([
            ...carProducts,
            {
              name: props.name,
              price: props.price,
              url: props.url,
              src: props.src,
              amount: 1,
            },
          ])
        );
      else {
        carProducts[carProducts.indexOf(filteredProducts[0])].amount += 1;
        localStorage.setItem("carProducts", JSON.stringify(carProducts));
      }
    }

    let a = JSON.parse(localStorage.getItem("carProducts"));
    console.log(a);
  }
  return (
    <div className="product">
      <img
        src={require(`${props.url}`)}
        width={122}
        height={162}
        alt="Vestido"
        style={{ border: "border: 1px solid " }}
      />
      <button onClick={press} class="btn">
        <p className="p">{props.name}</p>
        <p className="p">{props.price} R$</p>
        <FaCartPlus />
      </button>
    </div>
  );
}

export default Product;
