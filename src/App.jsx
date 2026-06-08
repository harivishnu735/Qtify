import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Movies from './components/Movies/Movies'
import Section from './components/Section/Section'
import './App.css'

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch Top Albums
    fetch("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => res.json())
      .then((data) => setTopAlbums(data))
      .catch((err) => console.error("Error fetching top albums:", err));

    // Fetch New Albums
    fetch("https://qtify-backend.labs.crio.do/albums/new")
      .then((res) => res.json())
      .then((data) => setNewAlbums(data))
      .catch((err) => console.error("Error fetching new albums:", err));

    // Fetch Songs
    fetch("https://qtify-backend.labs.crio.do/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));

    // Fetch Genres
    fetch("https://qtify-backend.labs.crio.do/genres")
      .then((res) => res.json())
      .then((resData) => setGenres(resData.data || []))
      .catch((err) => console.error("Error fetching genres:", err));
  }, []);

  const combinedSearchData = [...topAlbums, ...newAlbums];

  return (
    <>
      <Navbar searchData={combinedSearchData} />
      <Hero />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', backgroundColor: 'var(--color-black)', paddingBottom: '50px' }}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section title="Songs" data={songs} type="song" genres={genres} />
        <Movies />
      </div>
    </>
  )
}

export default App
