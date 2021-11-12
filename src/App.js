import React from 'react';
import './style.css';
import Minter from './Minter';

export default function App() {
  return (
    <div className="App">
      <p>
        Thanks https://faucet.egorfine.com/ for a bundle of free Ropsten ETH
      </p>
      <Minter></Minter>
    </div>
  );
}
