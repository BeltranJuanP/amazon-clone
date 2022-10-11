import Image from "next/image"

function Footer() {
    return (
        <footer className="bg-amazon_blue-light text-white">
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto text-sm p-10">
                <div className="space-y-3 sm:my-10 lg:my-0">
                    <h3 className="text-base font-bold">Get to Know Us</h3>
                    <p className="w-1/2">Careers</p>
                    <p className="w-1/2">Amazon Newsletter</p>
                    <p className="w-1/2">Sustainability</p>
                    <p className="w-1/2">About Amazon</p>
                    <p className="w-1/2">Press Center</p>
                    <p className="w-1/2">Investor Relations</p>
                    <p className="w-1/2">Amazon Devices</p>
                    <p className="w-1/2">Amazon Science</p>
                </div>
                <div className="space-y-3 sm:my-10 lg:my-0">
                    <h3 className="text-base font-bold">Make Money with Us</h3>
                    <p className="w-1/2">Sell products on Amazon</p>
                    <p className="w-1/2">Sell apps on Amazon</p>
                    <p className="w-1/2">Supply to Amazon</p>
                    <p className="w-1/2">Become an Affiliate</p>
                    <p className="w-1/2">Become a Delivery Driver</p>
                    <p className="w-1/2">Start a package delivery business</p>
                    <p className="w-1/2">Self-Publish with Us</p>
                    <p className="w-1/2">Host an Amazon Hub</p>
                    <p className="w-1/2">See More Ways to Make Money</p>
                </div>
                <div className="space-y-3 sm:my-10 lg:my-0">
                    <h3 className="text-base font-bold">Amazon Payment Products</h3>
                    <p className="w-1/2">Amazon Rewards Visa Signature Cards</p>
                    <p className="w-1/2">Amazon Store Card</p>
                    <p className="w-1/2">Amazon Secured Card</p>
                    <p className="w-1/2">Amazon Business Card</p>
                    <p className="w-1/2">Shop with Points</p>
                    <p className="w-1/2">Credit Card Marketplace</p>
                    <p className="w-1/2">Reload Your Balance</p>
                    <p className="w-1/2">Amazon Currency Converter</p>
                </div>
                <div className="space-y-3 sm:my-10 lg:my-0">
                    <h3 className="text-base font-bold">Let Us Help You</h3>
                    <p className="w-1/2">Amazon and COVID-19</p>
                    <p className="w-1/2">Your Account</p>
                    <p className="w-1/2">Your Orders</p>
                    <p className="w-1/2">Shipping Rates & Policies</p>
                    <p className="w-1/2">Returns & Replacements</p>
                    <p className="w-1/2">Manage Your Content and Devices</p>
                    <p className="w-1/2">Your Recalls and Product Safety Alerts</p>
                    <p className="w-1/2">Amazon Assistant</p>
                    <p className="w-1/2">Help</p>
                </div>
            </div>
            <div className="flex flex-row justify-center p-10">
                    <Image 
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
            </div>
        </footer>
    )
}

export default Footer