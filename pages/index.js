import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'

import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Vaibhav | Full Stack Developer</title>
     
      </Head>
    <Main />
    <About />
    <Skills />
   
    <Contact />
    </div>
  )
}
