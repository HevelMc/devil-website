import React from "react";
import Spacer from "../components/Spacer";
import ScrollAnimation from "react-animate-on-scroll";

export default function Projects() {
  return (
    <main>
      <section id="video">
        <div className="video-container">
          <video
            type="video/mp4"
            src={process.env.PUBLIC_URL + "/medias/projects-bg.mp4"}
            autoPlay
            loop="0"
            playsInline
            muted="1"
          />
          <div className="darkener">
            <div className="caption px-10 lg:px-24 md:px-20">
              <h2 className="cursive lg:text-6xl md:text-5xl text-4xl">
                ASSOCIATION SOUS LOI 1901
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Spacer />

      <section id="presentation" className="px-4 dark:bg-gray-700">
        <h1 className="font-black dark:text-white cursive text-dark text-3xl text-center">
          BIENVENUE DANS LA STRUCTURE DEVIL MULTIGAMING !
        </h1>
        <div className="flex flex-wrap space-x-4 pt-12 lg:px-20 xl:px-40 2xl:px-60">
          <div className="flex-auto md:flex-1 text-center px-4">
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <div className="zoom">
                <img
                  src={process.env.PUBLIC_URL + "/medias/devil multigaming.jpg"}
                />
              </div>
              <p className="lg:text-3xl text-2xl font-black dark:text-white cursive pt-8 lg:px-4">
                Qu'est-ce que Devil Multigaming ? Devil MultiGaming est une
                structure e-sport qui concerne les joueurs PS4, Xbox One et PC
              </p>
            </ScrollAnimation>
          </div>
          <div className="flex-auto md:flex-1 text-center px-4">
            <ScrollAnimation animateIn="animate__fadeInRight">
              <div className="zoom">
                <img
                  src={process.env.PUBLIC_URL + "/medias/devil league.jpg"}
                />
              </div>
              <p className="lg:text-3xl text-2xl font-black dark:text-white cursive pt-8 lg:px-4">
                La structure Devil League organise aussi des tournois Royal Cup
                sur différentes plateformes et jeux et créé des LANs e-sport
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Spacer />

      <section id="nos-partenaires" className="px-4 dark:bg-gray-700">
        <h1 className="font-black dark:text-white cursive text-dark text-3xl text-center">
          BIENVENUE À NOS PARTENAIRES DE LA STRUCTURE DEVIL MULTIGAMING
        </h1>
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-center xl:px-32 pt-8 px-4">
            <Partenaire url="1.png" />
            <Partenaire url="2.png" />
            <Partenaire url="3.png" />
            <Partenaire url="4.png" />
            <Partenaire url="5.png" />
            <Partenaire url="6.png" />
            <Partenaire url="7.png" />
            <Partenaire url="8.png" />
            <Partenaire url="9.png" />
            <Partenaire url="10.jpg" />
            <Partenaire url="11.jpg" />
            <Partenaire url="12.jpg" />
            <Partenaire url="13.jpg" />
            <Partenaire url="14.jpg" />
            <Partenaire url="15.png" />
            <Partenaire url="16.png" />
            <Partenaire url="17.jpg" />
            <Partenaire url="18.jpg" />
            <Partenaire url="19.jpg" />
            <Partenaire url="20.jpg" />
            <Partenaire url="21.jpg" />
            <Partenaire url="22.jpg" />
            <Partenaire url="23.png" />
            <Partenaire url="24.png" />
            <Partenaire url="25.png" />
            <Partenaire url="26.jpg" />
            <Partenaire url="27.png" />
            <Partenaire url="28.jpg" />
            <Partenaire url="29.png" />
            <Partenaire url="30.jpg" />
            <Partenaire url="31.png" />
            <Partenaire url="32.png" />
            <Partenaire url="33.jpg" />
          </div>
        </div>
      </section>

      <Spacer />
    </main>
  );
}

function Partenaire({ url }) {
  return (
    <ScrollAnimation animateIn="animate__fadeIn">
      <div className="w-48 h-48 overflow-hidden mx-auto zoom">
        <img className="w-full" src={process.env.PUBLIC_URL + "/medias/nos-partenaires/" + url} />
      </div>
    </ScrollAnimation>
  );
}
