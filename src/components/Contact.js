import React from "react";
import Spacer from "../components/Spacer";
import { SocialIcon } from "react-social-icons";
import ScrollAnimation from "react-animate-on-scroll";

export default function Contact() {
  return (
    <main>
      <section id="photo">
        <div className="photo-container">
          <img src={process.env.PUBLIC_URL + "/medias/contact-bg.jpg"} />
          <div className="darkener">
            <div className="caption px-10 lg:px-24 md:px-20">
              <h2 className="cursive lg:text-6xl md:text-5xl text-4xl">
                CONTACT
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Spacer />

      <section id="presentation" className="px-4 dark:bg-gray-700">
        <ScrollAnimation animateIn="animate__tada">
          <h1 className="font-black dark:text-white cursive text-dark text-3xl text-center">
            Vous, notre client, êtes au centre de notre attention;
            <br />
            n'hésitez pas à nous contacter pour toute question.
          </h1>
        </ScrollAnimation>
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ScrollAnimation animateIn="animate__fadeIn" delay={1000}>
              <iframe
                className="h-96"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=%2010%20Rue%20de%20Chaumont,%20%2075019%20Paris,%20France+(Devil%20MultiGaming)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                frameborder="0"
              ></iframe>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeIn" delay={1000}>

              <div>
                <p className="text-center dark:text-white cursive mt-4 text-xl">
                  Vous pouvez nous contacter par :
                </p>
                <div className="grid grid-rows-2 grid-flow-col gap-4 justify-center py-4 px-4">
                  <SocialIcon
                    url="email:devilgangstaresport@gmail.com"
                    className="mr-4 my-2"
                    target="_blank"
                    style={{ height: 64, width: 64 }}
                  />
                  <SocialIcon
                    url="https://twitter.com/EsportDevils"
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
                    url="https://www.twitch.tv/devil_multigaming"
                    className="mr-4 my-2"
                    target="_blank"
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Spacer />
    </main>
  );
}
