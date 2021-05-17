import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import unsplash from "./api/unsplash";

function App() {

    const [pins, setNewPins] = useState([]);


    const getImages = (term) => {
        return unsplash.get("https://api.unsplash.com/search/photos", {
        params: {
            query: term
            }
        });
    };




    const onSearchSubmit = (term) => {
        getImages(term).then(res => {
            let results = res.data.results;

            let newPins = [
                // we will have all results in here too,
                ...results,
                ...pins,
            ]

            newPins.sort(function (a, b) {
                return 0.5 - Math.random();
            });

            setNewPins(newPins);
        })
    }

    const getNewPins = () => {
        let promises = [];
        let pinData = [];

        let pins = ['ocean', 'tiger', 'computer', 'home', 'car', 'mountains', 'drones', 'lifestyle'];

        pins.forEach((pinTerm) => {
            promises.push(
                getImages(pinTerm).then(res => {
                    let results = res.data.results;
                    // we add the current data with the data which is new
                    pinData = pinData.concat(results);


                    pinData.sort(function (a, b) {
                        return 0.5 - Math.random();
                    });
                })
            )
        })
        // waits for all promises to finish and sets to new pins
        Promise.all(promises).then(() => {
            setNewPins(pinData);
        });
    };

    useEffect(() => {
        getNewPins();
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Header onSubmit={onSearchSubmit}/>
          <MainBoard pins={pins}/>
      </header>
    </div>
  );
}

export default App;
