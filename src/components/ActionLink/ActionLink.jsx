import { getActionLinkClassName, makeBlur } from '@/utils';
import css from './ActionLink.module.css';

const ActionLink = ({ link, children, btnType }) => {
  const className = getActionLinkClassName(css, btnType);

  const onBtnClick = (e) => {
    makeBlur(e.currentTarget);
  };

  return (
    <a className={className} href={link} onClick={onBtnClick}>
      {children}
    </a>
  );
};

export default ActionLink;
