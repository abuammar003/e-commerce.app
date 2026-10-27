import React from "react";

const LazyLoader = ({ message = "Loading Products", subMessage = "Finding the best deals for you..." }) => {

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-5 py-12">
      {/* Animated Spinner */}
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />
        <div className="h-8 w-8 animate-pulse rounded-full bg-green-600/20" />
      </div>

      {/* Loading Message */}
      <div className="text-center">
        <h2 className="text-xl font-bold tracking-wide text-gray-800 sm:text-2xl">
          {message}
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          {subMessage}
        </p>
      </div>

      {/* Animated Dots */}
      <div className="flex gap-1.5">
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-600" />
      </div>
    </div>
  );
};

export default LazyLoader;
