import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderComponent from "./components/headerComponent";
import CardElement from "./components/cardElement";
import FooterComponent from "./components/FooterComponent";
import Link from "next/link";
import { ServiceService } from "@/services/serviceService";
import { Service } from "@/models/service";
import { title } from "process";

interface Props {}

const Restauration: NextPage<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [services, setServices] = useState([] as Service[]);

  useEffect(() => {
    ServiceService.getServices().then((res) => {
      setServices(res as Service[]);
    });
  }, []);
  
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
          {services.map((services) => (
            <CardElement
              key={services.service_id}
              title={services.nom}
              sourceImage={"services/" + services.imagePrincipal}
              lien={"/servicesDetails?title=" + services.nom + "&idservice=" + services.service_id}
            />
          ))}
            
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Restauration;
