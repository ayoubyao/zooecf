import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import HeaderComponent from "./components/headerComponent";
import CardElement from "./components/cardElement";
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
          marginTop: "5%",
        }}
      >
        <HeaderComponent />
        <br />
        <div>
          <br />
          <p className="mb-3 text-black-500 dark:text-black-400">
            Explorez les divers services offerts au sein du Zoo Arcadia.
          </p>

          <p className="text-4xl font-black text-gray-900 dark:text-white">
            Tous nos services
          </p>
          <br />
          <div className="grid grid-cols-3 gap-1">
            <CardElement
              title={"Visite du zoo en train"}
              sourceImage={""}
              lien={"/servicesDetails?title=Visite du zoo en train&idservice=1"}
            />
            <CardElement
              title={"Visite des habitats avec un guide"}
              sourceImage={""}
              lien={
                "/servicesDetails?title=Visite des habitats avec un guide&idservice=2"
              }
            />
            <CardElement
              title={"Restauration"}
              sourceImage={""}
              lien={"/servicesDetails?title=Restauration&idservice=3"}
            />
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Restauration;
