import { NextPage } from "next";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderComponent from "./components/headerComponent";

import FooterComponent from "./components/FooterComponent";
import CardElement from "./components/cardElement";
import React from "react";
import { HabitatService } from "@/services/habitatService";
import { Animal } from "@/models/animal";
import { AnimalService } from "@/services/animalService";

interface IHabitatDetails { }

const HabitatDetails: NextPage<IHabitatDetails> = (props) => {
  const router = useRouter();
  const [descriptionGeneral, setDescriptionGeneral] = useState("");
  const [descriptionAnimaux, setDescriptionAnimaux] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [animaux, setAnimaux] = useState([] as Animal[]);

  const { title } = router.query;
  const { idhabitat } = router.query;

  useEffect(() => {
    if (idhabitat) {
      HabitatService.getHabitat(+idhabitat).then((habitat) => {
        if (habitat) {
          setPicture(habitat.image_data)
          setDescriptionGeneral(habitat.description_general)
          setDescriptionAnimaux(habitat.description_animaux)
        }

      })

      AnimalService.getAnimalByHabitat(+idhabitat).then((animaux) => {
        setAnimaux(animaux)
      })

    }


  }, []);

  return (
    <>
      <React.Fragment>
        <HeaderComponent />
        <div>
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
            <br />
            <br />
            <br />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {animaux.map((animal) => (
              <CardElement
                key={animal.animal_id}
                title={animal.prenom}
                sourceImage={"animaux/"+animal.image_data}
                lien={"/animalDetails?animal_id=" + animal.animal_id}
              />
            ))}
          </div>
        </div>{" "}
        <FooterComponent />
      </React.Fragment>
    </>
  );
};

export default HabitatDetails;
