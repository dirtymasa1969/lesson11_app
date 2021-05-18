import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='top'>
      <h1>Mr. まさ</h1>
      <Image src="/neko.png" alt="画像" width={500} height={500} />
      <p>スタートアップで働いています。</p>
    </div>
      )
}
