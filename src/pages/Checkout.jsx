import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeFromCart, incrementQuantity, decrementQuantity } from '../rtk/cartSlice'
import { Link } from 'react-router-dom'

function Checkout() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)

    const handlePlaceOrder = () => {
        alert("Order placed successfully! ✅")
        dispatch(clearCart())
    }

    if (cart.length === 0) {
        return (
            <div className="mt-20 text-center">
                <p className="text-2xl text-gray-600 mb-4">Your Cart Is Empty</p>
                <Link to="/" className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-600 transition">
                    Continue Shopping
                </Link>
            </div>
        )
    }

    return (
        <section>
            <div className="mt-20 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Checkout</h1>
                    </header>

                    <div className="mt-8">
                        <ul className="space-y-4">
                            {cart?.map((item) => (
                                <li key={item.id} className="flex items-center gap-4">
                                    <img
                                        src={item?.image}
                                        alt={item?.title}
                                        className="size-16 rounded-sm object-cover"
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-gray-900">{item?.title}</h3>
                                        <p className="text-sm text-gray-600">${item?.price}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center border rounded">
                                            <button
                                                onClick={() => dispatch(decrementQuantity(item))}
                                                className="px-2 py-1 text-gray-600 hover:text-gray-800"
                                            >
                                                -
                                            </button>
                                            <span className="px-3 py-1 text-sm font-medium">
                                                {item.quantity || 1}
                                            </span>
                                            <button
                                                onClick={() => dispatch(incrementQuantity(item))}
                                                className="px-2 py-1 text-gray-600 hover:text-gray-800"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-sm font-medium">
                                                ${((item.price * (item.quantity || 1)).toFixed(2))}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => dispatch(removeFromCart(item))}
                                            className="text-gray-600 transition hover:text-red-600"
                                        >
                                            <span className="sr-only">Remove item</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 border-t pt-6">
                            <div className="space-y-2 mb-6">

                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-medium">Total Price:</span>
                                    <span className="text-lg font-bold text-teal-700">${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Link
                                    to="/"
                                    className="flex-1 bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition text-center"
                                >
                                    Continue Shopping
                                </Link>
                                <button
                                    onClick={handlePlaceOrder}
                                    className="flex-1 bg-teal-700 hover:bg-teal-600 text-white px-6 py-2 rounded transition"
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
