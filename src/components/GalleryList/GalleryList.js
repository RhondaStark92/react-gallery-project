import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GalleryItem from '../GalleryItem/GalleryItem';
import PropTypes from 'prop-types';


class GalleryList extends Component {

  render() {

    console.log('this.props in galleryList:', this.props)
    return (
          <Grid container>
          {
            this.props.list.map( gallery =>
              <GalleryItem key={gallery.id} item={gallery} updateLikes={this.props.updateLikes}/>
            )
          }
          </Grid>
    );
  }
}

// This will tell the parent component what functions it must implement to 
// use this component.
GalleryList.propTypes = {
  updateLikes: PropTypes.func.isRequired,
};

export default GalleryList;