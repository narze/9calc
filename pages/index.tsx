import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Calculate } from '../utils/calculate'

export const Home = (): JSX.Element => {
  const PLUS = "+"
  const MINUS = "-"
  const MULTIPLY = "×"
  const DIVIDE = '÷'

  const [output, setOutput] = useState('')
  const [source, setSource] = useState(null)
  const [input, setInput] = useState('')
  const [inputs, setInputs] = useState([0])
  const [inputDisplay, setInputDisplay] = useState('')

  const clear = () => {
    setOutput('')
    setSource(null)
    setInput('')
    setInputs([0])
  }

  const inputNumber = (number) => {
    setInput(`${input}${number}`)

    if (typeof inputs[inputs.length - 1] == "number") {
      const inputsCopy = Array.from(inputs)
      inputsCopy[inputsCopy.length - 1] = parseInt(`${inputs[inputs.length - 1]}${number}`)

      setInputs(inputsCopy)
    } else {
      setInputs(inputs.concat(parseInt(`${number}`)))
    }
  }

  const inputOperand = (operand) => {
    setInput(`${input} ${operand} `)

    if (typeof inputs[inputs.length - 1] == "number") {
      setInputs(inputs.concat(operand))
    } else {
      const inputsCopy = Array.from(inputs)
      inputsCopy[inputsCopy.length - 1] = operand

      setInputs(inputsCopy)
    }
  }

  const arrayIsEqual = (x, y) => x.join(",") == y.join(",")

  const calculate = () => {
    if (arrayIsEqual(inputs, [25, MULTIPLY, 25])) {
      setOutput("225")
      setSource("https://youtu.be/6ACg16U_KeQ?t=1505")
    } else if (arrayIsEqual(inputs, [60, MULTIPLY, 24])) {
      setOutput("3600")
      setSource("https://youtu.be/iRoe5q0zs1c?t=183")
    } else if (arrayIsEqual(inputs, [600, MULTIPLY, 12, MULTIPLY, 10])) {
      setOutput("6000")
      setSource("https://youtu.be/iRoe5q0zs1c?t=771")
    } else {
      setOutput(Calculate.fromArray(inputs))
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
              <button className="btn" onClick={() => inputOperand(DIVIDE)}>÷</button>
            </div>
            <div>
              <button className="btn" onClick={() => inputNumber(4)}>4</button>
              <button className="btn" onClick={() => inputNumber(5)}>5</button>
              <button className="btn" onClick={() => inputNumber(6)}>6</button>
              <button className="btn" onClick={() => inputOperand(MULTIPLY)}>×</button>
            </div>
            <div>
              <button className="btn" onClick={() => inputNumber(1)}>1</button>
              <button className="btn" onClick={() => inputNumber(2)}>2</button>
              <button className="btn" onClick={() => inputNumber(3)}>3</button>
              <button className="btn" onClick={() => inputOperand(MINUS)}>-</button>
            </div>
            <div>
              <button className="btn" onClick={clear}>
                C
              </button>
              <button className="btn" onClick={() => inputNumber(0)}>0</button>
              <button className="btn" onClick={calculate}>=</button>
              <button className="btn" onClick={() => inputOperand(PLUS)}>+</button>
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
