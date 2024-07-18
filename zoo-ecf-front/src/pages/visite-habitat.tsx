import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import HeaderComponent from "./components/headerComponent";
import FooterComponent from "./components/FooterComponent";

interface Props {}

const Restauration: NextPage<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <HeaderComponent />

      <FooterComponent />
    </div>
  );
};

export default Restauration;
