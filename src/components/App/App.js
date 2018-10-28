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

  // Increase number of likes for selected gallery item
  updateLikes = (galleryId) => {
    console.log ('on the app side', galleryId, '/like/:' + {galleryId});
    // PUT call to update the likes
    axios ({
      method: 'PUT',
      url: 'gallery/like/' + galleryId,
      data: {}
    }).then((response) => {
      console.log('after PUT this is the response', response);
      this.getGallery();
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
        <GalleryList list={this.state.galleryList} updateLikes={this.updateLikes}/>
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
