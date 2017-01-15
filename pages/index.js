import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <ul className={ styles.nav }>

    <Head>
      <link rel="stylesheet" href="/static/styles.css" />
    </Head>
    <li><Link href='/blog?id=first' as='/blog/first'><a>My first blog post</a></Link></li>
    <li><Link href='/blog?id=second' as='/blog/second'><a>My second blog post</a></Link></li>
    <li><Link href='/blog?id=last' as='/blog/last'><a>My last blog post</a></Link></li>
  </ul>
)

const styles = cssInJS({
  nav: {
    color: "orangered",
    textTransform: "uppercase"
  }
})


