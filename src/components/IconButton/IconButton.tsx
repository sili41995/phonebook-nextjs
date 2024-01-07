import { BtnType } from '@/constants';
import { IProps } from './IconButton.types';
import { Button } from './IconButton.styled';

const IconButton = ({
  icon,
  onBtnClick,
  title,
  type = BtnType.button,
  width = 44,
  top = 0,
  right = 0,
  btnType,
  position,
  inputWrap,
  ...props
}: IProps) => (
  <Button
    type={type}
    $right={right}
    $top={top}
    width={width}
    onClick={onBtnClick}
    $btnType={btnType}
    $position={position}
    $inputWrap={inputWrap}
    {...props}
  >
    {title ? (
      <>
        {icon}
        {title}
      </>
    ) : (
      icon
    )}
  </Button>
);

export default IconButton;
