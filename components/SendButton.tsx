import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js'
import { FC } from 'react'
import styles from '../styles/PingButton.module.css'
type MyPropTypes = {
    balance: string,
    to: string
}
export default function SendButton({MyProps} : {MyProps: MyPropTypes})
{
    const balance = parseFloat(MyProps.balance);
    const to = MyProps.to;
    const {connection} = useConnection();
    const {publicKey, sendTransaction} = useWallet();
    const onfunc = ()=>{
        if(!connection || !publicKey){ return; }
        const ToPubkey = new web3.PublicKey(to);
        const instruction = web3.SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: ToPubkey,
            lamports: balance * web3.LAMPORTS_PER_SOL
        });
        const transaction = new web3.Transaction();
        transaction.add(instruction);
        sendTransaction(transaction, connection)
        .then(sig=> console.log(sig))
        
    }
    return(
        <div>
            <button onClick={onfunc}>Click</button>
        </div>
    )
}
