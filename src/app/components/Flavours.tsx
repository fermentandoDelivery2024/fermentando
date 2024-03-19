import Image from "next/image";
import Link from "next/link";

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
    <div className={`bg-[${bg}] text-[${text}] rounded h-min mt-auto`}>
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
      <div className="p-[32px]">
        <span className="text-[32px] font-mono">{title}</span>
        <p className="text-[16px]">
          Massa feita de: Trigo, água, açúcar, sal, óleo e só!
        </p>
        <p className="text-[16px] font-bold mt-[16px]">Recheada com:</p>
        <div className="grid grid-cols-2 grid-rows-2 grid-flow-col">
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
    <div className="max-w-[1080px] mx-auto mt-[64px] flex gap-[65px] w-full">
      <div className="w-[50%] flex gap-[32px]">
        <div>
          <PizzaCard
            src="/calabresa.jpeg"
            title="Calabresa"
            text="white"
            bg="#51734E"
            price="59,99"
            igredients={["Calabresa", "Queijo"]}
          />
          <div className="w-[143px] h-[112px] relative mt-[32px] ml-auto rotate-180">
            <Image
              src="/detalhe-bolinhas.png"
              alt="bolinhas"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <PizzaCard
          src="/onlineMenu.jpg"
          title="Carnaxide"
          text="#3A1C36"
          bg="white"
          price="59,99"
          igredients={["Carne", "Queijo"]}
        />
      </div>
      <div className="w-[50%]">
        <div className="text-text">
          <h2 className="text-[52px] font-bold font-mono">Escolhas da casa</h2>
          <p className="text-[20px] mt-[16px]">
            Experimente as pizzas artesanais escolhidas pra você, feitas com
            fermentação natural e ingredientes frescos de qualidade. Saboreie um
            sabor único e complexo, enquanto desfruta de uma digestão leve e
            fácil. Venha experimentar essa delícia!
          </p>
          <div className="mt-[32px] flex gap-[32px]">
            <button className="w-[50%]">
              <Link
                className="bg-text text-[white] p-[16px] flex gap-[16px] rounded justify-center"
                href="#"
              >
                Cardápio Online
              </Link>
            </button>
            <button className="w-[50%]">
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
    </div>
  );
};
