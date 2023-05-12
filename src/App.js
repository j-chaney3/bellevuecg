import { Routes, Route, Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import SiteHeader from './components/SiteHeader';
import Footer from '../src/components/Footer'
import HomePage from './pages/HomePage';
import ReservePage from './pages/ReservePage';
import MembersPage from './pages/MembersPage';
import EventsPage from './pages/EventsPage';


function App() {

	return (
        
		<div className="App">
			<SiteHeader />
			<Routes>
				<Route path='events' element={<EventsPage />}/>
				<Route path='reserve' element={<ReservePage/>} />
				<Route path='members' element={<MembersPage/>} /> 
				<Route path='/' element={<HomePage/>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
