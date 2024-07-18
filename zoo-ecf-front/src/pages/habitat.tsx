import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import HeaderComponent from "./components/headerComponent";
import FooterComponent from "./components/FooterComponent";

interface Props {}

const Restauration: NextPage<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
          <p className="text-4xl font-black text-gray-900 dark:text-white">
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
          <Link
            href="/habitatDetails?title=Savane&idHabitat=2"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Savane
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {" "}
              Découvrir cette habitat
            </p>
            <br />
            <img src="habitats/4fd8d9ddbbfb.jpg" alt="" />
          </Link>

          <Link
            href="/habitatDetails?title=Marais&idHabitat=3"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Marias
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {" "}
              Découvrir cette habitat{" "}
            </p>
            <br />
            <img src="habitats/b802d4ed329f.jpg" alt="" />
          </Link>

          <Link
            href="/habitatDetails?title=Jungle&idHabitat=1"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Jungle
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {" "}
              Découvrir cette habitat
            </p>
            <br />
            <img src="habitats/e0ce66feff4b.jpg" alt="" />
          </Link>
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
