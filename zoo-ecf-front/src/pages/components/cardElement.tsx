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
    <React.Fragment>
      <Link
        href={props.lien}
        className="block max-w-sm p-6 bg-white border border-green-200 rounded-lg shadow hover:bg-green-100 dark:bg-green-800 dark:border-green-700 dark:hover:bg-green-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-white">
          {props.title}
        </h5>
        <p className="font-normal text-green-700 dark:text-green-400">
          En savoir plus
        </p>
        <br />
        <img src={props.sourceImage} alt="" />
      </Link>
    </React.Fragment>
  );
};

export default CardElement;
