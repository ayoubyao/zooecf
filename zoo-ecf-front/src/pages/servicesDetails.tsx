import type { NextPage } from "next";

import React, { use, useEffect, useState } from "react";
import HeaderComponent from "./components/headerComponent";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { ServiceService } from "@/services/serviceService";

export interface IServicesDetailsProps {}

const ServicesDetails: NextPage<IServicesDetailsProps> = (props) => {
  const router = useRouter();
  const [descriptionGeneral, setDescriptionGeneral] = useState("");
  const [descriptionService, setDescriptionService] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const { title } = router.query;
  const { idservice } = router.query;

  useEffect(() => {
    if(idservice) {
      ServiceService.getService(+idservice).then((service) => {
        if(service)
        {
          setPicture(service.image_data)
          setDescriptionGeneral(service.description_general)
          setDescriptionService(service.description_service)
        }
        
      })
    }
    
  }, []);

  
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
        <img
              className="h-auto max-w-full"
              src={"services/" + picture}
              alt=""
            />
        <br />
        <p className="mb-3 text-black-500 dark:text-black-400">
          {descriptionGeneral}
        </p>
        <br />
        <p className="mb-3 text-black-500 dark:text-black-400">
          {descriptionService}
        </p>
        <p className="mb-3 text-black-500 dark:text-black-400">
          {description}
        </p>
      </div>
    </React.Fragment>
  );
};

export default ServicesDetails;
