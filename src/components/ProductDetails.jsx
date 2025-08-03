import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrementQuantity, incrementQuantity } from '../rtk/cartSlice'

function ProductDetails() {
    const { id } = useParams()
    const products = useSelector(state => state.products)
    const product = products.find(product => String(product.id) === id) 

    const dispatch = useDispatch()

    const cartItem = useSelector(state => state.cart.find(item => String(item.id) === id))

    if (!product) return <div className="text-center text-red-600 mt-32 text-xl">The Product Not Found!</div>

    return (
        <section className="pt-28 pb-20 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white min-h-screen font-['Poppins']">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <div className="w-full h-[450px] bg-white rounded-xl flex justify-center items-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="object-contain h-full"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
                    <p className="text-green-600 text-sm font-medium mb-2">In Stock</p>
                    <p className="text-gray-600 text-base mb-6">{product.description}</p>
                    <p className="text-3xl font-bold text-indigo-600 mb-4">${product.price}</p>

                    <div className='flex justify-between items-center'>
                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="bg-teal-700 hover:bg-teal-600 text-white px-6 py-2 rounded font-medium transition"
                        >
                            Add To Cart
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
