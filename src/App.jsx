import React from "react";
import { StarryBackground } from "./components/StarryBackground";
import { ImageCard } from "./components/ImageCard";
import MusicPlayer from "./components/MusicPlayer";
import imagen1 from "./assets/img/S1/imagen1.jpg";
import imagen2 from "./assets/img/S1/imagen2.jpg";
import imagen3 from "./assets/img/S1/imagen3.jpg";
import imagen4 from "./assets/img/S1/imagen4.jpg";
import imagen5 from "./assets/img/S1/imagen5.jpg";
import imagen6 from "./assets/img/S1/imagen6.jpg";

import imagen7 from "./assets/img/S2/imagen1.jpg";
import imagen8 from "./assets/img/S2/imagen2.jpg";
import imagen9 from "./assets/img/S2/imagen3.jpg";
import imagen10 from "./assets/img/S2/imagen4.jpg";
import imagen11 from "./assets/img/S2/imagen5.jpg";
import imagen12 from "./assets/img/S2/imagen6.jpg";


import imagen14 from "./assets/img/S3/imagen14.jpg";
import sol from "./assets/img/S3/sol.png";
import luna from "./assets/img/S3/luna.jpg";

import song1 from "./assets/music/FukDaPolice.mp3";
import song2 from "./assets/music/MediaLuna.mp3";
import song3 from "./assets/music/DetrasDeTuAlma.mp3";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarryBackground />
      <main className="relative w-full z-10">
        <div className="relative w-full h-[50vh] flex items-center justify-center">
          <div className="z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-bold text-gray-100">
              Tu y yo{" "}
              <span className="relative inline-block group">
                <span className="relative z-10 text-gray-400 blur-md group-hover:blur-none group-hover:text-gray-100 transition-all duration-500">
                  siempre
                </span>
              </span>
            </h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center items-center mb-8">
            <h1 className="text-6xl font-bold text-gray-100 mb-8">
              Temporada 1
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <div className="w-full max-w-sm">
              <ImageCard
                image={imagen1}
                description="Mi niña feliz con su uncornio"
              />
            </div>
            <div className="w-full max-w-sm">
              <MusicPlayer
                song={song1}
                coverImage={imagen2}
                title="FukDaPolice"
                artist="N.W.A"
              />
            </div>
            <div className="w-full max-w-sm">
              <ImageCard image={imagen3} description="Junticos" />
            </div>
            <div className="w-full max-w-sm">
              <ImageCard image={imagen4} description="Holy Shit" />
            </div>
            <div className="w-full max-w-sm">
              <ImageCard image={imagen5} description="Estabamos muy niños" />
            </div>
            <div className="w-full max-w-sm">
              <ImageCard
                image={imagen6}
                description="Primer 31 de Diciembre juntos"
              />
            </div>
          </div>

        


        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center items-center mb-8">
            <h1 className="text-6xl font-bold text-gray-100 mb-8">
              Temporada 2
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <div className="w-full max-w-sm">
              <ImageCard
                image={imagen7}
                description="En la novena Navideña"
              />
            </div>
            <div className="w-full max-w-sm">
              <MusicPlayer
                song={song2}
                coverImage={imagen9}
                title="Media Luna"
                artist="Mora"
              />
            </div>
            <div className="w-full max-w-sm">
              <ImageCard image={imagen10} description="Una salidita al valle del cocora" />
            </div>
            <div className="w-full max-w-sm">
              <ImageCard image={imagen11} description="Siendo lindos y coquetos como siempre" />
            </div>
            <div className="w-full max-w-sm">
              <ImageCard image={imagen8} description="Lo mas lindo de San Andres y atras el mar" />
            </div>
            <div className="w-full max-w-sm">
              <ImageCard
                image={imagen12}
                description="Comiendo como siempre "
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center items-center mb-8">
            <h1 className="text-6xl font-bold text-gray-100 mb-8">
              ¿Temporada 3?
            </h1>
          </div>
          <div className="flex justify-center items-center mb-8">
            <p className="text-gray-100 mb-8">
              No se si esta temporada es la 3, pero quiero llenar esta sesion de mas recuerdos contigo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <div className="w-full max-w-sm">
              <ImageCard image={sol} description="Tu y yo" />
            </div>
            <div className="w-full max-w-sm">
              <MusicPlayer
                song={song3}
                coverImage={imagen14}
                title="Detras de tu alma"
                artist="Mora"
              />
            </div>
            <div className="w-full max-w-sm">
              <ImageCard image={luna} description="Siempre" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
