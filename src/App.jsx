import React from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./Components/ImagesDisplay/SearchBar";
import ImageList from "./Components/ImagesDisplay/ImageList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  async handleSearchSubmit(term) {
    const { data } = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: data.results });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
