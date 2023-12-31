import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product({ product }) {
  return (
    <div className="rounded-lg mr-3  bg-white dark:bg-slate-900 overflow-hidden border shadow">
      <Link href="#">
        <Image
          src={product.image}
          alt={product.title}
          width={556}
          height={556}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="px-4">
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-center dark:text-slate-200 text-slate-800 my-2 font-semibold">
            {product.title}
          </h2>
        </Link>
        <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
          <p>$ {product.price}</p>
          <button className="flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white">
            <BaggageClaim />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
