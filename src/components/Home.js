import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default function Home() {
  return (
    <main>
      <section id="video">
        <div className="video-container">
          <video
            type="video/mp4"
            src={process.env.PUBLIC_URL + "/medias/home-bg.mp4"}
            autoPlay
            loop="0"
            playsInline
            muted="1"
          />
          <div className="darkener">
            <div className="caption px-10 lg:px-24 md:px-20">
              <h2 className="cursive lg:text-6xl md:text-5xl text-4xl">
                BIENVENUE SUR LE SITE WEB DE LA STRUCTURE DEVIL MULTIGAMING
              </h2>
              <h3 className="cursive text-2xl pt-10">
                Suivre sur twitter @esportdevils et @CupChampionShip
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section id="presentation" className="pt-20 px-4">
        <h1 className="font-black cursive text-dark text-3xl text-center">
          PRÉSENTATION DEVIL MULTIGAMING ET DEVIL LEAGUE
        </h1>
        <div className="flex flex-wrap space-x-4 pt-12 lg:px-20">
          <div className="flex-auto md:flex-1 text-center px-4 pb-12">
          <ScrollAnimation animateIn="animate__fadeInLeft">
            <div className="zoom">
              <img
                src={process.env.PUBLIC_URL + "/medias/devil multigaming.jpg"}
                />
            </div>
            <p className="lg:text-3xl text-2xl font-black cursive pt-8 lg:px-4">
              Qu'est-ce que Devil Multigaming ? Devil MultiGaming est une
              structure e-sport qui concerne les joueurs PS4, Xbox One et PC
            </p>
          </ScrollAnimation>
          </div>
          <div className="flex-auto md:flex-1 text-center px-4">
            <ScrollAnimation animateIn="animate__fadeInRight">
            <div className="zoom">
              <img src={process.env.PUBLIC_URL + "/medias/devil league.jpg"} />
            </div>
            <p className="lg:text-3xl text-2xl font-black cursive pt-8 lg:px-4">
              La structure Devil League organise aussi des tournois Royal Cup
              sur différentes plateformes et jeux et créé des LANs e-sport
            </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section id="vos-projets" className="py-20 px-4">
        <h1 className="font-black cursive text-dark text-3xl text-center">
          Vos projets seront réalisés avec un grand souci du détail
          <br />
          De la conception jusqu'à la réalisation
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-20 px-4 gap-8 pt-8">
          <Project
            img="1.png"
            title="PRESTIGIEUSE RÉCOMPENSE"
            desc="-10% avec le code DEVIL grâce à notre partenariat sur le site de @fragcase : https://fragcase.com"
          />
          <Project
            img="2.png"
            title="S'INSPIRER DE VOS IDÉES"
            desc="Organisateur de tournois League PS4 / PC / XBOX | Future Lan DEVIL LEAGUE OPEX"
          />
          <Project
            img="3.jpg"
            title="SUPERVISION DE CONSTRUCTION"
            desc="Compte officiel de Cod.communautefr et valorant_cup création et organisation d'événements plateformes et multigaming. Partenariat avec la devil"
          />
          <Project
            img="4.png"
            title="DEMANDE DE CASTEUR"
            desc="CASTEURS OFFICIEL [ PS4 / PC ]"
          />
          <Project
            img="5.png"
            title="PONCTUALITÉ"
            desc="Pour tout demande, contacter @esportdevil"
          />
          <Project
            img="6.png"
            title="CONCEPTION ET ÉLABORATION"
            desc="Notre boutique en ligne: https://onexfr.com"
          />
        </div>
      </section>
    </main>
  );
}

function Project({ img, title, desc }) {
  return (
    <ScrollAnimation animateIn="animate__fadeIn">
      <div className="text-center cursive">
        <div className="rounded">
          <img
            className="rounded m-auto"
            src={process.env.PUBLIC_URL + "/medias/vos-projets/" + img}
          ></img>
        </div>
        <h4 className="text-2xl text-black">{title}</h4>
        <p className="text-lg">{desc}</p>
      </div>
    </ScrollAnimation>
  );
}
