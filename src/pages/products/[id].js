import { useRouter } from 'next/router'
import { useState } from "react"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Currency from 'react-currency-formatter';
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice"

function ProductPage({product}) {
    const dispatch = useDispatch()

    const addItemtoCart = () => {
        const p = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            hasPrime,
        }

        dispatch(addToCart(p))
    }

    const [rating, setRating] = useState(
        Math.floor(Math.random() * (5 - 1 + 1)) + 1
    );

    const [hasPrime, setPrime] = useState(Math.random() < 0.5)

    return (
        <div>
            <Header/>
            <main className="min-h-screen grid grid-col-1 md:grid-cols-2 max-w-screen-lg mx-auto p-10">
                <div>
                    <img src={product.image} className="p-2" />
                </div>
                <div className='space-y-5 p-5'>
                    <div className='border-b pb-5 space-y-2'>
                        <h1 className=" text-lg font-medium">{product.title}</h1>
                        <p className='text-xs italic text-gray-400'>{product.category}</p>
                        <div className="flex">
                            {Array(rating).fill().map((_, i) => (
                                <StarIcon className="h-5 text-yellow-500" key={i}/>
                            ))}
                        </div>
                    </div>
                    <div>
                        <span className="font-bold"><Currency quantity={product.price}/></span>
                        <p>{product.description}</p>
                    </div>
                    <div className='space-y-2'>
                        <button onClick={addItemtoCart} className="mt-auto button">Add to Cart</button>
                        {hasPrime && (
                            <div className="flex items-center space-x-2">
                                <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductPage

export async function getServerSideProps(context) {
    const id = parseInt(context.params.id)

    const url = "https://fakestoreapi.com/products"
    const products = await fetch(url).then((res) => res.json())

    var product = products.find(item => item.id === id)

    return  { 
        props: {
            product
        }
    }
  }