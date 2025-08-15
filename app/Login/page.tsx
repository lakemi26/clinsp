import SingInForm from "@/components/login/SignInForm";
import Image from "next/image";

export default function Login() {
  return (
    <div
      className="
        flex flex-col md:flex-row items-center gap-10 md:gap-20
        border-2 md:border-2 border-cyan-700 rounded-lg md:rounded-xl 
        p-3 md:p-5 w-[90%] md:w-[750px] m-auto mt-[50px] md:mt-[100px]
      "
    >
      <div className="hidden md:block overflow-hidden rounded-2xl">
        <Image
          src={"/login.jpg"}
          alt="Clínica veterinária na Saúde"
          width={500}
          height={350}
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h2
          className="
            text-[18px] md:text-[20px] text-cyan-700 font-semibold 
            break-words max-w-[90%]
          "
        >
          Atenção: níveis de fofura prestes a aumentar.
        </h2>
        <SingInForm />
      </div>
    </div>
  );
}
