import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';

function Store() {
  return (
    <>
      <h1 className="text-center py-3">Welcome to the store!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productsArray.map((product, idx) => (
          <div key={idx} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Store;
