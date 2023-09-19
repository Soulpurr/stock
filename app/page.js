import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <Navbar />
      <PageHeader />
      <Cards/>
    </>
  );
}
