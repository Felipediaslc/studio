"use client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  oldPrice?: string;
  price: string;
  reviews: number;
  inStock: boolean;
  hotSale?: boolean;
};

export default function Page({
  image,
  title,
  subtitle,
  description,
  tags,
  oldPrice,
  price,
  reviews,
  inStock,
  hotSale,
}: ProductCardProps) {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-xl bg-white rounded-2xl  overflow-hidden ">
      {/* Imagem */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={288}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
        />
        

        {hotSale && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] sm:text-xs md:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full ">
            HOT SALE
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-4 sm:p-5 lg:p-6 space-y-3">
        <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest text-gray-500">
          {subtitle}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Preço */}
        <div>
          {oldPrice && (
            <p className="text-xs sm:text-sm text-gray-400 line-through">
              {oldPrice}
            </p>
          )}
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            {price}
          </p>
        </div>

        {/* Botão */}
        <button className="flex items-center justify-center gap-2 w-full bg-black text-white text-xs sm:text-sm md:text-base font-semibold py-2 md:py-3 rounded-xl shadow hover:bg-gray-800 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        {/* Reviews */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-yellow-400">
            {"★★★★★".split("").map((star, index) => (
              <span key={index}>★</span>
            ))}
            <span className="ml-1 sm:ml-2 text-[10px] sm:text-sm text-gray-600">
              {reviews} Reviews
            </span>
          </div>
          <span
            className={`${
              inStock ? "text-green-600" : "text-red-500"
            } text-[10px] sm:text-sm font-semibold`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
}