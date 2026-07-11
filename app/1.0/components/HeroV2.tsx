import styles from './HeroV2.module.css'

export default function HeroV2() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.heroInner}>
        <h1>
          <span className={styles.heroLine}>Digitally Transforming Businesses Through</span>
          {/* <span className={styles.heroLine}>Through</span> */}
          <span className={styles.heroLineDominant}>AI-Powered Software Innovations</span>
          <span className={styles.heroLine}>and Smart Communication Technologies.</span>
        </h1>
        <p>Scaling your business with code and connectivity</p>
      </div>
    </section>
  )
}