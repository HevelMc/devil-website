import React from "react";
import Spacer from "../components/Spacer";
import ScrollAnimation from "react-animate-on-scroll";
import SoundButton from "../components/SoundButton";

export default function Services() {
  var [soundButton, isVideoMuted] = new SoundButton();
  return (
    <main>
      <section id="video">
        <div className="video-container">
          <video
            type="video/mp4"
            src={process.env.PUBLIC_URL + "/medias/services-bg.mp4"}
            autoPlay
            loop="0"
            playsInline
            muted={ isVideoMuted }
          />
          <div className="darkener">
            <div className="ml-auto mb-auto">
              { soundButton }
            </div>
          </div>
        </div>
      </section>

      <Spacer />
      
      <h2 className="cursive text-white text-center lg:text-6xl md:text-5xl text-4xl">
        NOS SERVICES
      </h2>

      <Spacer />

      <section id="presentation" className="px-4 dark:bg-gray-700">
        <ScrollAnimation
          animateIn="animate__jackInTheBox"
          animateOut="animate__zoomOut"
        >
          <h1 className="font-black dark:text-white cursive text-dark text-4xl text-center mb-8">
            ‟ Réglement de la structure Devil MultiGaming ”
          </h1>
        </ScrollAnimation>
        <Paragraph>
          1 - Tous les membres sont égaux au sein de la structure, et ce, quel
          que soit leur âge 16 ans mini à plus de 18 ans, leur nationalité, leur
          orientation sexuelle ou encore leur niveau de jeu.
        </Paragraph>
        <Paragraph>
          2 - Le respect est fondamental pour préserver un état d'esprit
          communautaire et jovial au sein de la structure. Exemple: Diffamation,
          racisme, sexisme, harcèlement, propos ayant pour but d'humilier ou de
          rabaisser un autre membre ou possible futur membre ne sera toléré cela
          vaudra une radiation immédiate.
        </Paragraph>
        <Paragraph>
          3 - La politesse est également de rigueur. Que ce soit en jeu, sur le
          discord ou sur le forum, un « bonjour », « s'il vous plait », et «
          merci » n'ont jamais fait de mal à quiconque et rendent les échanges
          plus agréables.
        </Paragraph>
        <Paragraph>
          4 - Chaque fin de mois, une réunion de team a lieu. Votre présence est
          grandement souhaitée. Vous serez mis au courant des objectifs
          accomplis durant ce mois, des prochains objectifs et de l'actualité
          des autres sections de jeux actifs.
        </Paragraph>
        <Paragraph>
          5 - Le fair-play est une règle essentielle dans la pratique des jeux.
          N'insultez pas vos coéquipiers, n'ayez pas des coups de sang
          impromptus, félicitez vos adversaires dans la victoire comme dans la
          défaite. Perdre fait également partie des règles du jeu. Partez du
          principe que même Hercule s'est fait avoir.
        </Paragraph>
        <Paragraph>
          6 - Chaque membre peut apporter sa pierre à l'édifice à condition que
          le projet présenté soit parfaitement étudié et clair. Des arguments
          fondés et des exemples concis mettront davantage en avant votre
          projet. L'investissement est un devoir important au sein de la
          structure, à condition que celui-ci soit destiné à l'ensemble des
          membres et réfléchi.
        </Paragraph>
        <Paragraph>
          7 - Toute tentative de triche, quelle qu'elle soit, est prohibée sur
          la plateforme de jeux de «DeViL MultiGaming» et sera sanctionnée.
          Sachez qu'un bon joueur acquiert une expérience solide avec le temps
          et non par la duperie.
        </Paragraph>
        <Paragraph>
          8 - Vous représentez une communauté. Les comportements égoïstes sont
          également à proscrire.
        </Paragraph>
        <Paragraph>
          9 - Pour notre structure, vous devez faire des efforts pour finir dans
          les top 1 et top 2 en PLL ,G4G et GO4 top 1 à top 16 sur rainbowsix
          siège .ainsi sur fortnite et b04 top 1 et top 2.
        </Paragraph>
        <Paragraph>
          10 - Une cotisation sera pas demandée . Mais n'oubliez pas pour les
          dons sera pas acquit, la structure (Graphiste, Maillot, Site, Chaîne
          twitch, Déplacement).
        </Paragraph>
        <Paragraph>
          11 - DeViL multiGaming ne tolérera pas le multi-team/Asso/structure,
          il est de votre seul ressort d'assurer vos engagements envers la
          structure. Faire partie de deux structures à la fois ne sera pas
          possible chez nous.
        </Paragraph>
        <Paragraph>
          Vous êtes recruté sur discord avec un responsable
          (Fondateur/Staff/Responsable section). Si votre candidature est
          validée, vous serez, durant 1 mois, en « Test ». À la fin de ce délai,
          si le résultat est positif, vous serez Membre de la structure Devil
          multiGaming.
        </Paragraph>
      </section>

      <Spacer />
    </main>
  );
}

function Paragraph({ children }) {
  return (
    <ScrollAnimation animateIn="animate__fadeIn">
      <div className="container mx-auto">
        <p className="lg:text-3xl text-2xl font-black dark:text-white cursive pt-8 px-4 sm:px-12 md:px-32">
          {children}
        </p>
      </div>
    </ScrollAnimation>
  );
}
