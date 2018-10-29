import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './GalleryItem.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

class GalleryItem extends Component {

    state = {buttonClicked: true};

    // Called when the image div is clicked on
    handleClick = (event) => {
        this.setState({
            buttonClicked: !this.state.buttonClicked,
          });
    }

    // call updateLikes function in App to update the likes
    handleLoveMe = (event) => {
        this.props.updateLikes(event.currentTarget.value);
    }

    handleDelete = (event) => {
        this.props.deleteGallery(event.currentTarget.value);
    }
 
    render() {

    return (
        <grid item xs={12} sm={6} lg={4} xl={3}>
        <Card className="galleryItem">
            <CardActionArea>
                <CardContent value={this.props.item.id} onClick={this.handleClick}>
                {/* ternary operator for conditional rendering */}
                <div className="fixed">
                {
                    this.state.buttonClicked ?
                    <img src={this.props.item.path} alt={this.props.item.description} /> :
                    <div>{this.props.item.description}</div>
                }
                </div>
                <p>This has {this.props.item.likes} likes.</p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton aria-label="Love" value={this.props.item.id} 
                    onClick={this.handleLoveMe}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Delete" value={this.props.item.id} 
                    onClick={this.handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
        </grid>

        // <grid container className="container">
        //     <div className= "fixed" value={this.props.item.id} 
        //         key={this.props.item.id} onClick={this.handleClick}>
        //         {htmlCode}
        //     </div>
        //     <button value={this.props.item.id} onClick={this.handleLoveMe}>Love Me!</button>
        //     <button value={this.props.item.id} onClick={this.handleDelete}>Delete</button>
        //     <p>This has {this.props.item.likes} likes.</p>
        // </grid>
        // <GridList key={this.props.item.id} cols={3} cellHeight={100}>
        //     <GridListTile>
        //         <img src={this.props.item.path} alt={this.props.item.description} />
        //     </GridListTile>
        //     {this.props.item.description}{this.props.item.path}{this.props.item.likes}
        // </GridList>
    );
    }
}

// This will tell the parent component what functions it must implement to 
// use this component.
// GalleryItem.propTypes = {
//     updateLikes: PropTypes.func.isRequired,
//     deleteGallery: PropTypes.func.isRequired,
// };

export default GalleryItem;
