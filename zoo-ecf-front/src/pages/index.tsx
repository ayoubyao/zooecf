import Image from "next/image";
import { Inter } from "next/font/google";
import HomeComponent from "./components/HomeComponent";
import { SecurityService } from "@/services/security";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  SecurityService.login();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeComponent />
    </main>
  );
}
