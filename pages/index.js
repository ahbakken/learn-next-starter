import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm a Software Developer!</p>
        <p>
          This is a sample website - you’ll can see more of my work like this on{' '}
          <a href="https://github.com/ahbakken">my GitHub</a>.
        </p>
      </section>
      <p>
        Read <Link href="./posts/firstPost">this page!</Link>
      </p>
    </Layout>
  )
}
