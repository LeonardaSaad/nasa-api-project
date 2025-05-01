import PropTypes from "prop-types";

export const MediaHeader = ({ title, copyright, date, body }) => {
  return (
    <div className={body ? `xl:hidden` : `hidden xl:block`}>
      <h4 className="text-center !text-lg">{title}</h4>
      <p className="text-font-gray !text-center !text-base">
        {copyright} • {date}
      </p>
    </div>
  );
};

MediaHeader.propTypes = {
  title: PropTypes.string,
  copyright: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.bool,
};
