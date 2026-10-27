
import React, { useState } from "react";
import { FiX, FiPhone, FiTruck, FiCreditCard, FiCheckCircle } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const CheckoutPopup = ({ isOpen, onClose, totalAmount }) => {
  const { cartItems, checkOut } = useCart();

  const [mobile, setMobile] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  // Demo estimate: 2–4 days from today
  const getDeliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 3);

    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Demo checkout only. No payment is processed.
    setOrderPlaced(true);
  };

  const handleContinue = () => {
    checkOut();
    setOrderPlaced(false);
    setMobile("");
    setPaymentMethod("cod");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-5 py-4 sm:px-6">
          <div>
            <h2 id="checkout-title" className="text-xl font-bold text-gray-900">
              {orderPlaced ? "Order Confirmation" : "Checkout"}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {orderPlaced
                ? "Your demo order is ready"
                : "Complete your order details"}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close checkout"
            className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {orderPlaced ? (
          <div className="px-5 py-10 text-center sm:px-8">
            <FiCheckCircle className="mx-auto text-6xl text-green-600" />

            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              Thank you!
            </h3>

            <p className="mt-2 text-gray-600">
              Your demo checkout is complete.
            </p>

            <div className="mt-6 rounded-xl bg-green-50 p-4 text-left">
              <p className="text-sm text-gray-600">Delivery estimate</p>
              <p className="mt-1 font-semibold text-green-800">
                {getDeliveryDate()}
              </p>

              <p className="mt-4 text-sm text-gray-600">Mobile number</p>
              <p className="mt-1 font-semibold text-gray-900">{mobile}</p>

              <p className="mt-4 text-sm text-gray-600">Payment method</p>
              <p className="mt-1 font-semibold text-gray-900">
                {paymentMethod === "cod"
                  ? "Cash on Delivery"
                  : paymentMethod === "upi"
                  ? "UPI"
                  : "Card"}
              </p>

              <p className="mt-4 text-sm text-gray-600">Order total</p>
              <p className="mt-1 text-xl font-bold text-gray-900">
                ${Number(totalAmount).toFixed(2)}
              </p>
            </div>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              Demo only: no order has been saved to a server, and no payment
              has been collected.
            </p>

            <button
              type="button"
              onClick={handleContinue}
              className="mt-6 w-full rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-5 sm:p-6">
            {/* Mobile Number */}
            <div>
              <label
                htmlFor="checkout-mobile"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Mobile Number
              </label>

              <div className="flex overflow-hidden rounded-xl border border-gray-200 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
                <span className="flex items-center border-r bg-gray-50 px-3 text-sm font-medium text-gray-600">
                  +91
                </span>

                <FiPhone className="my-auto ml-3 shrink-0 text-gray-400" />

                <input
                  id="checkout-mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="Enter 10-digit mobile number"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  required
                  className="min-w-0 flex-1 px-3 py-3 outline-none"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <p className="mb-3 text-sm font-semibold text-gray-800">
                Select Payment Method
              </p>

              <div className="space-y-3">
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                    paymentMethod === "cod"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-green-600"
                  />
                  <FiTruck className="text-xl text-green-700" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Cash on Delivery
                    </p>
                    <p className="text-xs text-gray-500">
                      Pay when your order arrives
                    </p>
                  </div>
                </label>

                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                    paymentMethod === "upi"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-green-600"
                  />
                  <FiCreditCard className="text-xl text-green-700" />
                  <div>
                    <p className="font-semibold text-gray-900">UPI</p>
                    <p className="text-xs text-gray-500">
                      Online payment (demo option)
                    </p>
                  </div>
                </label>

                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                    paymentMethod === "card"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-green-600"
                  />
                  <FiCreditCard className="text-xl text-green-700" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Credit / Debit Card
                    </p>
                    <p className="text-xs text-gray-500">
                      Online payment (demo option)
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Delivery Estimate */}
            <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
              <FiTruck className="mt-1 shrink-0 text-xl text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">
                  Estimated Delivery
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Expected by {getDeliveryDate()}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Demo estimate only; actual delivery depends on location.
                </p>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between border-t pt-4">
              <span className="font-medium text-gray-600">Order Total</span>
              <span className="text-2xl font-bold text-gray-900">
                ${Number(totalAmount).toFixed(2)}
              </span>
            </div>

            <button
              type="submit"
              disabled={cartItems.length === 0}
              className="w-full rounded-xl bg-green-600 px-5 py-3.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Confirm Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutPopup;
