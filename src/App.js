import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
            );
            }

            function Home() {
            return <h1>Home Page</h1>;
        }
            export default App;
