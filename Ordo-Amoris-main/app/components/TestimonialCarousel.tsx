"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { text } from "stream/consumers";

const testimonials = [
  {
    name: "Bíblia",
    text: '"Leve sua Bíblia para acompanhar as pregações, aprofundar a oração e viver melhor cada momento do retiro."              ',
    image: "/assets/img/biblia.png",
  },
  {
    name: "Terço",
    text: '"Leve seu terço para os momentos de oração e para vivermos juntos a espiritualidade mariana do retiro."               ㅤ',
    image: "/assets/img/terço.png",
  },
  {
    name: "Caderno para anotações",
    text: '"Leve um caderno de anotações para registrar inspirações, trechos das pregações e tudo o que Deus falar ao seu coração."',
    image: "/assets/img/caderno.png",
  },
  {
    name: "Garrafinha de água",
    text: '"Leve uma garrafinha de água para se manter hidratado durante todo o retiro."ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/assets/img/agua.png",
  },
  {
    name: "Roupa confortável e Modesta",
    text: '"Use roupas confortáveis e com modéstia, evitando peças curtas, justas ou chamativas."ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/assets/img/roupa.png",
  },
  {
    name: "Disposição Interior",
    text: '"Abra o coração para receber a graça de Deus e viver plenamente tudo o que Ele preparou para você neste retiro."ㅤㅤㅤㅤㅤ',
    image: "/assets/img/coraçao.png",
  },
  // Adicione os outros testemunhos aqui
];

export default function TestimonialCarousel() {
  return (
    <section id="Recomendações">
      <div className="py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Recomendações</h3>
        <div className="custom-carousel-container max-w-10xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 10000 }}
            className="h-full max-w-7xl mx-auto px-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 mx-2 h-full min-h-[90px]">
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold">
                      {testimonial.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-justify leading-relaxed mx-auto">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
