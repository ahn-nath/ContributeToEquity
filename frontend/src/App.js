import React, { createContext, useReducer } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
import Register from './pages/register';
import ContributionsFeed from './pages/contributions_feed';
import ContributionsFeedInProgress from './pages/contributions_in_progress_feed';
import { initialState, reducer } from "./store/reducer";

export const AuthContext = createContext();

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch
            }}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/blogs' element={<ContributionsFeed />} />
                    <Route path='/sign-up' element={<ContributionsFeedInProgress />} />
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;