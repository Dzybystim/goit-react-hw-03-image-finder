import React, { Component } from "react";
import { BallTriangle } from  'react-loader-spinner'

import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem"
import {ImageGalleryStyled} from "./ImageGallery.styled"

export default class ImageGallery extends Component {
    state = {
        searchValue: null,
        loading: false,
        error: null
    }
  
componentDidUpdate(prevProps,prevState) {
    const prevName = prevProps.search
    const nextName = this.props.search

    if(prevName !== nextName) {
        
        this.setState({loading: true})
        
        fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=30142714-7b10e34c120f858629a98df8c&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(new Error('По вашему запросу ничего не найдено'))
        })
        .then(data => {if(data.hits.length===0){
            return Promise.reject(new Error('По вашему запросу ничего не найдено'))}
            this.setState({searchValue: data.hits})
        })
        .catch(error => this.setState({error: error}))
        .finally(() => this.setState({loading: false}))
    
    }
}

    render() {
    const {searchValue, loading, error} = this.state

    return <
    <ImageGalleryStyled>
    {error && <h1>{error.message}</h1>}
    {loading && <BallTriangle wrapperClass={{justifyContent: 'center', alignItems: 'center' }} />}
    {searchValue && searchValue.map(value => {
     return <ImageGalleryItem 
     key={value.id} 
     webformatURL={value.webformatURL} 
     largeImageURL= {value.largeImageURL}
     tags= {value.tags}  /> } )}

  </ImageGalleryStyled>}
} 