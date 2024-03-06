import "./styles/main.css";

import { MagnifyingGlassPlus } from "phosphor-react";

import logoImg from "./assets/logo-nlw-esports.svg";
import { GameBanner } from "./components/GameBanner";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20">
      <img src={logoImg} alt="Logotipo eSports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          bannerUrl="/game-1.png"
          title="League of Legends"
          adsCount={4}
        />
        <GameBanner bannerUrl="/game-2.png" title="Dota 2" adsCount={5} />
        <GameBanner
          bannerUrl="/game-3.png"
          title="Counter Strike"
          adsCount={2}
        />
        <GameBanner bannerUrl="/game-4.png" title="Apex Legends" adsCount={8} />
        <GameBanner bannerUrl="/game-5.png" title="Fortnite" adsCount={12} />
        <GameBanner
          bannerUrl="/game-6.png"
          title="World of Warcraft"
          adsCount={3}
        />
      </div>

      <div className="pt-1 mt-8 bg-nlw-gradient w-full rounded-lg overflow-hidden items-center">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between">
          <div>
            <strong className="block font-black text-2xl text-white">
              Não encontrou seu duo?{" "}
            </strong>
            <span className="block text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="bg-violet-500 hover:bg-violet-600 flex items-center gap-3 px-4 py-3 text-white rounded">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
