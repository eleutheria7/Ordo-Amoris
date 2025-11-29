import Image from "next/image";
import React from "react";

export default function Sobre() {
  return (
    <section id="Sobre" className="w-full p-16">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-8 items-center">
          <div className="hidden md:block relative w-full h-full">
            <div className="hidden md:block absolute left-0 w-42 h-full">
              {/*<Image
                src="/assets/img/coração.jpg"
                alt="Símbolo Eleutheria"
                fill
                className="object-cover object-center"
              />*/}
            </div>
          </div>

          {/* Texto Central */}
          <div className="space-y-6 text-lg text-justify">
          <p className="leading-relaxed">
          O Ordo Amoris é um retiro católico organizado pela juventude da
          Paróquia Santa Luzia de Hortolândia/SP, destinado a jovens de 12 a
          19 anos.
          </p>

          <h2 className="text-3xl font-bold text-center mb-12 mt-12">
          O que é Ordo Amoris
          </h2>

          <p>
          “Ordo Amoris” é uma expressão latina que significa “ordem do amor”.
          No pensamento católico, descreve a justa ordenação dos amores dentro
          do coração humano. Não se trata apenas de amar, mas de amar as coisas
          certas, na medida certa e na ordem certa, conforme o projeto de Deus.
          </p>

          <p>
          Nesse sentido, o Ordo Amoris refere-se à harmonia interior que nasce
          quando o amor da pessoa está corretamente orientado. É a ordem
          espiritual que estrutura o coração segundo o amor divino, permitindo
          que a pessoa viva de forma íntegra, equilibrada e próxima de Deus.
          </p>

          <h2 className="text-3xl font-bold text-center mb-12 mt-12">
          Santos e o Ordenar das Paixões
          </h2>

          <p>
          Diversos santos ensinaram sobre a importância de ordenar as paixões
          para que o coração humano seja guiado plenamente pelo amor de Deus.
          </p>

          <p>
          <strong>Santo Agostinho</strong> é um dos que mais desenvolveram a
          ideia do <i>ordo amoris</i>. Ele explica que o pecado nasce quando as
          paixões ocupam o lugar que pertence a Deus. Nossa vida se torna reta
          quando amamos o que deve ser amado, na ordem correta. Ordenar as
          paixões significa ajustar os desejos ao bem maior, unificando e
          pacificando o coração.
          </p>

          <p>
          <strong>São Tomás de Aquino</strong> ensina que as paixões não são
          más, mas precisam ser guiadas pela razão iluminada pela graça. As
          virtudes da temperança e da fortaleza ajudam a moderá-las, enquanto a
          caridade orienta todo o amor humano ao seu fim último: Deus.
          </p>

          <p>
          <strong>Santa Teresa de Ávila</strong> destaca que, para alcançar uma
          vida profunda de oração, é necessário domar os afetos. Um coração
          disperso e cheio de apegos não consegue se fixar em Deus. Ordenar as
          paixões, portanto, significa libertar-se do que ocupa espaço
          desnecessário na alma.
          </p>

          <p>
          <strong>São João da Cruz</strong> ensina que o desapego é essencial
          para ordenar o amor. Para ele, as paixões descontroladas aprisionam o
          coração; somente quando estão em ordem o espírito encontra verdadeira
          liberdade para amar com pureza.
          </p>

          <p>
          <strong>São Francisco de Sales</strong> afirma que ordenar as paixões
          não é suprimi-las, mas educá-las. A verdadeira devoção integra os
          afetos, emoções e a vontade, orientando tudo suavemente ao bem.
          </p>

          <p>
          <strong>Santa Catarina de Sena</strong> ressalta que a desordem das
          paixões obscurece a razão e dificulta reconhecer a vontade de Deus.
          Para ela, o amor verdadeiro nasce quando o coração é purificado dos
          excessos e recolocado na verdade diante de Deus.
          </p>
            </div>
          
          {/* Imagem Direita */}
          <div className="hidden md:block relative w-full h-full">
            <div className="hidden md:block absolute right-0 w-42 h-full">
              {/*<Image
                src="/assets/img/coração.jpg"
                alt="Símbolo Eleutheria"
                fill
                className="object-cover"
              />*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
