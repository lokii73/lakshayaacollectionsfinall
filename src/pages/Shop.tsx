import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Shop = () => (
  <div className="bg-gray-50 flex flex-col w-full max-w-full overflow-x-hidden">
    <div className="flex-1 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-luxury font-bold text-primary mb-1 sm:mb-2">
            Shop Our Collection
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Discover our complete range of exquisite handcrafted jewellery and accessories
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Shop;