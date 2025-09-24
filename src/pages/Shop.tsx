import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Shop = () => (
  <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-6 text-center">Shop</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Shop;