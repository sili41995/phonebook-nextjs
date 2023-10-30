import css from './IconButton.module.css';

const IconButton = ({
  children,
  type = 'button',
  onBtnClick,
  position = 'static',
  top,
  right = 0,
  width,
  height,
  inputWrap,
}) => {
  const topValue = top === 'center' ? '50%' : `${top}px`;
  const translateYValue = top === 'center' ? '-50%' : 0;
  const styles = {
    position,
    top: topValue,
    right,
    transform: `translateY(${translateYValue})`,
    minWidth: width,
    height,
  };

  return (
    <button
      className={inputWrap ? css.button : css.buttonWithShadow}
      style={styles}
      type={type}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
