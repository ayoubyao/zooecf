import { NextPage } from "next";
import HeaderComponent from "./headerComponent";
import Home1Component from "./BodyComponent";
import FooterComponent from "./FooterComponent";
import BodyComponent from "./BodyComponent";
import { useEffect } from "react";
import { SecurityService } from "@/services/security";

interface Props {}

const HomeComponent: NextPage<Props> = ({}) => {
  useEffect(() => {
    SecurityService.login();
  }, []);
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
