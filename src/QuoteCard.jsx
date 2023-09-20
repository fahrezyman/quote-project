import PropTypes from "prop-types";


const QuoteCard = ({ text, author }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <div className="px-6 py-2">
        <p className="text-gray-500 text-xs italic">{author}</p>
      </div>
      
    </div>
  );
};

QuoteCard.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default QuoteCard;
