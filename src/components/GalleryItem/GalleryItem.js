import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GalleryItem.css';

// import Grid from '@material-ui/core/Grid';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';


class GalleryItem extends Component {

    
    constructor(props) {
        super(props);
        this.state = {buttonClicked: false};
      }

    // Called when the submit button is pressed
    handleClick = (event) => {
        this.setState({
            buttonClicked: !this.state.buttonClicked,
          });
    }

    // call updateLikes function in App to update the likes
    handleLoveMe = (event) => {
        this.props.updateLikes(event.currentTarget.value);
    }
 
    render() {

    // display image or description depending on state of click
    let htmlCode;
    if (this.state.buttonClicked) {
        htmlCode = <p>{this.props.item.description}</p>
    } else {
        htmlCode = <p><img src={this.props.item.path} alt={this.props.item.description}/></p>;
    };

    return (
        <div className="container">
            <div className= "fixed" value={this.props.item.id} 
                key={this.props.item.id} onClick={this.handleClick}>
                {htmlCode}
            </div>
            <button value={this.props.item.id} onClick={this.handleLoveMe}>Love Me!</button>
            <p>This has {this.props.item.likes} likes.</p>
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

// This will tell the parent component what functions it must implement to 
// use this component.
GalleryItem.propTypes = {
    updateLikes: PropTypes.func.isRequired,
};

export default GalleryItem;
