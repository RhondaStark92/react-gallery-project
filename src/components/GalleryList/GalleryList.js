import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GalleryItem from '../GalleryItem/GalleryItem';
// import PropTypes from 'prop-types';


class GalleryList extends Component {

  render() {
    return (
      <Grid container spacing={24} style={{padding: 24}} justify="center">
        {
          this.props.list.map( gallery =>
            <GalleryItem key={gallery.id} item={gallery} updateLikes={this.props.updateLikes}
              deleteGallery={this.props.deleteGallery}/>
          )
        }
      </Grid>
    );
  } // end render
} // end GalleryList

// This will tell the parent component what functions it must implement to 
// use this component.
// GalleryList.propTypes = {
//   updateLikes: PropTypes.func.isRequired,
//   deleteGallery: PropTypes.func.isRequired,
// };

export default GalleryList;