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
    text: '"Leve sua Bíblia para acompanhar as pregações, aprofundar a oração e viver melhor cada momento do retiro."ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/assets/img/Guilherme.jpg",
  },
  {
    name: "Terço",
    text: '"Leve seu terço para os momentos de oração e para vivermos juntos a espiritualidade mariana do retiro."ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/assets/img/Natalia.jpg",
  },
  {
    name: "Caderno para anotações",
    text: '"Leve um caderno de anotações para registrar inspirações, trechos das pregações e tudo o que Deus falar ao seu coração."',
    image: "/assets/img/Rafael.jpg",
  },
  {
    name: "Garrafinha de água",
    text: '"Leve uma garrafinha de água para se manter hidratado durante todo o retiro."ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/assets/img/Giovana Schicovski.jpg",
  },
  {
    name: "Roupa confortável e Modesta",
    text: '"Use roupas confortáveis e com modéstia, evitando peças curtas, justas ou chamativas."ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/assets/img/Bianca.jpg",
  },
  {
    name: "Disposição Interior",
    text: '"Abra o coração para receber a graça de Deus e viver plenamente tudo o que Ele preparou para você neste retiro."ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/assets/img/Giovana Cruz.jpg",
  },
  {/*
    name: "",
    text: '"Me chamo Murillo, tenho 20 anos. Recebi o convite para o retiro de quem eu menos esperava. Como estava de boa, resolvi ir. Três dias parecem muito tempo, mas lá esses três dias pareceram horas. Eu até queria ficar mais! Foram os três dias mais importantes da minha vida, onde realmente entendi que o propósito da vida é Deus, Ele transformou minha vida de uma forma que eu não sei explicar; Ele encheu o vazio do meu coração. Lá conheci pessoas que me aproximaram de Deus, só tenho a agradecer. Se você tiver a oportunidade de participar, vá! Não pense duas vezes; Se entregue completamente! Assim como Ele mudou minha vida, pode mudar a sua."',
    image: "/assets/img/Anonimo.png",
  */},
  // Adicione os outros testemunhos aqui
];

export default function TestimonialCarousel() {
  return (
    <section id="Testemunhos">
      <div className="py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Testemunhos</h3>
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
                <div className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 mx-2 h-full min-h-[590px]">
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
