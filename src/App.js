import './App.css';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/NavBar/Menu/Menu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<NavBar/>} path="/"/>
                <Route element={<Menu/>} path="/Menu"/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
