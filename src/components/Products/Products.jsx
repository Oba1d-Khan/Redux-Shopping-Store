import { useState, useEffect } from "react";
import productsData from "./productsData";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const fetchedData = await productsData();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    })();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="container mx-auto p-4">
      {!loading ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img
                className="w-40  object-cover rounded-md mb-2"
                src={product.images}
                alt={product.title}
              />
              <p className="font-semibold text-lg mb-1">{product.title}</p>
              <p className="text-gray-600 mb-2">$ {product.price}</p>
              <button
                className="bg-orange-700 text-white p-2 rounded-md"
                onClick={() => handleAdd(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
