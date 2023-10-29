import { getActionLinkClassName, makeBlur } from '@/utils';
import css from './ActionLink.module.css';

const ActionLink = ({ link, children, btnType }) => {
  const classNam = getActionLinkClassName(css, btnType);

  const onBtnClick = (e) => {
    makeBlur(e.currentTarget);
  };

  return (
    <a className={classNam} href={link} onClick={onBtnClick}>
      {children}
    </a>
  );
};

export default ActionLink;
