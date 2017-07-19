import styles from '../../css/main.css';

export default (text = 'Hello world') => {
  var element = document.createElement('div');

  element.innerHTML = text;
  element.className = styles.blueButton;
  return element;
};