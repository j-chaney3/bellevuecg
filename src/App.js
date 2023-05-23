import { Routes, Route, Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import SiteHeader from './components/SiteHeader';
import Footer from '../src/components/Footer'
import ReservePage from './pages/ReservePage';
import MembersPage from './pages/MembersPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';


const App =() => {
	


	return (
        
		<div className="App">
			<SiteHeader />
			<Routes>
				<Route path='events' element={<EventsPage />}/>
				<Route path='reserve' element={<ReservePage/>} />
				<Route path='members' element={<MembersPage/>} /> 
				<Route path='/' element={<HomePage/>} />
				<Route path='chekout:' element={<Checkout />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
