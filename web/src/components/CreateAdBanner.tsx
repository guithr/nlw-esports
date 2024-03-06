import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
  return (
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
  );
}
