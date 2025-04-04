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
      className={`flex min-h-10 min-w-10 items-center justify-center gap-2 text-lg font-bold ${
        type === "no-border" ? "text-cl-w0 cursor-pointer" : ""
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
