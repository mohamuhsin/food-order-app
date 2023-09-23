import classes from "./Cart.module.css";

const Cart = () => {
  const cartItem = [
    { id: "c1", name: "sushi", amount: "2", price: "12.99" },
  ].map((item) => <li>{item.name}</li>);
  return (
    <div>
      cartitems
      <div></div>
      <div></div>
    </div>
  );
};

export default Cart;
