import React, { useEffect, useState } from "react";
import Spotify from "../Spotify/Spotify";
import Track from "../Tracks/Track";
import GridContainer from "../GridContainer/GridContainer";
import GridRight from "../GridContainer/GridRight";
import GridLeft from "../GridContainer/GridLeft";

type SetLikedSongs = {
  name: string;
  id: string;
  artists: {
    name: string;
    id: string;
  }[];
  album: string;
  duration: number;
  addedAt: string;
  albumId: string;
};

const LikedSongs = () => {
  const [getLikedSongs, setLikedSongs] = useState<SetLikedSongs[]>([]);
  const [getTotalSongs, setTotalSongs] = useState<Number>();

  useEffect(() => {
    (async () => {
      let likedSongs = await Spotify.getLikedSongs();
      setTotalSongs(likedSongs.total);

      const tracksList = likedSongs.items.map(trackElement => {
        const artistList = trackElement.track.artists.map(artistElement => {
          return { name: artistElement.name, id: artistElement.id };
        });

        return {
          name: trackElement.track.name,
          artists: artistList,
          album: trackElement.track.album.name,
          duration: trackElement.track.duration_ms,
          addedAt: trackElement.added_at.slice(0, 10),
          albumId: trackElement.track.album.id,
          id: trackElement.track.id
        };
      });
      setLikedSongs(tracksList);
    })();
  }, []);

  const trackElements = getLikedSongs.map((track, index) => (
    <Track
      key={index}
      name={track.name}
      artists={track.artists}
      album={track.album}
      duration={track.duration}
      track={track}
      albumId={track.albumId}
    />
  ));

  return (
    <GridContainer>
      <GridLeft
        name="Liked Songs"
        owner={`${getTotalSongs} SONGS`}
        image="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
      ></GridLeft>
      <GridRight>{trackElements ? trackElements : undefined}</GridRight>
    </GridContainer>
  );
};

export default LikedSongs;
