import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "../constants/links";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[white] py-[64px] px-[32px] xl:px-0"
    >
      <div className="max-w-[1080px] mx-auto w-full flex gap-[64px] flex-col xl:flex-row">
        <div>
          <div className="w-[157px] h-[48px] relative">
            <Image fill src="/logo.png" alt="logo" />
          </div>
          <div className="flex flex-col gap-[8px] mt-[32px] text-text underline">
            <Link href={whatsappLink}>Telefone: 47 3308-2462</Link>
            <Link href="mailto:fermentandodelivery@gmail.com">
              Email: fermentandodelivery@gmail.com
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-[26px] xl:text-[32px] font-bold font-mono">
            Redes sociais
          </h2>
          <div className="flex flex-col gap-[8px] mt-[32px] text-text underline">
            <Link
              href="https://www.instagram.com/fermentandodelivery/"
              target="_blank"
            >
              Instagram
            </Link>
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
