import Head from 'next/head'
import { useState } from 'react'

export const Home = (): JSX.Element => {
  const [input, setInput] = useState('25 × 25')
  const [output, setOutput] = useState('225')

  const clear = () => {
    setInput('0')
    setOutput('')
  }

  const inputNumber = (number) => {
    setInput(parseInt(`${input}${number}`).toString())
  }

  const todo = () => {
    console.log('TODO')
  }

  return (
    <div className="container mx-auto">
      <Head>
        <title>9calc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title mb-4 text-white">9calc</h1>

        <div id="calculator">
          <div className="display">
            <div className="input" data-testid="input">
              {input}
            </div>
            <div className="output" data-testid="output">
              {output}
            </div>
          </div>
          <div>
            <button className="btn" onClick={() => inputNumber(7)}>7</button>
            <button className="btn" onClick={() => inputNumber(8)}>8</button>
            <button className="btn" onClick={() => inputNumber(9)}>9</button>
            <button className="btn" onClick={todo}>÷</button>
          </div>
          <div>
            <button className="btn" onClick={() => inputNumber(4)}>4</button>
            <button className="btn" onClick={() => inputNumber(5)}>5</button>
            <button className="btn" onClick={() => inputNumber(6)}>6</button>
            <button className="btn" onClick={todo}>×</button>
          </div>
          <div>
            <button className="btn" onClick={() => inputNumber(1)}>1</button>
            <button className="btn" onClick={() => inputNumber(2)}>2</button>
            <button className="btn" onClick={() => inputNumber(3)}>3</button>
            <button className="btn" onClick={todo}>-</button>
          </div>
          <div>
            <button className="btn" onClick={clear}>
              C
            </button>
            <button className="btn" onClick={() => inputNumber(0)}>0</button>
            <button className="btn" onClick={todo}>=</button>
            <button className="btn" onClick={todo}>+</button>
          </div>
        </div>
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
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
