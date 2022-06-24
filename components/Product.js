import Link from "next/link";

const Product = ({ imageURL, category, name, price, slug }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full product-card">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={imageURL}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category.toUpperCase()}
        </h3>
        <Link href={`/products/${slug}`}>
          <h2 className="text-gray-900 title-font text-lg font-medium cursor-pointer">
            {name}
          </h2>
        </Link>
        <p className="mt-1">
          ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
    </div>
  );
};

Product.defaultProps = {
  imageURL: "https://dummyimage.com/420x260",
  category: "Category",
  name: "Default Name",
  price: "15",
};

export default Product;
