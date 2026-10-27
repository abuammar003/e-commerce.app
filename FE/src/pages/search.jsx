
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../context/product";
import ShoppingCard from "../components/card";
import LazyLoader from "../components/lazyLoader";

const normalize = (value = "") =>
  value.toLowerCase().trim().replace(/\s+/g, " ");

const Search = () => {
  const { products, isLoading, isError } = useProduct();
  const [searchParams] = useSearchParams();
  const query = normalize(searchParams.get("q") || "");

  const filteredProducts = products.filter((product) => {
    const title = normalize(product.name);
    const category = normalize(product.category);

    return title.includes(query) || category.includes(query);
  });

  if (isLoading) return <LazyLoader />;

  if (isError) {
    return (
      <p className="py-10 text-center text-red-500">
        Failed to load products. Please try again.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-screen-xl animate-[fadeIn_0.3s_ease-out]">
        <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl">
          Search Results
        </h1>

        {/* <p className="mb-6 text-sm text-gray-500">
          {query
            ? `${filteredProducts.length} products found for "${searchParams.get("q")}"`
            : "Type in the header search bar to find products."}
        </p> */}

        {filteredProducts.length > 0 && query ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {filteredProducts.map((product) => (
              <ShoppingCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-gray-500">
            {query
              ? "No products found. Try another title or category."
              : "Search for a product using the header above."}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
