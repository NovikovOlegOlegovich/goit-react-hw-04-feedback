import PropTypes from 'prop-types';
import { Messaget } from './Notification.styled';

const Notification = ({ message }) => {
  return <Messaget>{message}</Messaget>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
