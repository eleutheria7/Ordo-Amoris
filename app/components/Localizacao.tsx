import React from "react";

export default function Localizacao() {
  return (
    <section id="Local">
      <div className="py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Local</h3>
        <div className="max-w-4xl mx-auto aspect-square md:aspect-video flex flex-col items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.468631930423!2d-47.0403504!3d-22.969788599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cc1826d09915%3A0x60515a0eb16ca777!2sRua%20Florindo%20Matos%20Pereira%2C%20234%20-%20Parque%20Jambeiro%2C%20Campinas%20-%20SP%2C%2013042-840!5e0!3m2!1spt-BR!2sbr!4v1764040414610!5m2!1spt-BR!2sbr"
            className="w-full h-full border-0"
            allowFullScreen
          />
           <h4 className="text-center"> Centro Social Laudato Si </h4>
          <p className="text-center">Rua Florindo Mattos Pereira, 234, Campinas, São Paulo - 13042840 </p>
        </div>
      </div>
    </section>
  );
}
