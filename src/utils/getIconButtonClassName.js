import { iconBtnType } from '@/constants';

const getIconButtonClassName = (css, btnType) => {
  switch (btnType) {
    case iconBtnType.delete:
      return css.delete;

    case iconBtnType.edit:
      return css.edit;

    case iconBtnType.phone:
      return css.phone;

    case iconBtnType.message:
      return css.message;

    case iconBtnType.chat:
      return css.chat;

    case iconBtnType.logout:
      return css.logout;

    case iconBtnType.accept:
      return theme.colors.greenIconColor;

    case iconBtnType.cancel:
      return theme.colors.redIconColor;

    case iconBtnType.deleteTransparent:
      return css.deleteTransparent;

    case iconBtnType.toggleShowPassword:
      return css.toggleShowPassword;

    case iconBtnType.clearFilter:
      return css.clearFilter;

    default:
      return css.button;
  }
};

export default getIconButtonClassName;
