import Image from "next/image";
import Link from "next/link";
import { menuOnline, whatsappLink } from "../constants/links";

const PizzaCard = ({
  title,
  bg,
  text,
  price,
  igredients,
  src,
}: {
  title: string;
  bg: string;
  text: string;
  price: string;
  igredients: string[];
  src: string;
}) => {
  return (
    <div
      className={`text-[${text}] rounded h-min mt-auto w-full sm:w-min mx-auto`}
      style={{ background: bg }}
    >
      <div>
        <div className="w-full min-w-[240px] h-[217px] relative rounded">
          <Image
            alt="imagem da pizza"
            src={src}
            fill
            style={{ objectFit: "cover" }}
            className="rounded"
          />
          <div className="absolute bg-[#FEA24F] font-sans font-bold text-text p-[8px] bottom-[-16px] right-[-6px]">
            R$ {price}
          </div>
        </div>
      </div>
      <div className="p-[16px] xl:p-[32px]">
        <span className="text-[32px] font-mono">{title}</span>
        <p className="text-[16px]">
          Massa feita artesanal, feita com: farinha 0.0, fermento natural e
          fermentação longa!
        </p>
        <p className="text-[16px] font-bold mt-[16px]">Recheada com:</p>
        <div className="grid grid-cols-2 grid-rows-3 grid-flow-col">
          {igredients.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Flavours = () => {
  return (
    <div className="max-w-[1080px] mx-auto mt-[64px] flex flex-col-reverse xl:flex-row gap-[65px] w-full px-[32px] relative">
      <div className="xl:hidden">
        <p className="text-[16px] xl:text-[20px] xl:mt-[16px]">
          Experimente as pizzas artesanais escolhidas pra você, feitas com
          fermentação natural e ingredientes frescos de qualidade. Saboreie um
          sabor único e complexo, enquanto desfruta de uma digestão leve e
          fácil. Venha experimentar essa delícia!
        </p>
        <div className="mt-[32px] flex flex-col items-center gap-[32px] w-full">
          <button className="w-[80%]">
            <Link
              className="bg-text text-[white] p-[16px] flex gap-[16px] rounded justify-center"
              href={menuOnline}
              target="_blank"
            >
              Cardápio Online
            </Link>
          </button>
          <button className="w-[80%]">
            <Link
              className="bg-[transparent] text-text p-[16px] flex gap-[16px] rounded justify-center border-text border-solid border-[1px]"
              href={whatsappLink}
              target="_blank"
            >
              Nos chame pelo Whatsapp
            </Link>
          </button>
        </div>
      </div>
      <div className="w-full xl:w-[50%] flex gap-[32px] flex-col xl:flex-row justify-center">
        <div className="mr-[60px] sm:mr-0 mb-[-60px] xl:mb-0">
          <PizzaCard
            src="/calabresa-02.jpeg"
            title="Calabresa"
            text="white"
            bg="#51734E"
            price="59,95"
            igredients={["Calabresa", "Mussarela"]}
          />
          <div className="w-[143px] h-[112px] relative mt-[32px] ml-auto rotate-180 hidden xl:inline-block">
            <Image
              src="/detalhe-bolinhas.png"
              alt="bolinhas"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="ml-[60px] md:ml-[128px] xl:ml-0 flex">
          <PizzaCard
            src="/carnaxide.jpg"
            title="Monsaraz"
            text="#3A1C36"
            bg="white"
            price="69,95"
            igredients={[
              "Carne moída",
              "Mussarela",
              "Cheddar",
              "Catupiry",
              "Pimentões",
              "Pimenta biquinho",
            ]}
          />
        </div>
      </div>
      <div className="w-full xl:w-[50%]">
        <div className="text-text">
          <h2 className="text-[32px] xl:text-[52px] font-bold font-mono text-center xl:text-left">
            Escolhas da casa
          </h2>
          <div className="hidden xl:inline">
            <p className="text-[20px] mt-[16px]">
              Experimente as pizzas artesanais escolhidas pra você, feitas com
              fermentação natural e ingredientes frescos de qualidade. Saboreie
              um sabor único e complexo, enquanto desfruta de uma digestão leve
              e fácil. Venha experimentar essa delícia!
            </p>
            <div className="mt-[32px] flex gap-[32px]">
              <button className="w-[50%]">
                <Link
                  className="bg-text text-[white] p-[16px] flex gap-[16px] rounded justify-center"
                  href={menuOnline}
                  target="_blank"
                >
                  Cardápio Online
                </Link>
              </button>
              <button className="w-[50%]">
                <Link
                  className="bg-[transparent] text-text p-[16px] flex gap-[16px] rounded justify-center border-text border-solid border-[1px]"
                  href={whatsappLink}
                  target="_blank"
                >
                  Nos chame pelo Whatsapp
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[115px] h-[156px] absolute top-0 right-[-70px]">
        <Image src="/wheat.png" fill alt="trigo" />
      </div>
    </div>
  );
};
