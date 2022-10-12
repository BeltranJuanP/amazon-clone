import { getSession, useSession } from "next-auth/react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import moment from "moment"
import db from "../../firebase"
import Order from "../components/Order"

function Orders({ orders }) {
    const { data: session, status } = useSession()

    return (
        <div>
            <Header/>

            <main className="min-h-screen max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">Your Orders</h1>
            
                {session ? (
                    <h2>{orders.length} Orders</h2>
                ) : (
                    <h2>Please sign in to see your orders</h2>
                )}
                
                <div className="mt-5 space-y-4">
                    {orders?.map(({id, amount, amountShipping, items, timestamp, images}) => (
                        <Order 
                            key={id}
                            id={id}
                            amount={amount}
                            amountShipping={amountShipping}
                            items={items}
                            timestamp={timestamp}
                            images={images}
                        />
                    ))}
                </div>

            </main>

            <Footer/>
        </div>
    )
}

export default Orders

export async function getServerSideProps(context) {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

    const session = await getSession(context)

    // no orders if there is no session
    if (!session) {
        return {
            props: {}
        }
    }

    // orders from firebase
    const stripeOrders = await db.collection("users").doc(session.user.email).collection("orders").orderBy("timestamp", "desc").get()

    // stripe orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            ).data,
        }))
    )

    return {
        props: {
            orders,
        }
    }

}