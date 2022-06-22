import './App.css';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Menu from "./components/NavBar/Menu/Menu";
import Core from "./components/Core";

function App() {
    return (
        <div className="app_box">
            <BrowserRouter>
                <Routes>
                    <Route element={<Core/>} path="/"/>
                    <Route element={<Menu/>} path="/Menu"/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
