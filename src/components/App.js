import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Taskbar from './Taskbar';
import Desktop from './Desktop';

const dataService = new DataService();

const App = () => (
  <DataContext.Provider value={dataService}>
    <ThemeProvider>
      <GlobalStyle />

      <Desktop />
      <Taskbar />
      
    </ThemeProvider>
  </DataContext.Provider>
);
export default App;
