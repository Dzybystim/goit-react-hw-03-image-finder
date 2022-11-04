import React, { Component } from "react";

export default class ImageGallery extends Component {
  
componentDidUpdate(prevProps,prevState) {
    const prevName = prevProps.search
    const nextName = this.props.search

    if(prevName !== nextName) {
        console.log('Запрос поменялся')
        fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=30142714-7b10e34c120f858629a98df8c&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(data => console.log(data))
    }
}

    render() {
    return <ul className="gallery">
    <li>{this.props.search}</li>
  </ul>}
}