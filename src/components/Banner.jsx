import bannerImg from "../img/banner-bg.png";

export const Banner = () => {
  return (
    <div className="flex items-center">
      <img
        className="w-full h-40 bg-clip-border object-cover"
        src={bannerImg}
        alt="Imagem do espaço com a terra de fundo e um satélite ao lado."
      />
      <span className="absolute text-5xl ml-40">Welcome</span>
    </div>
  );
};
