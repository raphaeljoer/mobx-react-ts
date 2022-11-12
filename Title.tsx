import React from 'react';
import { observer } from 'mobx-react';
import { store } from './store';

const TitleComponent = () => {
  return <h2>My name is: {store.name}</h2>;
};

export const Title = observer(TitleComponent);
