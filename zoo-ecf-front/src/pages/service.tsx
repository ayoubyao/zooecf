import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderComponent from "./components/headerComponent";
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

          <p className="text-4xl font-black text-green-900 dark:text-white">
            Tous nos services
          </p>
          <br />
          <div className="grid grid-cols-3 gap-1">
          {services.map((services) => (
            <Link
            key={services.service_id}
            href={"/servicesDetails?title=" + services.nom + "&idservice=" + services.service_id}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {services.nom}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              En savoir plus
            </p>
            <br />
            <img src={"services/" + services.imagePrincipal} alt="" />
          </Link>
          ))}
            
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Restauration;
