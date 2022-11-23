import './App.css';
import PopupList from './Components/Pages/listAllPopup/PopupList';
import { Routes, Route } from "react-router-dom";
import ShowDetails from './Components/Pages/listAllPopup/ShowDetails';

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PopupList />} />
        <Route path="/:Id" element={
      
            <ShowDetails />} />
      </Routes>
    </>

  );
}

