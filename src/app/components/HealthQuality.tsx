import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HealthQuality = () => {
  return (
    <div className="flex justify-between items-center gap-[64px] py-[60px] xl:py-[120px] xl:max-w-[1080px] flex-col xl:flex-row">
      <div className="w-full xl:min-w-[510px] xl:h-[440px] h-[360px] bg-[#9e9e9e] rounded relative overflow-hidden">
        <Image
          src="/health.jpeg"
          alt="pizza"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="text-text px-[32px] xl:px-0">
        <h2 className="text-[32px] xl:text-[50px] font-bold font-mono">
          A melhor qualidade também para sua saúde!
        </h2>
        <p className="text-[16px] xl:text-[18px] mt-[16px]">
          Pizzas de fermentação natural são consideradas saudáveis porque elas
          são feitas com massa de fermentação natural, que é preparada com
          fermento natural .O processo de fermentação natural ajuda a
          desenvolver sabores mais complexos e ricos na massa, além de ser rica
          em probióticos, que ajudam a equilibrar a flora intestinal. Além
          disso, nossas pizzas são feitas com ingredientes frescos e orgânicos,
          o que as torna mais saudáveis do que as pizzas convencionais.
        </p>
        <div className="mt-[32px] flex gap-[32px] flex-col xl:flex-row items-center">
          <button className="w-[80%] xl:w-[50%]">
            <Link
              className="bg-text text-[white] p-[16px] flex gap-[16px] rounded justify-center"
              href="#"
            >
              Cardápio Online
            </Link>
          </button>
          <button className="w-[80%] xl:w-[50%]">
            <Link
              className="bg-[transparent] text-text p-[16px] flex gap-[16px] rounded justify-center border-text border-solid border-[1px]"
              href="#"
            >
              Nos chame pelo Whatsapp
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
