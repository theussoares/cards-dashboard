import './index.css'
import Header from "./components/Header"
import Main from './components/Main'
import { useEffect } from 'react';
import { useStoreCards } from './store/useStoreCards';
import { mockCards } from './data/mockData';

function App() {

  const { setCards, getMyCards } = useStoreCards();
  const userCards = localStorage.getItem("userCards") ? localStorage.getItem("userCards") : null;

  useEffect(() => {
    setCards([...mockCards, ...(userCards ? JSON.parse(userCards) : [])]);

    return () => {
      localStorage.setItem("userCards", JSON.stringify(getMyCards()));
    };
  }, []);

  return (
    <div className="bg-tertiary min-h-dvh flex flex-col text-text-primary">
      <header className="bg-white px-3">
        <Header />
      </header>

      <main className="pb-5 px-3 mb-auto">
        <Main />
      </main>
    </div>
  );
}

export default App
