import BestSellerList from "./BestSellerList"
import { ArrowRight } from "lucide-react"
const BestSellers = () => {
    return (
        <main className="flex flex-col gap-4 p-2 mt-4">
            <section className="flex items-center justify-center">
                <p className="text-2xl sm:text-xl md:2xl lg:text-4xl font-bold">Shop Our Best Sellers Here</p>
            </section>

            <section>
                {/* Best Sellers List Component */}
                <BestSellerList />
            </section>

            <section className="flex justify-center py-6">
                <button className="group bg-black text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-gray-800 transition-all duration-300 w-[80%] sm:w-[50%] lg:w-[20%]">
                    View All
                    <ArrowRight
                        className="ml-2 opacity-0 transform translate-x-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-2"
                    />
                </button>
            </section>

        </main>
    )
}

export default BestSellers
