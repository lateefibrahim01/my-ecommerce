import { useState, useContext } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { CartContext } from "../CartContext";
import CartProduct from './CartProduct';

function NavbarComponent() {
  const cart = useContext(CartContext);
  const [user, loading, error] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart.items })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if (response.url) {
        window.location.assign(response.url); // Forwarding user to Stripe
      }
    });
  }

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  
  if (loading) return null;
  if (!user) return null;

  if (user) {
    return (
      <div>
        <nav className="bg-gray-900 text-white p-3 flex justify-between items-center">
          <a href="/" className="text-lg font-bold">Ecommerce Store</a>
          <button className="text-white" onClick={handleShow}>Cart ({productsCount} Items)</button>
        </nav>
        <div className={`${show ? 'block' : 'hidden'} fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75`}>
          <div className="bg-white p-4 max-w-lg mx-auto rounded">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div>
              {productsCount > 0 ? (
                <>
                  <p>Items in your cart:</p>
                  {cart.items.map((currentProduct, idx) => (
                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                  ))}

                  <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-sm"
                    onClick={checkout}
                  >
                    Purchase items!
                  </button>
                </>
              ) : (
                <h1>There are no items in your cart!</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarComponent;
