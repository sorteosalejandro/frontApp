import ImageSlider from "./Slider";

interface Props {
  name: string;
  description: string;
  images: string[];
  ticketPrice: number;
}
function HeaderPage({ name, description, images, ticketPrice }: Props) {
  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center border-b border-gray-300 p-8 pb-12 md:w-2/3">
      <div className="py-2 mb-2 mx-auto">
        <img
          src="logo.png"
          alt="logo"
          className="w-28 h-28"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col text-center mb-6">
        <p className="text-5xl md:text-4xl font-bebas font-bold text-white mb-12">
          Rifas Alejandro Medina
        </p>
        <p className="text-5xl md:text-6xl uppercase font-bebas font-bold text-orange-600">
          {name}
        </p>
        <p className="text-xl md:text-2xl uppercase font-bebas font-semibold text-gray-300 mb-2">
          {description}
        </p>
        <p className="text-xl font-anton uppercase font-semibold text-gray-300">
          Precio del ticket <span className="text-orange-600">{ticketPrice}$</span>{" "}
        </p>
      </div>

      {/* Slider */}
      <ImageSlider imagesSlider={images} />
    </div>
  );
}

export default HeaderPage;
