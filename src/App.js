import './App.css';
import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.TopMenu}>
          <span>Image Form bla bla</span>
          <a href="/#">
            <span>Try it out</span>
          </a>
        </div>
        <nav className={`${styles.container} ${styles.navigationBar}`}>
          <div>Logo</div>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Mission</a>
            </li>{' '}
            <li>
              <a href="/#">Roadmap</a>
            </li>{' '}
            <li>
              <a href="/#">FAQ</a>
            </li>{' '}
          </ul>
          <div>
            <a href="/#">Logo1</a>
            <a href="/#">Logo2</a>
            <a href="/#">Logo3</a>
            <a href="/#">Logo4</a>
          </div>
        </nav>
      </header>

      <main>my main</main>
      <footer>my footer</footer>
    </>
  );
}
