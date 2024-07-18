import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderComponent from "./components/headerComponent";
import CardAnimal from "./components/cardElement";
import FooterComponent from "./components/FooterComponent";
import CardElement from "./components/cardElement";

interface IHabitatDetails {}

const HabitatDetails: NextPage<IHabitatDetails> = (props) => {
  const router = useRouter();
  const [descriptionGeneral, setDescriptionGeneral] = useState("");
  const [descriptionAnimaux, setDescriptionAnimaux] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const { title } = router.query;
  const { idHabitat } = router.query;

  useEffect(() => {
    switch (idHabitat) {
      //Jungle
      case "1":
        setDescriptionGeneral(
          "En explorant notre jungle, vous pénétrerez dans un royaume aussi luxuriant que mystérieux, plongeant profondément au cœur de la nature sauvage."
        );
        setDescriptionAnimaux(
          "Découvrez nos majestueux tigres, panthères et autres animaux évoluant dans cet écosystème exotique. Chaque pas vous rapprochera de la splendeur captivante de cette jungle, où la vie sauvage prospère dans toute sa diversité."
        );
        setDescription(
          "Bienvenue dans une expérience immersive, où la beauté et la majesté de la nature prennent vie sous vos yeux émerveillés."
        );
        setPicture("e0ce66feff4b.jpg");
        break;

      //Savane
      case "2":
        setDescriptionGeneral(
          "Cette zone africaine reconstituée est l'endroit idéal pour observer les majestés de la faune sauvage, des éléphants majestueux aux lions rugissants, à travers un paysage où se mêlent graminées et arbres épais."
        );
        setDescriptionAnimaux(
          "Les sentiers circulaires offrent une vue panoramique sur l'ensemble de l'habitat, un sanctuaire pour les espèces menacées sert d'exemple de conservation en plein air, incarnant l'engagement du Zoo à préserver et protéger le patrimoine naturel."
        );
        setDescription("");
        setPicture("4fd8d9ddbbfb.jpg");
        break;

      //Marais
      case "3":
        setDescriptionGeneral(
          "L'habitat Marais est une énigme végétale et animale qui offre à ses visiteurs un véritable voyage dans les profondeurs des récifs d'eau."
        );
        setDescriptionAnimaux(
          "Ce lieu emblématique du zoo se distingue par sa composition complexe de zones humides et marécageuses, où la vie aquatique s'épanouit sous l'ombre protectrice de grands cyprès et de plantes palustres."
        );
        setDescription("");
        setPicture("b802d4ed329f.jpg");
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      <div>
        <HeaderComponent />
        <br />
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="text-4xl font-black text-gray-900 dark:text-white">
            {title}
          </p>
          <br />
          <br />
          <img
            className="h-auto max-w-full"
            src={"habitats/" + picture}
            alt=""
          />
          <br />
          <p className="mb-3 text-black-500 dark:text-black-400">
            {descriptionGeneral}
          </p>
          <p className="mb-3 text-black-500 dark:text-black-400">
            {descriptionAnimaux}
          </p>
          <p className="mb-3 text-black-500 dark:text-black-400">
            {description}
          </p>
          <br />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <CardElement
            title={"Panda roux | Rox"}
            sourceImage={"animaux/animal1.png"}
            lien={""}
          />
          <CardElement
            title={'PANDOUDOU "Panda"'}
            sourceImage={"animaux/panda.png"}
            lien={""}
          />
          <CardElement
            title={"MATOU 'Panthère noir'"}
            sourceImage={"animaux/penthere.png"}
            lien={""}
          />
          <CardElement
            title={"Gorille 'Kong'"}
            sourceImage={"animaux/gorille.png"}
            lien={""}
          />
        </div>
      </div>{" "}
      <FooterComponent />
    </>
  );
};

export default HabitatDetails;
