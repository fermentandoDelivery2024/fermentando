import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const menuItems = [
    { name: "Sobre Nós", link: "" },
    { name: "Contato", link: "" },
  ];
  return (
    <header>
      <div className="max-w-[1080px] m-auto py-[32px] flex justify-between items-center px-[32px] xl:px-0">
        <div className="w-[157px] h-[48px] relative">
          <Image fill src="/logo.png" alt="logo" />
        </div>
        <div className="hidden md:inline">
          <ul className="flex items-center gap-[16px] text-text">
            {menuItems.map((item) => (
              <li key={item.link} className="p-[8px]">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button className="hidden md:inline">
          <Link
            className="bg-text text-[white] p-[16px] px-[32px] rounded"
            href="#"
          >
            Cardápio Online
          </Link>
        </button>
      </div>
    </header>
  );
};
