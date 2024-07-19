import type { NextPage } from "next";

import React, { use, useEffect, useState } from "react";
import HeaderComponent from "./components/headerComponent";
import Link from "next/link";
import router from "next/router";

export interface IServicesDetailsProps {}

const ServicesDetails: NextPage<IServicesDetailsProps> = (props) => {
  const [descriptionGeneral, setDescriptionGeneral] = useState("");
  const [descriptionService, setDescriptionService] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const { title } = router.query;
  const { idservice } = router.query;

  useEffect(() => {
    switch (idservice) {
      case "1":
        setDescriptionGeneral(
          "Embarquez pour une aventure unique avec notre passionnant voyage à travers le zoo en train."
        );
        setDescriptionService(
          "Notre guide expert partagera des informations fascinantes sur chaque espèce, vous offrant une expérience éducative et divertissante."
        );
        setDescription(
          "Profitez du confort du train tout en explorant les divers habitats et en observant de près nos incroyables animaux.Notre guide expert partagera des informations fascinantes sur chaque espèce, vous offrant une expérience éducative et divertissante. Détendez-vous et laissez-vous emporter par cette visite inoubliable du zoo, une manière pittoresque et enrichissante de découvrir la diversité de la vie animale, tout cela à bord de notre train exclusif."
        );
        setPicture("e0ce66feff4b.jpg");
        break;
      //visite habitat
      case "2":
        setDescriptionGeneral(
          "Cette zone africaine reconstituée est l'endroit idéal pour observer les majestés de la faune sauvage, des éléphants majestueux aux lions rugissants, à travers un paysage où se mêlent graminées et arbres épais."
        );
        setDescriptionService(
          "Les sentiers circulaires offrent une vue panoramique sur l'ensemble de l'habitat, un sanctuaire pour les espèces menacées sert d'exemple de conservation en plein air, incarnant l'engagement du Zoo à préserver et protéger le patrimoine naturel."
        );
        setDescription("");
        setPicture("4fd8d9ddbbfb.jpg");
        break;

      //Restauration
      case "3":
        setDescriptionGeneral("Restauration");
        setDescriptionService(
          "Profitez d'un délicieux repas devant l'enclos de nos éléphants qui s'étend sur une vaste plaine. Vous proposons une cuisine savoureuse et variée, issue des producteurs locaux."
        );
        setDescription("");
        setPicture("b802d4ed329f.jpg");
        break;
      default:
        break;
    }
  });

  return (
    <React.Fragment>
      <HeaderComponent />
      <div
        style={{
          marginTop: "2%",
        }}
      >
        <br />
        <br />
        <br />
        <Link
          href="service"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Services
        </Link>
        /
        <p className="text-4xl font-black text-gray-900 dark:text-white">
          {title}
        </p>
        <br />
        <br />
        <p className="text-4xl font-black text-gray-900 dark:text-white">
          {descriptionGeneral}
        </p>
        <br />
        <p className="mb-3 text-black-500 dark:text-black-400">
          {descriptionService}
        </p>
        <p className="mb-3 text-black-500 dark:text-black-400">{description}</p>
      </div>
    </React.Fragment>
  );
};

export default ServicesDetails;
