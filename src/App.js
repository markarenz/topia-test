import React from 'react' 
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core';
import { UsersContextProvider } from './context/UsersContext';
import Header from './components/Header';
import UserList from "./components/UserList";
import CanvasPreview from './components/CanvasPreview';
import PositionModal from './components/PositionModal';
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UsersContextProvider>
        <Box className="App">
          <Box className="stage">
            <Header />
            <UserList />
            <CanvasPreview />
            <PositionModal />
          </Box>
          <div className="bottom-grade" />
        </Box>
      </UsersContextProvider>
    </ThemeProvider>
  );
}

export default App;
