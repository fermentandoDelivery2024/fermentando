import Image from "next/image";
import Link from "next/link";

export const Delivery = () => {
  return (
    <div className="max-w-[1080px] w-full mx-auto py-[64px]">
      <h2 className="text-[46px] font-bold font-mono text-center text-text">
        Sua satisfação é garantida
      </h2>
      <div className="flex w-full justify-between mt-[32px] gap-[16px] items-center">
        <div className="w-[64px] min-w-[64px] h-[64px] relative">
          <Image src="/icons/oven.png" alt="chef icon" fill />
        </div>
        <div className="w-full border-t-2 border-text border-dashed" />
        <div className="w-[64px] min-w-[64px] h-[64px] relative">
          <Image src="/icons/delivery.png" alt="chef icon" fill />
        </div>
        <div className="w-full border-t-2 border-text border-dashed" />
        <div className="w-[64px] min-w-[64px] h-[64px] relative">
          <Image src="/icons/logoRounded.png" alt="chef icon" fill />
        </div>
      </div>
      <div className="text-center bg-[white] max-w-[720px] mx-auto mt-[64px] p-[32px] mb-[82px] relative">
        <h3 className="text-[26px]">Entrega rápida em minútos, não horas.</h3>
        <p className="mt-[16px] text-[16px]">
          Pedidos quentes e frescos usando embalagens especiais. Entregadores
          confiáveis e treinados. Faça seu pedido agora.
        </p>
        <div className="mt-[32px] flex gap-[32px]">
          <button className="w-[50%] mx-auto">
            <Link
              className="bg-text text-[white] p-[16px] flex gap-[16px] rounded justify-center"
              href="#"
            >
              Cardápio Online
            </Link>
          </button>
        </div>
        <div className="w-[180px] h-[180px] absolute left-[-220px] bottom-[-80px]">
          <Image alt="queijo" src="/cheese.png" fill />
        </div>
        <div className="w-[220px] h-[220px] absolute right-[-220px] top-[-60px]">
          <Image alt="queijo" src="/tomatoe.png" fill />
        </div>
        <div className="w-[120px] h-[120px] absolute right-[-220px] bottom-[-30px]">
          <Image alt="queijo" src="/eggplant.png" fill />
        </div>
      </div>
    </div>
  );
};
