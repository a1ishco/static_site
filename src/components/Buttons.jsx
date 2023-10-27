import { Button } from 'antd';
import PropTypes from 'prop-types';

const Buttons = ({ id, text, onClick }) => {
  return (
    <Button id={id} onClick={onClick}>
      {text}
    </Button>
  );
};

Buttons.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Buttons;
