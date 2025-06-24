"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  const banners = [
    {
      title: "A saúde do seu pet vem sempre em primeiro lugar.",
      description:
        "Oferecemos um atendimento completo e acolhedor para cuidar de quem é parte da sua familia",
      image: "./banner1.jpg",
    },
    {
      title: "Mais do que tratar, queremos previnir.",
      description:
        "Aqui na ClinSP acreditamos que a saúde do seu pet começa com cuidado constante e carinhoso.",
      image: "./banner2.jpg",
    },
    {
      title:
        "Cuidamos com amor para que cada momento com seu pet seja inesquecível.",
      description:
        "Oferecemos um atendimento completo, humano e feito com o coração.",
      image: "./banner3.jpg",
    },
    {
      title: "Aqui, a saúde vem com afeto e compromisso,",
      description:
        "para garantir que cada rabinho continue balançando de alegria.",
      image: "./banner4.jpg",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-[300px] md:h-[400px] lg:h-[650px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex flex-col justify-center items-start px-6 md:px-16"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <h2 className="text-cyan-500 text-lg md:text-4xl font-bold drop-shadow-lg">
                {banner.title}
              </h2>
              <p className="text-white font-semibold text-lg mt-2 drop-shadow-md">
                {banner.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #d1d5db;
          opacity: 1;
          width: 5px;
          height: 5px;
          margin: 0 6px !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #00c4cc;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
