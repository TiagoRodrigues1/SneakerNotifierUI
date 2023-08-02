"use client";
import Sneaker from "@models/sneaker";
import Link from "next/link";
import {
  EndLogo,
  NikeSneakersLogo,
  SNSLogo,
  SVDLogo,
} from "@public/assets/icons";

function ProductCard({ sneaker }: { sneaker: Sneaker }) {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
      <img src={sneaker.images} className="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{sneaker.brand}</div>
        <p className="text-gray-500 text-base mb-2">{sneaker.model}</p>
        <p className="text-base font-bold">
          {sneaker.price.toLocaleString()} {sneaker.currency}
        </p>
        <p className ="text-base">
          {sneaker.dropDate.toLocaleString('pt-PT')}
        </p>
      </div>
      <div className="ml-1 grid grid-cols-4 px-6 py-4">
        <Link href={sneaker.links.end}>
          <EndLogo />
        </Link>
        <Link href={sneaker.links.svd}>
          <SVDLogo className="mt-4" />
        </Link>
        <Link href={sneaker.links.nike}>
          <NikeSneakersLogo />
        </Link>
        <Link href={sneaker.links.sns}>
          <SNSLogo className="mt-2" />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
