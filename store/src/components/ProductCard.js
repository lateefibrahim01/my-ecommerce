import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-3">
        <img src={product.img} alt={product.title} className="w-full h-48 object-cover" />
        <h3 className="text-xl font-bold mt-2">{product.title}</h3>
        <p className="text-gray-700">${product.price}</p>
        {productQuantity > 0 ? (
          <>
            <div className="flex items-center mt-4">
              <label className="mr-2">In Cart: {productQuantity}</label>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                onClick={() => cart.addOneToCart(product.id)}
              >
                +
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                onClick={() => cart.removeOneFromCart(product.id)}
              >
                -
              </button>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4"
              onClick={() => cart.deleteFromCart(product.id)}
            >
              Remove from cart
            </button>
          </>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
