import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

 render() {
   return (
        <Grid container>
         {
           this.props.list.map( gallery =>
             <GalleryItem key={gallery.id} clickedOn={'false'} item={gallery}/>
           )
         }
        </Grid>
   );
 }
}

export default GalleryList;