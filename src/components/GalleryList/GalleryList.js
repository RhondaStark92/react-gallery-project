import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class GalleryList extends Component {

 render() {
   return (
        <Grid container>
         {
           this.props.list.map( gallery =>
             <Grid item xs={4} key={gallery.id}>
               {gallery.description}{gallery.path}{gallery.likes}
             </Grid>
           )
         }
        </Grid>
   );
 }
}

export default GalleryList;