import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-[white] py-[64px]">
      <div className="max-w-[1080px] mx-auto w-full flex gap-[64px]">
        <div>
          <div className="w-[157px] h-[48px] relative">
            <Image fill src="/logo.png" alt="logo" />
          </div>
          <div className="flex flex-col gap-[8px] mt-[32px]">
            <span>Telefone: 47 9 9999 9999</span>
            <Link href="mailto:fermentandodelivery@gmail.com">
              Email: fermentandodelivery@gmail.com
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-[32px] font-bold font-mono">Redes sociais</h2>
          <div className="flex flex-col gap-[8px] mt-[32px]">
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
