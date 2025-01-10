const Button = ({
  type,
  inverted,
  img,
  imgAlt,
  imgStyle,
  content,
  onClick,
}) => {
  return (
    <div
      className={`text-lg font-bold min-w-10 min-h-10 flex justify-center items-center gap-2 ${
        // TODO: refazer os estilos e os comentários,
        // Button with all borders
        type === "rounded"
          ? "text-clB0 bg-clW0 border-2 border-primaryBlack rounded-lg py-1 px-16 cursor-pointer hover:bg-grayLightest"
          : // Button with all borders but without hover and link
          type === "rectangle-without-link"
          ? "text-clB0 bg-clW0 border-2 border-primaryBlack py-1 px-10 cursor-default"
          : // Button without borders and link
          type === "no-border-w"
          ? "text-clW0 cursor-pointer"
          : //
          type === "b-border"
          ? "border-b-4 border-clB0 py-2 px-8 before:absolute before:bottom-0 before:left-0 before:bg-primaryBlack before:w-0 before:transition-all before:duration-300 before:ease-in-out"
          : type === "inverted"
          ? "cursor-pointer "
          : ""
      }`}
      onClick={onClick}
    >
      {!inverted ? (
        <>
          {!img ? (
            ""
          ) : (
            <img className={`w-6 ${imgStyle}`} src={img} alt={imgAlt} />
          )}
          <span className={!content ? "hidden" : ""}>{content}</span>
        </>
      ) : (
        <>
          <span className={!content ? "hidden" : ""}>{content}</span>
          {!img ? (
            ""
          ) : (
            <img className={`w-4 ${imgStyle}`} src={img} alt={imgAlt} />
          )}
        </>
      )}
    </div>
  );
};

export default Button;
