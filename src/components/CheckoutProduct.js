import { StarIcon } from "@heroicons/react/solid"
import Currency from 'react-currency-formatter';
import Image from "next/image"
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { useRouter } from 'next/router'

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime}) {
    const router = useRouter()
    const dispatch = useDispatch();

    const addItemtoCart = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            hasPrime,
        }

        dispatch(addToCart(product))
    }

    const removeItemFromCart = () => {
        dispatch(removeFromCart({id}))
    }
    
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            <div className="col-span-3 mx-5">
                <p className="cursor-pointer" onClick={() => router.push(`/products/${id}`)}>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" key={i}/>
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price}/>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img 
                            loading="lazy"
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""
                        />
                        <p className="text-xs text-gray-500"> FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
                    
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemtoCart}>Add to Cart</button>
                <button className="button" onClick={removeItemFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct