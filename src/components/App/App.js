import React, { Component } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import NavBar from '../Navbar.js/Navbar'
import 'typeface-roboto';

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

  // delete gallery item from database
  deleteGallery = (galleryId) => {
    if (window.confirm("Are you sure")) {
      // DELETE call to remove the gallery item
      axios ({
        method: 'DELETE',
        url: 'gallery/' + galleryId,
        data: {}
      }).then((response) => {
        this.getGallery();
      }).catch( (error) => {
        alert("error", error)
      })
    }
  } // end deleteGallery

  // Render the DOM
  render() {
    return (
      // <Grid container alignItems="center"
      <div className="App">
        <CssBaseline />
        <NavBar/>
        <GalleryForm newGallery={this.state.newGallery}
            handleChangeFor={this.handleChangeFor} 
            handleSubmit={this.addGallery} />
        <GalleryList list={this.state.galleryList} updateLikes={this.updateLikes}
            deleteGallery={this.deleteGallery}/>
     </div>
    );
  } // end render

} // end App

export default App;
