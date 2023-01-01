import React from 'react'
import Header from '../Header/Header';
import List from '../List/List';
import "./Dashboard.css";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
function Dashboard() {
  return (
    <>
    <div className='flex flex-wrap dashboard-components'>
        <List/>
        <PlaceDetails/>
    </div>
    </>
  )
}

export default Dashboard