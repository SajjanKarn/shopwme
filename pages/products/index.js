import Layout from "@/components/Layout";
import Product from "@/components/Product";

const Products = ({ products }) => {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map(
              ({ id, attributes: { title, price, productImage, slug } }) => (
                <Product
                  key={id}
                  name={title}
                  price={price}
                  imageURL={`http://localhost:1337${productImage.data[0].attributes.url}`}
                  slug={slug}
                />
              )
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

Products.defaultProps = {
  products: [],
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/products?populate=*`);
  const { data } = await res.json();

  return {
    props: { products: data },
  };
}

export default Products;
