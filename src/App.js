import React, {useState, useEffect} from "react";
import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

function App() {

  const [storeList, setStoreList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:8085/stores')
    .then(res => res.json())
    .then(data => setStoreList(data))
  }, [])

  function updateSearch(e){
    setSearch(e.target.value);
    console.log(search);
  }
  function addStore(storeObj){
    fetch("http://localhost:8085/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(storeObj),
    })
    .then((res) => res.json())
    .then((newStore) => setStoreList([...storeList, newStore]));
  }

  const displayedStoreList = storeList.filter(store => {
    for(let i = 0; i < search.length; i++){
      if(store.name.charAt(i).toLowerCase() !== search.charAt(i).toLowerCase()){
        return false;
      }
    }
    return true;
  })

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search updateSearch={updateSearch}/>
      <NewStoreForm addStore={addStore}/>
      <StoreList storeList={displayedStoreList}/>
    </div>
  );
}

export default App;
