import Image from "next/image";

export const About = () => {
  return (
    <div id="about" className="bg-secondary w-full xl:py-[64px] pb-[64px]">
      <div className="xl:max-w-[1080px] mx-auto w-full flex gap-[32px] flex-col-reverse xl:flex-row">
        <div className="xl:w-[50%] px-[32px] xl:px-0">
          <div className="text-[white]">
            <h2 className="text-[32px] xl:text-[52px] font-bold font-mono">
              Sobre nós
            </h2>
            <p className="text-[16px] xl:text-[20px] mt-[16px]">
              Bem-vindo à Fermentando Pizza Delivery, onde cada pizza é uma
              obra-prima cuidadosamente preparada pelo pizzaiolo Cleomir (Toco),
              com mais de 20 anos de experiência. Localizada em Indaial/SC,
              nossa paixão pela pizza se reflete na nossa massa de fermentação
              natural, resultando em sabores e texturas incomparáveis. <br />
              <br /> Com uma variedade de opções, desde as clássicas margheritas
              até combinações mais ousadas, convidamos você a se juntar a nós e
              descobrir o verdadeiro sabor da pizza feita com paixão e
              dedicação, com entrega rápida e garantia de pizza quentinha.
            </p>
          </div>
        </div>
        <div className="w-full xl:w-auto xl:min-w-[440px] h-[440px] xl:bg-main rounded relative">
          <div className="w-full h-full rounded overflow-hidden xl:absolute xl:top-[-20px] xl:right-[-20px]">
            <Image
              src="/health.jpg"
              alt="pizza"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
