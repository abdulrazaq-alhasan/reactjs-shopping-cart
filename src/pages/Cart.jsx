import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, decrementQuantity, incrementQuantity } from "../rtk/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

    if (!cartItems.length)
        return (
            <div className="mt-24 text-center text-2xl text-gray-600">
                Cart is Empty!
            </div>
        );

    return (
        <div className="max-w-[80%] mx-auto mt-24">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-teal-700">Your Cart</h1>
                <button
                    onClick={() => dispatch(clearCart())}
                    className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
                >
                    Clear Cart
                </button>
            </div>

            <div className="overflow-x-auto rounded shadow border border-gray-300">
                <table className="min-w-full text-sm divide-y divide-gray-200">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 text-left">#</th>
                            <th className="px-4 py-3 text-left">Product</th>
                            <th className="px-4 py-3 text-left">Image</th>
                            <th className="px-4 py-3 text-left">Price</th>
                            <th className="px-4 py-3 text-left">Quantity</th>
                            <th className="px-4 py-3 text-left">Total</th>
                            <th className="px-4 py-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {cartItems.map((item, index) => (
                            <tr key={item.id}>
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3 font-medium">{item.title}</td>
                                <td className="px-4 py-3">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 object-contain"
                                    />
                                </td>
                                <td className="px-4 py-3 font-semibold">
                                    <span> $ {item.price} </span>
                                </td>
                                <td className="px-4 py-3">
                                    <button onClick={() => dispatch(decrementQuantity(item))} className="bg-teal-700 hover:bg-teal-600 text-white px-2 py-1 rounded font-medium transition">-</button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button onClick={() => dispatch(incrementQuantity(item))} className="bg-teal-700 hover:bg-teal-600 text-white px-2 py-1 rounded font-medium transition">+</button>

                                </td>

                                <td className="px-4 py-3 font-bold text-gray-800">
                                    ${item.price * (item.quantity || 1)}
                                </td>
                                <td className="px-4 py-3 space-x-2">
                                    <button
                                        className="text-xl text-white px-3 py-1 rounded"
                                    >
                                        🖋️
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeFromCart(item))}
                                        className="text-l text-white px-3 py-1 rounded"
                                    >
                                        ❌
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* المجموع الكلي */}
            <div className="text-right mt-6">
                <span className="text-xl font-bold text-gray-700">
                    Total: ${totalPrice.toFixed(2)}
                </span>
            </div>
        </div>
    );
}

export default Cart;
