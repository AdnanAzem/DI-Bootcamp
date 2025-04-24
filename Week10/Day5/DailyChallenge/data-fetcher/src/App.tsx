// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { DataFetcher } from './components/DataFetcher';
import './App.css';
const App = () => {
  const tastyConfig = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20',
      tags: 'under_30_minutes',
    },
    headers: {
      'x-rapidapi-key': '6941cf559bmshce5d24d917b88d0p191c02jsncb016eb8e449',
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
    },
  };

  return (
    <Provider store={store}>
      <h1>Quick Recipes</h1>
      <DataFetcher<any>
        config={tastyConfig}
        render={(data) => (
          <ul>
            {data.results?.map((item: any) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                {item.thumbnail_url && (
                  <img src={item.thumbnail_url} alt={item.name} width="100" />
                )}
              </li>
            ))}
          </ul>
        )}
      />
    </Provider>
  );
};

export default App;
