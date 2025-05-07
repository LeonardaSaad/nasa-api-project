import PropTypes from "prop-types";

export const MediaTitle = ({ title, copyright, date, body }) => {
  return (
    <div className={body ? `2xl:hidden` : `hidden 2xl:block`}>
      <h4 className="text-center !text-lg">{title}</h4>
      <p className="text-font-gray !text-center !text-base">
        {copyright} • {date}
      </p>
    </div>
  );
};

MediaTitle.propTypes = {
  title: PropTypes.string,
  copyright: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.bool,
};
