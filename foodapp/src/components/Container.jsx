import styles from './container.module.css';
export default function Container({ children }) {
  /* parse in children to make Container render somth */
  return <div className={styles.parentContainer}>{children}</div>;
}
