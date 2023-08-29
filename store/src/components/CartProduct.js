import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <h3 className="text-xl font-bold mb-2">{productData.title}</h3>
      <p className="mb-2">{quantity} total</p>
      <p className="mb-4">${(quantity * productData.price).toFixed(2)}</p>
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-sm text-sm"
        onClick={() => cart.deleteFromCart(id)}
      >
        Remove
      </button>
      <hr className="my-4" />
    </>
  );
}

export default CartProduct;
