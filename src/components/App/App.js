import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {

  state = {
    newGallery: {
      path: '',
      description: ''
    },
    galleryList: [],
  };

  // Once everything is ready start the processing
  componentDidMount(){
    console.log('getting all students');
    this.getGallery();
  }

  // Update the state for changed values
  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState( {
        newGallery: {
          ...this.state.newGallery,
          [propertyName]: event.target.value
        }
      } );
    }
  }
 
  // Add new gallery item to the database
  addGallery = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/gallery',
      data: this.state.newGallery
    }).then( response => {
      this.getGallery();
      this.setState({
        newGallery: {
          path: '',
          description: ''
        }
      })
    }).catch( error => {
      alert('Error', error);
    })
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
        <section>
         <h2>Add Gallery Item</h2>
         <GalleryForm newGallery={this.state.newGallery}
             handleChangeFor={this.handleChangeFor} 
             handleSubmit={this.addGallery} />
       </section>
        <GalleryList list={this.state.galleryList} updateLikes={this.updateLikes}/>
      </div>
    );
  }
}

export default App;
