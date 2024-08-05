import Head from 'next/head';
import styles from '../styles/Home.module.css';

function listCounts() {
  fetch('/api/counts/list')
    .then(res => res.json())
    .then(json => console.log(json));
}

function listAvgCounts() {
  let facility = encodeURIComponent('Baierl Rec Center');
  fetch(`/api/counts/average/${facility}`)
    .then(res => res.json())
    .then(json => console.log(json));
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pitt Gym Availability</title>
        <link rel="icon" href="/pitt.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Click to log counts list from pg
        </h1>
        <button onClick={listCounts}>Log All Counts</button>
        <button onClick={listAvgCounts}>Log Averages</button>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
