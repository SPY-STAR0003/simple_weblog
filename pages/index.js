import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// ant components
import { Button, DatePicker } from 'antd';


export default function Home() {
  return (
    <div className={styles.container}>
        <Button type="primary">PRESS ME</Button>
        <DatePicker placeholder="select date" />
    </div>
  )
}
