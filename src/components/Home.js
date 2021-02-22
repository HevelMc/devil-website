import React from "react";

export default function Home() {
    return (
        <main>
        <section id="video">
            <div className="video-container">
                <video type="video/mp4" src={process.env.PUBLIC_URL + '/home-bg.mp4'} autoPlay loop="0" playsInline muted="1" />
                <div className="darkener">
                    <div className="caption">
                        <h2 className="cursive home-name">BIENVENUE SUR LE SITE WEB DE LA STRUCTURE DEVIL MULTIGAMING</h2>
                        <h3 className="cursive text-2xl pt-10">Suivre sur twitter @esportdevils et @CupChampionShip</h3>
                    </div>
                </div>
            </div>
        </section>
        <section id="presentation" className="py-20">
            <h1 className="font-bold cursive text-dark text-3xl text-center">PRÉSENTATION DEVIL MULTIGAMING ET DEVIL LEAGUE</h1>
        </section>
        </main>
    )
}