import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menuOnline } from "../constants/links";

export const Hero = () => {
  return (
    <div id="start" className="flex justify-between items-center gap-[64px] xl:max-w-[1080px] py-[32px] relative flex-col-reverse xl:flex-row">
      <div className="text-text px-[32px] xl:px-0">
        <h1 className="text-[32px] xl:text-[52px] font-bold font-mono">
          Pizza com fermentação natural no aconchego da sua casa!
        </h1>
        <p className="text-[16px] xl:text-[20px] mt-[16px]">
          Experimente nossas pizzas de fermentação natural feitas com
          ingredientes frescos e de qualidade para um sabor único e complexo,
          além de serem leves e fáceis de digerir devido a fermentação natural.
        </p>
        <div className="mt-[32px] flex justify-center xl:inline-block">
          <button>
            <Link
              className="bg-text text-[white] p-[16px] flex gap-[16px] rounded"
              href={menuOnline}
              target="_blank"
            >
              <div>Peça Agora</div>
              <div className="font-bold">R$ 59,90</div>
            </Link>
          </button>
        </div>
        <div className="w-full justify-end items-center gap-[16px] hidden xl:flex">
          <div className="text-[white] bg-secondary px-[16px] rounded-lg py-[2px]">
            Calabresa
          </div>
          <div className="flex gap-[8px]">
            <div className="w-[12px] h-[12px] rounded-full bg-[white]" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#C8220B]" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#008037]" />
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center gap-[16px] flex xl:hidden mt-[-42px]">
        <div className="text-[white] bg-secondary px-[16px] rounded-lg py-[2px]">
          Calabresa
        </div>
        <div className="flex gap-[8px]">
          <div className="w-[12px] h-[12px] rounded-full bg-[white]" />
          <div className="w-[12px] h-[12px] rounded-full bg-[#C8220B]" />
          <div className="w-[12px] h-[12px] rounded-full bg-[#008037]" />
        </div>
      </div>
      <div className="xl:min-w-[510px] w-full h-[360px] xl:h-[500px] bg-[#9e9e9e] rounded relative overflow-hidden">
        <Image
          src="/calabresa.jpeg"
          alt="pizza de calabresa"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute bottom-3 left-[-143px] w-[143px] h-[143px] hidden xl:inline">
        <div className="w-[143px] h-[143px] relative">
          <Image src="/detalhe-bolinhas.png" alt="bolinhas" fill />
        </div>
      </div>
      <div className="absolute top-[-80px] left-[-180px] w-[200px] h-[200px]  hidden xl:inline">
        <div className="w-[200px] h-[200px] relative">
          <Image
            src="/detalhe-trigo.png"
            alt="bolinhas"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};
