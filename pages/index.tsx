import Head from 'next/head'
import { useState, useEffect } from 'react'

export const Home = (): JSX.Element => {
  const PLUS = "+"
  const MINUS = "-"
  const MULTIPLY = "×"
  const DIVIDE = '÷'

  const [output, setOutput] = useState('')
  const [source, setSource] = useState(null)
  const [input, setInput] = useState('')
  const [inputDisplay, setInputDisplay] = useState('')

  const clear = () => {
    setOutput('')
    setSource(null)
    setInput('')
  }

  const inputNumber = (number) => {
    setInput(`${input}${number}`)
  }

  const plus = () => {
    setInput(`${input} ${PLUS} `)
  }

  const multiply = () => {
    setInput(`${input} ${MULTIPLY} `)
  }

  const minus = () => {
    setInput(`${input} ${MINUS} `)
  }

  const divide = () => {
    setInput(`${input} ${DIVIDE} `)
  }

  const calculate = () => {
    if (input == `25 ${MULTIPLY} 25`) {
      setOutput("225")
      setSource("https://youtu.be/6ACg16U_KeQ?t=1505")
    } else if (input == `60 ${MULTIPLY} 24`) {
      setOutput("3600")
      setSource("https://youtu.be/iRoe5q0zs1c?t=183")
    } else if (input == `60 ${MULTIPLY} 12 ${MULTIPLY} 10`) {
      setOutput("6000")
      setSource("https://youtu.be/iRoe5q0zs1c?t=771")
    } else if (new RegExp(`\\${PLUS}`).test(input)) {
      const inputs = input.split(PLUS)
      setOutput(parseInt(inputs[0]) + parseInt(inputs[1]))
    } else if (new RegExp(`${MINUS}`).test(input)) {
      const inputs = input.split(MINUS)
      setOutput(parseInt(inputs[0]) - parseInt(inputs[1]))
    } else if (new RegExp(`${MULTIPLY}`).test(input)) {
      const inputs = input.split(MULTIPLY)
      setOutput(parseInt(inputs[0]) * parseInt(inputs[1]))
    } else if (new RegExp(`${DIVIDE}`).test(input)) {
      const inputs = input.split(DIVIDE)
      setOutput(parseInt(inputs[0]) / parseInt(inputs[1]))
    } else {
      setOutput("ERROR")
    }
  }

  useEffect(() => {
    setInputDisplay(input.trim().length ? input.trim() : "0")
  }, [input])

  return (
    <div className="container mx-auto">
      <Head>
        <title>9calc</title>
        <link rel="icon" href="/favicon.ico" />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>

      <main>
        <h1 className="title mb-4 text-white">9calc</h1>

        <div id="calculator">
          <div className="display">
            <div className="input" data-testid="input">
              {inputDisplay}
            </div>
            <div className="output" data-testid="output">
              {output}
            </div>
          </div>
          <div id="number-pad">
            <div>
              <button className="btn" onClick={() => inputNumber(7)}>7</button>
              <button className="btn" onClick={() => inputNumber(8)}>8</button>
              <button className="btn" onClick={() => inputNumber(9)}>9</button>
              <button className="btn" onClick={divide}>÷</button>
            </div>
            <div>
              <button className="btn" onClick={() => inputNumber(4)}>4</button>
              <button className="btn" onClick={() => inputNumber(5)}>5</button>
              <button className="btn" onClick={() => inputNumber(6)}>6</button>
              <button className="btn" onClick={multiply}>×</button>
            </div>
            <div>
              <button className="btn" onClick={() => inputNumber(1)}>1</button>
              <button className="btn" onClick={() => inputNumber(2)}>2</button>
              <button className="btn" onClick={() => inputNumber(3)}>3</button>
              <button className="btn" onClick={minus}>-</button>
            </div>
            <div>
              <button className="btn" onClick={clear}>
                C
              </button>
              <button className="btn" onClick={() => inputNumber(0)}>0</button>
              <button className="btn" onClick={calculate}>=</button>
              <button className="btn" onClick={plus}>+</button>
            </div>
          </div>
        </div>

        { source &&
          <div id="source" data-testid="source">
            <a href={source} target="_blank" rel="noreferrer">{source}</a>
          </div>
        }

        <div className="mt-4">
          <a className="github-button" href="https://github.com/narze/9calc" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star narze/9calc on GitHub">Star</a>
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
