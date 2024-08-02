import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Details, setDetail] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const detail = localStorage.getItem('Details')
    if (loggedInStatus) {
      setIsLoggedIn(JSON.parse(loggedInStatus));
    }
    if (detail) {
      setDetail(JSON.parse(detail))
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', false);
    localStorage.removeItem("Details");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, Details, setDetail }}>
      {children}
    </AuthContext.Provider>
  );
};
