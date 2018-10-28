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
    console.log('getting all gallery items');
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
  } // end handleChangeFor
 
  // Add new gallery item to the database
  addGallery = (event) => {
    event.preventDefault();
    
    // Verify path and description
    if (this.state.newGallery.path === '' || this.state.newGallery.description === '') {
      alert('Must enter all information');
      return;
    }
    // Call the router with a POST call
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
  } // end addGallery
 
  // Get the gallery items
  getGallery = () => {
    axios ({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      this.setState({
        galleryList: response.data,
      })
    }).catch( (error) => {
      alert("error", error)
    })
  } // end getGallery

  // Increase number of likes for selected gallery item
  updateLikes = (galleryId) => {
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
  } // end updateLikes

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
  } // end render

} // end App

export default App;
