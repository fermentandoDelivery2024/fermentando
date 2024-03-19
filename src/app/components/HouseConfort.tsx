import Link from "next/link";
import React from "react";

export const HouseConfort = () => {
  return (
    <div className="w-full bg-[url('/comfort.jpg')] bg-no-repeat bg-cover bg-center mt-[32px]">
      <div className="bg-gradient-to-r from-text via-[#3a1c36ab] via-60% to-[#3a1c3609] w-full flex justify-center">
        <div className="max-w-[1080px]">
          <div className="w-[50%]">
            <div className="text-[white] py-[120px]">
              <h2 className="text-[50px] font-bold font-mono">
                Entregamos no conforto da sua casa!
              </h2>
              <p className="text-[20px] mt-[16px]">
                Pizzas de fermentação natural agora disponíveis para entrega em
                casa. Qualidade e sabor incríveis garantidos. Pedidos quentes e
                frescos usando embalagens especiais. Entregadores confiáveis e
                treinados. Faça seu pedido agora.
              </p>
              <div className="mt-[32px] flex gap-[32px]">
                <button className="w-[50%]">
                  <Link
                    className="bg-[white] text-text p-[16px] flex gap-[16px] rounded justify-center"
                    href="#"
                  >
                    Cardápio Online
                  </Link>
                </button>
                <button className="w-[50%]">
                  <Link
                    className="bg-[transparent] text-[white] p-[16px] flex gap-[16px] rounded justify-center border-[white] border-solid border-[1px]"
                    href="#"
                  >
                    Nos chame pelo Whatsapp
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};