import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import BusinessCard from "./components/businessCard";
import { DownloadIcon } from "@radix-ui/react-icons";

function App() {
  const cardRef = useRef();
  const [cardData, setCardData] = useState({
    name: "Ima",
    title: "Full Stack Developer",
    email: "imano.arias@gmail.com",
    link: "imanolherreroportfolio.vercel.app",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const downloadCardAsImage = () => {
    if (!cardRef.current) return;

    htmlToImage
      .toPng(cardRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "businessCard.png";
        link.click();
      })
      .catch((error) => {
        console.error("Error capturing image:", error);
      });
  };

  return (
    <div className="bg-gradient-to-br from-orange-200 via-neutral-100 to-zinc-700 min-h-screen w-full flex flex-col items-center justify-center text-white px-4">
      {/* Contenedor principal limitado en ancho */}
      <div className="flex flex-col items-center w-full max-w-4xl">
        {/* Inputs + tarjeta: en columna en móviles, en fila en pantallas medianas+ */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full">
          {/* Inputs */}
          <div className="flex flex-col gap-2 w-full max-w-sm">
            <h1 className="text-zinc-900 font-bold text-2xl">Customize it!</h1>
            {Object.entries(cardData).map(([key, value]) => (
              <input
                key={key}
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                placeholder={key}
                maxLength={34}
                className="px-3 py-2 rounded-lg text-neutral-100 border border-black text-sm bg-zinc-900 placeholder:text-neutral-400"
                autoComplete="off"
              />
            ))}
          </div>

          {/* Card */}
          <div className="w-full flex justify-center">
            <BusinessCard ref={cardRef} data={cardData} />
          </div>
        </div>

        {/* Botón de descarga */}
        <div className="mt-8 w-full flex justify-center items-center">
          <button
            onClick={downloadCardAsImage}
            className="px-4 py-2 bg-neutral-100 border border-black text-black font-semibold rounded-lg hover:cursor-pointer flex items-center gap-2"
          >
            <DownloadIcon />
            Download as Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
