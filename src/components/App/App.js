import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryList: [],
  };

  // Once everything is ready start the processing
  componentDidMount(){
    console.log('getting all students');
    this.getGallery();
  }

  // Get the gallery items
  getGallery = () => {
    axios ({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('response', response);
      this.setState({
        galleryList: response.data,
      })
    }).catch( (error) => {
      alert("error", error)
    })
  }

  // Render the DOM
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList list={this.state.galleryList}/>
        {/* <p>Gallery goes here</p>
        <ul>
          {this.state.galleryList.map(gallery =>
            <li key={gallery.id}>{gallery.description}{gallery.likes}<img src={gallery.path}/></li>
          )}
        </ul> */}
      </div>
    );
  }
}

export default App;
