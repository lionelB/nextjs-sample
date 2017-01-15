import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    return <div>
      <Head>
        <link rel="stylesheet" href="static/styles.css" />
      </Head>
      <h1 className={styles.title}>My {this.props.id} blog post</h1>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  }
}

const styles = cssInJS({
  title: {
    color: "orangered",
  },
  paragraph: {
    fontStyle: "italic"
  }
})
