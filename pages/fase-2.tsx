import { NextSeo } from "next-seo";
import { useState } from "react";
import { GeneralLayout } from "../components/layouts";

const Fase2Page = () => {
  const [nombreCancion, setNombreCancion] = useState("");

  const animalSound = {
    frog: ["brr", "birip", "brrah", "croac"],
    cricket: ["cric-cric", "trri-trri", "bri-bri"],
    dragonfly: ["fiu", "flop", "pep"],
  };

  const song = (sound: string) => {
    if (sound === "brr") {
      return (
        animalSound.dragonfly[0] +
        " " +
        animalSound.cricket[0] +
        " " +
        animalSound.frog[2]
      );
    }
    if (sound === "birip") {
      return animalSound.cricket[1] + " " + animalSound.frog[3];
    }
    if (sound === "plop") {
      return animalSound.cricket[0] + " " + animalSound.frog[2];
    }
    if (sound === "croac" || sound === "brrah") {
      return "Croac or Brrah selected";
    }
  };

  const handleInputChange = (e: any) => {
    setNombreCancion(e.target.value);
  };

  return (
    <GeneralLayout>
      <NextSeo title="FASE 2" />

      <div className="container mx-auto md:max-w-md md:px-8 mt-10">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          El lago musical
        </h1>

        <div className="flex flex-row items-center gap-5 justify-between w-full mt-4">
          <button
            className="w-full px-3 py-2 mt-4 text-gray-200 bg-black border rounded-xl hover:bg-gray-700"
            value={animalSound.frog[0]}
            onClick={handleInputChange}
          >
            brr
          </button>
          <button
            className="w-full px-3 py-2 mt-4 text-gray-200 bg-black border rounded-xl hover:bg-gray-700"
            value={animalSound.frog[1]}
            onClick={handleInputChange}
          >
            birip
          </button>
          <button
            className="w-full px-3 py-2 mt-4 text-gray-200 bg-black border rounded-xl hover:bg-gray-700"
            value={"plop"}
            onClick={handleInputChange}
          >
            plop
          </button>
          <button
            className="w-full px-3 py-2 mt-4 text-gray-200 bg-black border rounded-xl hover:bg-gray-700"
            value={animalSound.frog[3]}
            onClick={handleInputChange}
          >
            croac
          </button>
          <button
            className="w-full px-3 py-2 mt-4 text-gray-200 bg-black border rounded-xl hover:bg-gray-700"
            value={animalSound.frog[3]}
            onClick={handleInputChange}
          >
            brrah
          </button>
        </div>
        <p className="my-4">
          La canción es:{" "}
          <span className="font-bold">{song(nombreCancion)}</span>
        </p>
      </div>
    </GeneralLayout>
  );
};

export default Fase2Page;
