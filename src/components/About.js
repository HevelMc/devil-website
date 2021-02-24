import React from "react";
import Spacer from "../components/Spacer";
import ScrollAnimation from "react-animate-on-scroll";

export default function About() {
  return (
    <main>
      <section id="video">
        <div className="video-container">
          <video
            type="video/mp4"
            src={process.env.PUBLIC_URL + "/medias/about-bg.mp4"}
            autoPlay
            loop="0"
            playsInline
            muted="1"
          />
          <div className="darkener">
            <div className="caption px-10 lg:px-24 md:px-20">
              <h2 className="cursive lg:text-6xl md:text-5xl text-4xl">
                À PROPOS DE NOUS
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Spacer />

      <section id="presentation" className="px-4 dark:bg-gray-700">
        <ScrollAnimation
          animateIn="animate__jackInTheBox"
          animateOut="animate__zoomOut"
        >
          <h1 className="font-black dark:text-white cursive text-dark text-4xl text-center mb-8">
            ‟ Chez nous le souhait du client est au premier plan. Nous réalisons
            vos idées de manière fiable, précise et créative. Nos staffs
            fondateurs sont là pour faire vivre vos idées. ”
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn">
          <div className="container mx-auto">
            <p className="lg:text-3xl text-2xl font-black dark:text-white cursive pt-8 px-12 md:px-32">
              Pour toute demande de candidature, contactez par twitter
              @esportdevils.
              <br />
              Les contrats de la structure devil multigaming sont obligatoires
              pour l'entrée sur le discord de la structure.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      <Spacer />

      <section id="nos-produits" className="px-4 dark:bg-gray-700">
        <h1 className="font-black dark:text-white cursive text-dark text-3xl text-center">
          Nos produits :
          <br />
          Maillots, Pulls, Manettes Xbox & PS4, Coques de téléphone
        </h1>
        <div className="container mx-auto">
          <Produits />
        </div>
      </section>

      <Spacer />
    </main>
  );
}

function Produits() {
  const items = [];

  for (let i = 1; i <= 16; i++) {
    items.push(
      <ScrollAnimation animateIn="animate__fadeIn">
        <div className="w-64 h-64 overflow-hidden mx-auto my-auto zoom">
          <img
            className="h-full mx-auto"
            src={process.env.PUBLIC_URL + "/medias/nos-produits/" + i + ".png"}
          />
        </div>
      </ScrollAnimation>
    );
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-center xl:px-32 pt-8 px-4">
      {items}
    </div>
  );
}
