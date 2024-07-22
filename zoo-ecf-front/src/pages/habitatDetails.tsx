import { NextPage } from "next";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderComponent from "./components/headerComponent";

import FooterComponent from "./components/FooterComponent";
import React from "react";
import { HabitatService } from "@/services/habitatService";
import { Animal } from "@/models/animal";
import { AnimalService } from "@/services/animalService";
import Link from "next/link";

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
              <Link
              key={animal.animal_id}
              href={"/animalDetails?animal_id=" + animal.animal_id}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {animal.prenom}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                En savoir plus
              </p>
              <br />
              <img src={"animaux/"+animal.image_data} alt="" />
            </Link>
            ))}
          </div>
        </div>{" "}
        <FooterComponent />
      </React.Fragment>
    </>
  );
};

export default HabitatDetails;
