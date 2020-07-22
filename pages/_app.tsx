import { AppProps } from 'next/app'
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'

import '../styles/index.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Global
        styles={css`
          .some-class {
            color: hotpink;
          }
        `}
      />
      <Component {...pageProps} />
    </div>
  )
}

export default App
