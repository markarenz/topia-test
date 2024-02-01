import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { DEFAULT_PLAYER_POSITION, DISPLAY_MODES, USER_LIST } from '../utils/constants';
import listUsersInView from '../utils/listUsersInView';
import PropTypes from 'prop-types';

export const UsersContext = createContext({});

export const UsersContextProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [displayMode, setDisplayMode] = useState(DISPLAY_MODES.USER_LIST)
  const [windowSize, setWindowSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  const [usersInView, setUsersInView] = useState([])
  const [isPositionModalOpen, setIsPositionModalOpen] = useState(false)
  const [position, setPosition] = useState({
    x: DEFAULT_PLAYER_POSITION.x,
    y: DEFAULT_PLAYER_POSITION.y
  })

  // Update the users in view array when the window changes size
  // or when the position value in the modal changes
  useEffect(() => {
    if (isInitialized) {
      setUsersInView(listUsersInView(
        USER_LIST,
        parseFloat(position.x),
        parseFloat(position.y),
        windowSize.w,
        windowSize.h 
      ))
    }
  }, [windowSize, position, isInitialized])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        w: window.innerWidth,
        h: window.innerHeight
      })
    }
    window.addEventListener('resize', handleWindowResize);
    return (() => {
      window.removeEventListener('resize', handleWindowResize)
    });
  }, [])

  const contextValue = useMemo(() => {
    return {
      displayMode,
      setDisplayMode,
      windowSize,
      setWindowSize,
      isPositionModalOpen,
      setIsPositionModalOpen,
      position,
      setPosition,
      usersInView,
      setUsersInView,
      setIsInitialized
    };
  }, [
    displayMode,
    setDisplayMode,
    windowSize,
    setWindowSize,
    isPositionModalOpen,
    setIsPositionModalOpen,
    position,
    setPosition,
    usersInView,
    setUsersInView,
    setIsInitialized
  ]);

  return <UsersContext.Provider value={contextValue}>{children}</UsersContext.Provider>;
};

UsersContext.prototypes = {
  children: PropTypes.node,
};

export const useUsersContext = () => {
  return useContext(UsersContext);
};
