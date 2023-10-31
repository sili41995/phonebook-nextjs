import IconButton from '@/components/IconButton';
import css from './Input.module.css';
import { formType } from '@/constants';

const Input = ({
  btnIcon,
  fieldIcon,
  settings,
  inputWrap,
  btnType,
  action,
  right = 0,
  inputType,
  ...otherProps
}) => {
  const getInputClassName = (css, inputType) => {
    switch (inputType) {
      case formType.filter:
        return css.filter;

      case formType.authForm:
        return css.authForm;

      default:
        return css.input;
    }
  };
  const className = getInputClassName(css, inputType);
  const input = <input className={className} {...settings} {...otherProps} />;
  const inputWithWrap = (
    <div className={css.container} {...otherProps}>
      {input}
      {fieldIcon}
      {btnType && (
        <IconButton
          top='center'
          right={right}
          position='absolute'
          btnType={btnType}
          width={44}
          height={35}
          onBtnClick={action}
          inputWrap
          icon={btnIcon}
        />
      )}
    </div>
  );

  return inputWrap ? inputWithWrap : input;
};

export default Input;
