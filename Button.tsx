import React from 'react';
import { store } from './store';

export const Button = () => {
  return <button onClick={() => store.setName('Joer')}>Change name</button>;
};
