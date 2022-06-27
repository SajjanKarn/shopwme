import { useContext } from "react";
import Layout from "@/components/Layout";
import { CartContext } from "context/CartContext";
import CountUp from "react-countup";

const Cart = () => {
  const { cart, increaseQuantity, removeFromCart } = useContext(CartContext);

  return (
    <Layout>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Your Cart
      </h1>
      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base" cellSpacing={0}>
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Product</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="hidden text-right md:table-cell">
                    Unit price
                  </th>
                  <th className="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                          <img
                            src={item.image}
                            className="w-20 rounded"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <p className="mb-2 md:ml-4">
                            {item.name.slice(0, 55)}..
                          </p>
                          <form action="" method="POST">
                            <button
                              type="submit"
                              className="text-gray-700 md:ml-4"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <small>(Remove item)</small>
                            </button>
                          </form>
                        </a>
                      </td>
                      <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(event) => {
                                increaseQuantity(item.id, event.target.value);
                              }}
                              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium text-gray-600">
                          $
                          {item.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium text-gray-600">
                          $
                          {(item.price * item.quantity)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <hr className="pb-6 mt-6" />
            <div className="flex">
              <h2 className="font-bold mx-1 ">Total Price :</h2>
              <p className="mx-1 text-gray-900">
                $
                <CountUp
                  separator=","
                  end={cart.reduce(function (accumulator, item) {
                    return accumulator + item.price * item.quantity;
                  }, 0)}
                />
                {/*  */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
