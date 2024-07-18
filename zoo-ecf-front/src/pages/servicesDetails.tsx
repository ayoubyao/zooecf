import type { NextPage } from "next";

import React from "react";
import HeaderComponent from "./components/headerComponent";
import Link from "next/link";
import router from "next/router";

export interface IServicesDetailsProps {}

const ServicesDetails: NextPage<IServicesDetailsProps> = (props) => {
  const { title } = router.query;
  return (
    <React.Fragment>
      <HeaderComponent />
      <div>
        <br />
        <br />
        <br />
        <Link
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Services
        </Link>
        /
        <Link
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          title
        </Link>
        <br />
        <br />
        <p className="text-4xl font-black text-gray-900 dark:text-white">
          Visite du zoo en train
        </p>
        <br />
        <p className="mb-3 text-black-500 dark:text-black-400">
          Embarquez pour une aventure unique avec notre passionnant voyage à
          travers le zoo en train.
        </p>
        <p className="mb-3 text-black-500 dark:text-black-400">
          Profitez du confort du train tout en explorant les divers habitats et
          en observant de près nos incroyables animaux.
        </p>
        <p className="mb-3 text-black-500 dark:text-black-400">
          Notre guide expert partagera des informations fascinantes sur chaque
          espèce, vous offrant une expérience éducative et divertissante.
        </p>
        <p className="mb-3 text-black-500 dark:text-black-400">
          Détendez-vous et laissez-vous emporter par cette visite inoubliable du
          zoo, une manière pittoresque et enrichissante de découvrir la
          diversité de la vie animale, tout cela à bord de notre train exclusif.
        </p>
      </div>
    </React.Fragment>
  );
};

export default ServicesDetails;
