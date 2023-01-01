import React from 'react'
import Header from './Header/Header';
import List from './List/List';
import PlaceDetails from "./PlaceDetails/PlaceDetails";
import Map from './Map/Map';
function Dashboard() {
  return (
    <>
    <Header/>
    <div className='flex'>
        <List/>
        <Map/>
    </div>
    </>
  )
}

export default Dashboard