import Image from "next/image";
import { Inter } from "next/font/google";
import HomeComponent from "./components/HomeComponent";
import { SecurityService } from "@/services/security";
import { use, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeComponent />
    </main>
  );
}
