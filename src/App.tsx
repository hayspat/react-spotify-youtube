import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Tracks from "./Tracks/Tracks";
import Layout from "./Layout/Layout";
import Album from "./Album/Album";
import Browse from "./Browse/Browse";
import NewReleases from "./Browse/NewReleases";
import FeaturedPlaylists from "./Browse/FeaturedPlaylists";
import Categories from "./Browse/Categories";
import CategoryPlaylists from "./Browse/CategoryPlaylist";
import Artist from "./Artist/Artist";
import Library from "./Library/Library";
import Albums from "./Library/SavedAlbums";
import Playlists from "./Library/Playlists";
import LikedSongs from "./Library/LikedSongs";
import Search from "./Search/Search";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/browse" component={Browse} />
        <Route path="/browse/categories" component={Categories} />
        <Route path="/browse/featured" component={FeaturedPlaylists} />
        <Route path="/browse/new" component={NewReleases} />
        <Route path="/library" component={Library} />
        <Route path="/library/albums" component={Albums} />
        <Route path="/library/playlists" component={Playlists} />
        <Route path="/library/liked" component={LikedSongs} />
        <Route path="/search" component={Search} />
        <Route
          exact
          path="/categories/:categoryId"
          component={CategoryPlaylists}
        />
        <Route exact path={"/playlists/:playlistId"} component={Tracks} />
        <Route exact path={"/albums/:albumId"} component={Album} />
        <Route exact path={"/artists/:artistId"} component={Artist} />
        <Route exact path="/" component={LikedSongs} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
