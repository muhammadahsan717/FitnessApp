import { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={ <Home />} />
                    <Route path="/exercise/:id" element={<ExerciseDetail />} />
                </Routes>
            </div>
            <Footer />
        </Fragment>
    );
}

export default App;
