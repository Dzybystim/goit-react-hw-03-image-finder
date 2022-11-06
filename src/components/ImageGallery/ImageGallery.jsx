import React, { Component } from "react";

import {ImageGalleryRejectedView} from "./ImageGalleryRejectedView/ImageGalleryRejectedView"
import {ImageGalleryResolvedView} from "./ImageGalleryResolvedView/ImageGalleryResolvedView"
import {ImageGalleryPendingView} from "./ImageGalleryPendingView/ImageGalleryPendingView"
import {pixabayApi} from "../../services/pixabay.api"

export default class ImageGallery extends Component {
    state = {
        searchValue: null,
        error: null,
        status: 'idle'
    }
  
componentDidUpdate(prevProps,prevState) {
    const prevName = prevProps.search
    const nextName = this.props.search

    if(prevName !== nextName) {
        
        this.setState({status: 'pending' })

        pixabayApi(nextName)
        .then(data => {if(data.hits.length===0){
            return Promise.reject(new Error('По вашему запросу ничего не найдено'))}
            this.setState({searchValue: data.hits, status: 'resolved'})
        })
        .catch(error => this.setState({error: error, status: 'rejected'}))
         
    }
}

    render() {
    const {searchValue, error, status} = this.state

    if(status==='idle'){
     return
    }

    if(status==='pending'){
        return <ImageGalleryPendingView />
    }

    if(status==='rejected'){
        return <ImageGalleryRejectedView 
        message={error.message} />
    }

    if(status==='resolved'){
        return <ImageGalleryResolvedView 
        searchValue={searchValue}
        />
    }

 }
} 