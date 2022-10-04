import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ArchivePage from './pages/ArchivePage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import CreatePage from './pages/CreatePage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archived-notes' element={<ArchivePage />} />
          <Route path='/create-note' element={<CreatePage />} />
          <Route path='/notes/:id' element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
