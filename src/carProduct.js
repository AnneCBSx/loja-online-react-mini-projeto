import "./App.css";
function CarProduct(props) {
  return (
    <div className="carProduct">
      <img
        src={require(`${props.url}`)}
        width={122}
        height={162}
        alt="Vestido"
        style={{ border: "border: 1px solid " }}
      />
      <p className="p">{props.name}</p>
      <p className="p">{props.price} R$</p>
      <p className="p">{props.amount}</p>
      <div className="moreLess">
        <button onClick={() => props.updateAmount(1, props)} class="btn3">
          {" "}
          <p>+</p>
        </button>
        <div style={{ height: "10px" }}></div>
        <button onClick={() => props.updateAmount(-1, props)} class="btn3">
          {" "}
          <p>-</p>
        </button>
      </div>
    </div>
  );
}

export default CarProduct;
