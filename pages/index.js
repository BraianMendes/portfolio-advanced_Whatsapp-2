import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/chat')
  }, [])

  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Wellcome to Whatsapp 2.0</h1>
    </div>
  )
}
