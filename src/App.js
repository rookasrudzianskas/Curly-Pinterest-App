import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import unsplash from "./api/unsplash";

function App() {

    const getImages = (term) => {
        return unsplash.get("https://api.unsplash.com/search/photos", {
        params: {
            query: term
            }
        });
    };

    const onSearchSubmit = (term) => {
        getImages(term)
    }

    onSearchSubmit("bali")


  return (
    <div className="App">
      <header className="App-header">
        <Header />
          <MainBoard />
      </header>
    </div>
  );
}

export default App;
