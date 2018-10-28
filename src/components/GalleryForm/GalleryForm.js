import React, { Component } from 'react';

class GalleryForm extends Component {

 render() {
   return (
     <form onSubmit={this.props.handleSubmit}>
       <label>Image Path</label>
       <input value={this.props.newGallery.path}
           onChange={this.props.handleChangeFor('path')} />
       <label>Description</label>
       <input value={this.props.newGallery.description}
           onChange={this.props.handleChangeFor('description')} />
       <input type="submit" value="Add Gallery Item" />
     </form>
   );
 }
}

export default GalleryForm;