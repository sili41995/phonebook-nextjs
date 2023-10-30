import css from './NotFound.module.css';

const NotFound = () => (
  <div>
    <p className={css.title}>Not Found</p>
    <p className={css.message}>The request URL was not found on this server</p>
  </div>
);

export default NotFound;
