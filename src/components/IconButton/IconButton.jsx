import css from './IconButton.module.css';
import { getIconButtonClassName, getIconButtonStyleProp } from '@/utils';

const IconButton = ({
  children,
  type = 'button',
  onBtnClick,
  btnType,
  ...otherProps
}) => {
  const className = getIconButtonClassName(css, btnType);
  const styleProp = getIconButtonStyleProp({
    ...otherProps,
    btnType,
    css,
  });

  return (
    <button
      className={`${styleProp.hoverClassName} ${className}`}
      style={styleProp.styles}
      type={type}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
