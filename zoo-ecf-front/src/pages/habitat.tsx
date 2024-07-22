import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import HeaderComponent from "./components/headerComponent";
import FooterComponent from "./components/FooterComponent";
import { Habitat } from "@/models/habitat";
import { HabitatService } from "@/services/habitatService";

interface Props {}

const Restauration: NextPage<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [habitats, setHabitats] = useState([] as Habitat[]);

  useEffect(() => {
    HabitatService.getHabitats().then((res) => {
      setHabitats(res as Habitat[]);
    });
  }, []);

  return (
    <>
      <div
        style={{
          marginLeft: "5%",
        }}
      >
        <HeaderComponent />
        <br />
        <div>
          <br />
          <br />
          <br />
          <br />
          <p className="text-4xl font-black text-green-900 dark:text-white">
            Habitat
          </p>
          <br />
          <br />
          <p className="mb-3 text-black-500 dark:text-black-400">
            Explorez les différents habitats du Zoo Arcadia.
          </p>
          <br />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {habitats.map((habitats) => (
            <Link
              key={habitats.habitat_id} // Add a unique "key" prop
              href={
                "/habitatDetails?title=" +
                habitats.nom +
                "&idhabitat=" +
                habitats.habitat_id
              }
              className="block max-w-sm p-6 bg-white border border-green-200 rounded-lg shadow hover:bg-green-100 dark:bg-green-800 dark:border-green-700 dark:hover:bg-green-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-white">
                {habitats.nom}
              </h5>
              <p className="font-normal text-green-700 dark:text-green-400">
                {" "}
                Découvrir cette habitat
              </p>
              <br />
              <img src={"habitats/" + habitats.image_data} alt="" />{" "}
              {/* Replace <img> with <Image> */}
            </Link>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <FooterComponent />
    </>
  );
};

export default Restauration;
