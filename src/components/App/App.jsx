import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {AppStyled} from './App.styled'
import SearchBar from 'components/SearchBar/SearchBar'
import ImageGallery from 'components/ImageGallery/ImageGallery'


export default class App extends Component {
  state = {
    search: null,
    page: null
    }



////////////////Получаем данные с инпута и записываем в search
onSubmit = (search, page) => {
  this.setState({
    search: search,
    page: page
  })
}


  render() {

  return (
    <AppStyled>
      <SearchBar onSubmit={this.onSubmit}/>
      <ImageGallery search={this.state.search} page={this.state.page}/>

      <ToastContainer />

    </AppStyled>
  );
}}
