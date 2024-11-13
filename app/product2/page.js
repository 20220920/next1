"use client"
import Link from "next/link"
import useCart from "../(store)/store"
import Modal from "../components/Modal"

export default function product2(props) {
    const { searchParams } = props
    const { price_id } = searchParams
    const product = useCart(state => state.product)
    const addItemToCart = useCart(state => state.addItemToCart)
    const { cost, productInfo, name, description } = product

    const cartItems = useCart(state => state.cart)
    const openModal = useCart(state => state.openModal)
    const setOpenModal = useCart(state => state.setOpenModal)

    
    if (!product?.name) {
      window.location.href = '/'
    }

    function handleAddToCart() {
        console.log('PRICE ID: ', price_id)
        const newItem = {
            quantity: 1,
            price_id,
            name,
            cost
        }
        addItemToCart({ newItem })
    }


    return (
        <section className="h-screen">
            <div className="flex">
        <div className="flex flex-col p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
                <div className="md:p-2 md:shadow">
                    <img src={productInfo.images[0]} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex md:flex-col md:items-start text-xl  items-center justify-between gap-2">
                        <h3>{name}</h3>
                        <p className="md:text-base">${cost / 100}</p>
                    </div>
                    <p className="text-sm flex-1">{description}</p>
                    <button onClick={handleAddToCart} className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2">Add to Cart</button>
                </div>
            </div>
        </div>

        <div>
        <div className='sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between'>
            {openModal && (
                <Modal />
            )}
        <Link href={'/product'}>
                <h1 className='uppercase cursor-pointer hover:scale-110 text-blue-700'>Back Products</h1>
            </Link>
            <div onClick={setOpenModal} className='relative cursor-pointer group grid place-items-center'>
                {cartItems.length > 0 && (
                    <div className='absolute aspect-square pointer-events-none h-5 sm:h-6 grid place-items-center top-0 bg-blue-400 text-white rounded-full right-0 -translate-y-1/2 translate-x-1/2' >
                        <p className='text-xs sm:text-sm'>{cartItems.length}</p>
                    </div>
                )}
                <i className="fa-solid cursor-pointer group-hover:text-slate-500 fa-cart-shopping"></i>
            </div>
            </div>
            </div>
            </div>
        </section>
    )
}
