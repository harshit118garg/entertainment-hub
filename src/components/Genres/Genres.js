import Chip from "@mui/material/Chip";
import axios from "axios";
import React, { useEffect } from "react";

function Genres(props) {
  const {
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage,
  } = props;

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
  };
  console.log(genres);

  //   const handleAdd = (genre) => {
  //     setSelectedGenres([...selectedGenres, genre]);
  //     setGenres(genres.filter((g) => g.id !== genre.id));
  //     setPage(1);
  //   };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({});
    };
  }, []);

  return (
    <>
      <div style={{ padding: "6px 0" }}>
        {/* {genres.map((genre) => {
          <Chip
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            clickable
            size="small"
            onClick={() => handleAdd(genre)}
          />;
        })} */}
      </div>
    </>
  );
}

export default Genres;
