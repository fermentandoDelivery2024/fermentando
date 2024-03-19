import Image from "next/image";

export const About = () => {
  return (
    <div className="bg-secondary w-full py-[64px]">
      <div className="max-w-[1080px] mx-auto w-full flex gap-[32px]">
        <div className="w-[50%]">
          <div className="text-[white]">
            <h2 className="text-[52px] font-bold font-mono">Sobre nós</h2>
            <p className="text-[20px] mt-[16px]">
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
        <div className="min-w-[440px] h-[440px] bg-main rounded relative">
          <div className="w-full h-full rounded overflow-hidden absolute top-[-20px] right-[-20px]">
            <Image
              src="/health.jpeg"
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
