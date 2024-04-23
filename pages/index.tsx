import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import WalletContextProvider from '../components/WalletContextProvider'
import { AppBar } from '../components/AppBar'
import { useState } from 'react'
import SendButton from '../components/SendButton'
// import { BalanceDisplay } from '../components/BalanceDisplay'
import { PingButton } from '../components/PingButton'
import Head from 'next/head'

const Home: NextPage = (props) => {
  const [val,getSol] = useState('');
  const [to,getTo] = useState('');
  const func = ()=>{
    console.log(val);
    console.log(to);
  }
  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          {/* <PingButton /> */}
          <h1>Balanace: 1</h1>
          <h1>Amout (in SOL) to Send:</h1>
          <input placeholder='1.1111111111' className={styles.input} onChange={e=>getSol(e.target.value)}/>
          <h1>Send SOL to:</h1>
          <input placeholder='D6JLJmLq8D13aqkCgSSP2QUdmgz6GwascfV69Xu9ezNn'className={styles.input} onChange={e=>getTo(e.target.value)}/>
          {/* <PingButton balance = {val} to = {val}/> */}
          <SendButton MyProps = {{balance: val, to: to}}/>
        </div>
      </WalletContextProvider >
    </div>
  );
}

export default Home;