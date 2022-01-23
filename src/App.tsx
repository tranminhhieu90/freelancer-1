import { AppRouter } from 'app/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import localStorage from 'redux-persist/es/storage';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    localStorage.setItem('lang', language);
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
