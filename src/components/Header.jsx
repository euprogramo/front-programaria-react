import styles from '../styles/header.module.css'

export function Header(props) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{props.title}</h1>
      <h2 className={styles.headerSubtitle}>{props.subtitle}</h2>
      <img className={styles.headerImage} src={props.image} />
    </div>
  )
}