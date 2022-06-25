import Layout from "@/components/Layout";
import { CartContext } from "context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Layout>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Your Cart
      </h1>
      <div class="flex justify-center my-6">
        <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div class="flex-1">
            <table class="w-full text-sm lg:text-base" cellspacing="0">
              <thead>
                <tr class="h-12 uppercase">
                  <th class="hidden md:table-cell"></th>
                  <th class="text-left">Product</th>
                  <th class="lg:text-right text-left pl-5 lg:pl-0">
                    <span class="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span class="hidden lg:inline">Quantity</span>
                  </th>
                  <th class="hidden text-right md:table-cell">Unit price</th>
                  <th class="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr>
                      <td class="hidden pb-4 md:table-cell">
                        <a href="#">
                          <img
                            src={item.image}
                            class="w-20 rounded"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <p class="mb-2 md:ml-4">{item.name.slice(0, 55)}..</p>
                          <form action="" method="POST">
                            <button type="submit" class="text-gray-700 md:ml-4">
                              <small>(Remove item)</small>
                            </button>
                          </form>
                        </a>
                      </td>
                      <td class="justify-center md:justify-end md:flex mt-6">
                        <div class="w-20 h-10">
                          <div class="relative flex flex-row w-full h-8">
                            <input
                              type="number"
                              value={item.quantity}
                              class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                            />
                          </div>
                        </div>
                      </td>
                      <td class="hidden text-right md:table-cell">
                        <span class="text-sm lg:text-base font-medium">
                          $
                          {item.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                      </td>
                      <td class="text-right">
                        <span class="text-sm lg:text-base font-medium">
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
            <hr class="pb-6 mt-6" />
            <div className="flex">
              <h2 className="font-bold mx-1">Total Price</h2>:
              <p className="mx-1 text-gray-600">
                $
                {cart
                  .reduce(function (accumulator, item) {
                    return accumulator + item.price * item.quantity;
                  }, 0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
