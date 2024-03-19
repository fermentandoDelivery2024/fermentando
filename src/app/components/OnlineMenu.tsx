import Image from "next/image";

export const OnlineMenu = () => {
  return (
    <div className="w-full">
      <div className="w-full xl:w-[50%] bg-secondary text-[white] p-[48px]">
        <div className="flex gap-[28px] items-center justify-center xl:justify-end">
          <div className="w-[55px] h-[55px] relative">
            <Image src="/icons/chef.png" alt="chef icon" fill />
          </div>
          <div>
            <h3 className="text-[24px] text-left font-bold">Cardápio Online</h3>
            <p className="text-[16px]">
              Clique e peça sua pizza com fermentação natural
            </p>
          </div>
          <div className="w-[30px] h-[30px] relative">
            <Image src="/icons/arrowRight.png" alt="chef icon" fill />
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[50%] bg-[white] text-text p-[48px] flex justify-center xl:justify-end">
        <div className="flex gap-[28px] items-center justify-center xl:justify-end xl:min-w-[500px] xl:max-w-[500px]">
          <div className="w-full">
            <span className="text-[16px] text-left">Os prazeres de uma</span>
            <p className="text-[26px] font-mono mt-[18px]">
              Pizza artesanal com fermentação natural
            </p>
            <div className="mt-[32px] flex flex-col gap-[32px] items-start">
              <div className="flex gap-[28px] items-center justify-end">
                <div className="w-[55px] h-[55px] relative">
                  <Image src="/icons/oven.png" alt="chef icon" fill />
                </div>
                <div>
                  <h3 className="text-[24px] text-left font-bold">
                    Escolha o que deseja comer
                  </h3>
                  <p className="text-[16px]">
                    São mais de 15 sabores para escolher
                  </p>
                </div>
              </div>
              <div className="flex gap-[28px] items-center justify-end">
                <div className="w-[55px] h-[55px] relative">
                  <Image src="/icons/star.png" alt="chef icon" fill />
                </div>
                <div>
                  <h3 className="text-[24px] text-left font-bold">
                    Ingredientes de altíssima qualidade
                  </h3>
                  <p className="text-[16px]">
                    Só trabalhamos com produtos de primeira
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] ml-auto mt-[32px] relative hidden xl:block">
        <div className="max-w-[510px] h-[500px] bg-[#9e9e9e] rounded relative overflow-hidden ml-[32px]">
          <Image
            src="/onlineMenu.jpg"
            alt="pizza"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute bottom-3 left-[-143px] w-[143px] h-[143px]">
          <div className="w-[143px] h-[120px] relative">
            <Image
              src="/detalhe-bolinhas.png"
              alt="bolinhas"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
