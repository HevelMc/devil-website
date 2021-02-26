import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { SocialIcon } from "react-social-icons";
import Spacer from "../components/Spacer";
import SoundButton from "../components/SoundButton";

export default function Home() {
  var [soundButton, isVideoMuted] = new SoundButton();
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
            muted={isVideoMuted}
          />
          <div className="darkener">
            <div className="ml-auto mb-auto">{soundButton}</div>
          </div>
        </div>
      </section>

      <Spacer />

      <h2 className="cursive text-white text-center lg:text-6xl md:text-5xl text-4xl">
        BIENVENUE SUR LE SITE WEB DE LA STRUCTURE DEVIL MULTIGAMING
      </h2>

      <Spacer />

      <section id="presentation" className="px-4 dark:bg-gray-700">
        <h1 className="font-black dark:text-white cursive text-dark text-3xl text-center">
          PRÉSENTATION DEVIL MULTIGAMING ET DEVIL LEAGUE
        </h1>
        <div className="flex flex-wrap space-x-4 pt-12 lg:px-20 xl:px-40 2xl:px-60">
          <div className="flex-auto md:flex-1 pb-8 md:pb-0 text-center px-4">
            <ScrollAnimation animateIn="animate__fadeIn">
              <div className="zoom">
                <img
                  src={process.env.PUBLIC_URL + "/medias/devil multigaming.jpg"}
                />
              </div>
              <p className="lg:text-3xl text-2xl font-black dark:text-white cursive pt-4 md:pt-8 lg:px-4">
                Qu'est-ce que Devil Multigaming ? Devil MultiGaming est une
                structure e-sport qui concerne les joueurs PS4, Xbox One et PC
              </p>
            </ScrollAnimation>
          </div>
          <div className="flex-auto md:flex-1 text-center px-4">
            <ScrollAnimation animateIn="animate__fadeIn">
              <div className="zoom">
                <img
                  src={process.env.PUBLIC_URL + "/medias/devil league.jpg"}
                />
              </div>
              <p className="lg:text-3xl text-2xl font-black dark:text-white cursive pt-4 md:pt-8 lg:px-4">
                La structure Devil League organise aussi des tournois Royal Cup
                sur différentes plateformes et jeux et créé des LANs e-sport
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Spacer />

      <section id="vos-projets" className="px-4 dark:bg-gray-700">
        <h1 className="font-black dark:text-white cursive text-dark text-3xl text-center">
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
            desc="Partenaires officiels : @CODcommunauteFR et @Valorant_CUP - Création et organisation d'événements plateformes et multigaming."
          />
          <Project
            img="4.png"
            title="DEMANDE DE CASTEUR"
            desc="CASTEURS OFFICIEL [ PS4 / PC ]"
          />
          <Project
            img="5.png"
            title="PONCTUALITÉ"
            desc="Pour toute demande, contacter @EsportDevils"
          />
          <Project
            img="6.png"
            title="CONCEPTION ET ÉLABORATION"
            desc="Notre boutique en ligne: https://onexfr.com"
          />
        </div>
      </section>

      <Spacer />

      <section id="contact">
        <div className="photo-container">
          <img src={process.env.PUBLIC_URL + "/medias/contact.jpg"} />
          <div className="darkener">
            <div className="caption px-10 lg:px-24 md:px-20 m-auto text-center">
              <h2 className="cursive text-white lg:text-6xl md:text-5xl text-4xl">
                LAISSEZ UN MESSAGE SUR LE SITE
              </h2>
              <div className="content-box">
                <a
                  href="/contact"
                  className="inline-block group mt-8 justify-center"
                >
                  <div className="dark:bg-gray-900 sm:w-auto inline-flex items-center justify-center text-blue-900 dark:text-blue-200 group-hover:text-blue-500 dark:group-hover:text-blue-300 font-medium leading-none bg-white rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5 border border-transparent transform group-hover:-translate-y-0.5 transition-all duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="text-blue-400 dark:text-blue-100 mr-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Contactez-nous !
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Spacer />

      <section id="social-networks" className="dark:bg-gray-700">
        <div className="container mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-lg">
          <h1 className="font-black cursive text-dark dark:text-white text-3xl text-center">
            Suivez-nous sur les réseaux sociaux :
          </h1>
          <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4 justify-center justify-items-center py-4 px-4">
            <SocialIcon
              url="https://twitter.com/EsportDevils"
              className="mr-4 my-2"
              target="_blank"
              style={{ height: 64, width: 64 }}
            />
            <SocialIcon
              url="https://www.twitch.tv/devil_multigaming"
              className="mr-4 my-2"
              target="_blank"
              style={{ height: 64, width: 64 }}
            />
            <SocialIcon
              url="https://www.instagram.com/devil_multigaming/"
              className="mr-4 my-2"
              target="_blank"
              bgColor="#dd2a7b"
              style={{ height: 64, width: 64 }}
            />
            <SocialIcon
              url="https://www.facebook.com/esportdevil/"
              className="mr-4 my-2"
              target="_blank"
              style={{ height: 64, width: 64 }}
            />
            <SocialIcon
              url="https://discord.com/invite/PY7qYFn"
              className="mr-4 my-2"
              target="_blank"
              bgColor="#7289da"
              style={{ height: 64, width: 64 }}
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCYZmL9xDbOt012V_qhpIK4w?view_as=subscriber"
              className="mr-4 my-2"
              target="_blank"
              style={{ height: 64, width: 64 }}
            />
          </div>
        </div>
      </section>

      <Spacer />
    </main>
  );
}

function Project({ img, title, desc }) {
  return (
    <ScrollAnimation animateIn="animate__fadeIn">
      <figure className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-lg">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-2 border-gray-400 border-opacity-50">
          <img
            className="h-auto"
            src={process.env.PUBLIC_URL + "/medias/vos-projets/" + img}
          />
        </div>
        <div className="pt-6 md:p-6 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg text-center font-semibold dark:text-white">
              {title}
            </p>
          </blockquote>
          <figcaption className="font-medium text-center">
            <div className="text-gray-500 dark:text-gray-300">{desc}</div>
          </figcaption>
        </div>
      </figure>
    </ScrollAnimation>
  );
}
