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

    // 
    constructor(props) {
        super(props);
        this.state = {buttonClicked: false};
      }

    // Called when the submit button is pressed
    handleClick = (event) => {
        // console.log('in handle click event', this.state.buttonClicked);
        this.setState({
            buttonClicked: !this.state.buttonClicked,
          });
    }
 
    render() {

    let htmlCode;
    if (this.state.buttonClicked) {
        htmlCode = <div>
                        <p>{this.props.item.description}</p>
                        <p>This has {this.props.item.likes} likes.</p>
                    </div>
    } else {
        htmlCode = <div>
                        <p><img src={this.props.item.path} alt={this.props.item.description}/></p>
                        <p>This has {this.props.item.likes} likes.</p>            
                    </div>;
    };

    return (
        <div className="container" key={this.props.item.id} onClick={this.handleClick}>
            <div>{htmlCode}</div>
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