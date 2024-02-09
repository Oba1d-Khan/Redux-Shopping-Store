import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productID) => {
    dispatch(remove(productID));
  };
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={product.images}
              alt={product.title}
              className="w-40 object-cover "
            />
            <div className="p-4">
              <h2 className="text-gray-800 font-bold text-xl mb-2">
                {product.title}
              </h2>
              <p className="text-gray-700 text-base">
                {product.description.slice(0, 100)}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-xl">${product.price}</span>
              </div>
            </div>
            <button
              className="bg-orange-700 text-white p-2 rounded-md"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
