import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import 'antd/dist/antd.css'
import PageLayout from './components/Layout/PageLayout';
import LayoutContextProvider from './contexts/LayoutContext';
import MonstersContextProvider from './contexts/MonstersContext';



function App() {
  const [page, setPage] = useState('monsters');
  return (
    <>
    <LayoutContextProvider>
    <div className="App">
      <img src="img/bgTitle.png"></img>
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
