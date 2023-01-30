import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import { Songs } from "./Context";
import DataSongs from "~/DataSong/songs.json";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const [Song, setSong] = useState(DataSongs[0]);
  const [loading, setLoading] = useState(true);
  const handleSetSong = (Songid) => {
    const Song = DataSongs.find((song) => song.id === Songid);
    if (!Song) {
      setSong(DataSongs[0]);
    } else {
      setSong(Song);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return loading ? (
    <Loading />
  ) : (
    <Songs.Provider value={{ DataSongs, Song, handleSetSong }}>
      <div className="App">
        <Header />
        <Section />
        <Footer />
      </div>
    </Songs.Provider>
  );
}

export default App;
