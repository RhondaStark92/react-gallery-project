import React, { Component } from 'react';
import './GalleryForm.css';

class GalleryForm extends Component {

 render() {
   return (
       <section className="App-form">
        <h2>Add Gallery Item</h2>

        <form onSubmit={this.props.handleSubmit}>
            <label>Image Path</label>
            <input value={this.props.newGallery.path}
                onChange={this.props.handleChangeFor('path')} />
            <label>Description</label>
            <input value={this.props.newGallery.description}
                onChange={this.props.handleChangeFor('description')} />
            <input type="submit" value="Add Gallery Item" />
        </form>
        
       </section>
   );
 }
}

export default GalleryForm;