import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';


class GalleryItem extends Component {

 render() {
   return (
       <div className="container">
           <div>
               <p><img src={this.props.item.path} alt={this.props.item.description}/></p>
               <p>{this.props.item.description}</p>
               <p>This has {this.props.item.likes} likes.</p>
           </div>
       </div>
    // <GridList key={this.props.item.id} cols={3} cellHeight={100}>
    //     <GridListTile>
    //         <img src={this.props.item.path} alt={this.props.item.description} />
    //     </GridListTile>
    //     {this.props.item.description}{this.props.item.path}{this.props.item.likes}
    // </GridList>
   );
 }
}

export default GalleryItem;