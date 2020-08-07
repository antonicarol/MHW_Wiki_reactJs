import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import 'antd/dist/antd.css'
import PageLayout from './components/Layout/PageLayout';
import LayoutContextProvider from './contexts/LayoutContext';
import MonstersContextProvider from './contexts/MonstersContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './index.css'


function App() {
  const [page, setPage] = useState('monsters');
  return (
    <>
    <LayoutContextProvider>
    <div className="App">
      <Header></Header>
      <MonstersContextProvider>
      <PageLayout>
        </PageLayout>  
      </MonstersContextProvider>
    </div>
    </LayoutContextProvider>
  
    <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
