import Styles from './innercontainer.module.css';
export default function itemContainer({ children }) {
  return <div className={Styles.innerContainer}>{children}</div>;
}
