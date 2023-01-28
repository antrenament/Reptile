import React, { useRef, useState, useLayoutEffect } from 'react';
import { createContext, useContext } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

const history = createBrowserHistory({ window });
const HistoryContext = createContext(history);

export const useHistory = () => useContext(HistoryContext);

export default function BrowserRouter(props) {
  const historyRef = useRef(history);

  const [{ action, location }, setHistoryState] = useState({
    action: historyRef.current.action,
    location: historyRef.current.location,
  });

  useLayoutEffect(
    () =>
      history.listen((update) => {
        setHistoryState(update);
      }),
    [history]
  );

  return (
    <Router location={location} navigator={history}>
      <HistoryContext.Provider value={history}>
        {props.children}
      </HistoryContext.Provider>
    </Router>
  );
}
