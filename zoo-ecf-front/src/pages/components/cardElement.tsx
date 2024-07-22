import type { NextPage } from "next";
import Link from "next/link";

import React from "react";

export interface ICardAnimalProps {
  title: string;
  sourceImage: string;
  lien: string;
}

const CardElement: NextPage<ICardAnimalProps> = (props) => {
  return (
    <Link
      href={props.lien}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        En savoir plus
      </p>
      <br />
      <img src={props.sourceImage} alt="" />
    </Link>
  );
};

export default CardElement;
