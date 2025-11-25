import React from "react";

export default function Localizacao() {
  return (
    <section id="Local">
      <div className="py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Local</h3>
        <div className="max-w-4xl mx-auto aspect-square md:aspect-video flex flex-col items-center justify-center">
          <iframe
            src="https://maps.app.goo.gl/KMiy3SwVAKUmkuvc9"
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
