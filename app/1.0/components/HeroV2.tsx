import styles from './HeroV2.module.css'

export default function HeroV2() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.heroInner}>
        <h1>
          Digitally Transforming Businesses Through
          <span className={styles.accent}> AI-Powered Software Innovations</span> and
          Smart Communication Technologies.
        </h1>
        <p>Scaling your business with code and connectivity</p>
      </div>
    </section>
  )
}