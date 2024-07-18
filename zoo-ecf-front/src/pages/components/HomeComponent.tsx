import { NextPage } from "next";
import HeaderComponent from "./headerComponent";
import Home1Component from "./BodyComponent";
import FooterComponent from "./FooterComponent";
import BodyComponent from "./BodyComponent";

interface Props {}

const HomeComponent: NextPage<Props> = ({}) => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
