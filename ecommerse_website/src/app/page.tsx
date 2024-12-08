import Image from "next/image";
import ProductSection from "./components/productSection";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default async function Home() {

  const res = await fetch("https://fakestoreapi.com/products")
  const data = await res.json();

  return (
    <div className="">
      <ProductSection
        heading="New Arrivals"
        subheading="Toda'y"
        showTimer
        isCarousel
        ctaText="See More"
        products={data}
        action={
        <div className="flex gap-2">
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <ChevronLeftIcon/>
          </Button>
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <ChevronRightIcon/>
          </Button>

        </div>
        }
      />
    </div >

  );
}
