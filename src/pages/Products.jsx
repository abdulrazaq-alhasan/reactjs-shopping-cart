import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/productsSlice';
import { addToCart } from '../rtk/cartSlice';
import { useEffect } from 'react';

function Products() {
    const products = useSelector((state) => state.products);
    console.log('products', products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <section className=" mx-auto px-37 mt-25">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {products?.map((product) => (
                    <a
                        href="#"
                        className="group relative block overflow-hidden"
                        key={product.id}
                    >
                        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                            <span className="sr-only">Wishlist</span>

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
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </button>

                        <img
                            src={product.image}
                            alt={product.title}
                            className="p-5 h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
                        />

                        <div className="relative border border-gray-100 bg-white p-2">
                            <span className="bg-yellow-400 rounded-2xl px-3 py-1.5 text-xs font-medium whitespace-nowrap">
                                New
                            </span>

                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                                {product.title.slice(0, 25)}...
                            </h3>

                            <p className="mt-1.5 text-sm text-gray-700">
                                $ {product.price}
                            </p>

                            <form className="mt-4">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(addToCart(product))
                                    }}
                                    className="block w-full rounded-sm bg-teal-600 text-white p-2 text-sm font-medium transition hover:scale-105"
                                >
                                    Add to Cart
                                </button>
                            </form>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Products;
