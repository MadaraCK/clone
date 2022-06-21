import './App.css';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<NavBar/>} path="/"/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
