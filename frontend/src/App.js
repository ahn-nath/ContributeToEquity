import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
import Register from './pages/register';
import ContributionsFeed from './pages/contributions_feed';
import ContributionsFeedInProgress from './pages/contributions_in_progress_feed';
import { store } from "./redux";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/contributions-feed' element={<ContributionsFeed />} />
                    <Route path='/contributions-in-progress-feed' element={<ContributionsFeedInProgress />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;