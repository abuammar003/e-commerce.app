import React from 'react'
import { Link } from 'react-router-dom';

function EmptyCartMessage() {

  return (
    <section>
        <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-normal">Your cart is empty!</h3>
            <Link to={"/"} className="mt-4">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png?f=webp"
                    alt="Empty Cart"
                    className="max-w-xs mx-auto cursor-pointer"
                    />
                </Link>
        </div>
    </section>
  )
}

export default EmptyCartMessage;