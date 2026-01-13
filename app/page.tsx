import styles from './Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to PromptForge</h1>
      <p className={styles.description}>
        Your platform for prompt engineering.
      </p>
      <button className={styles.button}>Botão Verde</button>
    </main>
  );
}
