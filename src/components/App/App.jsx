import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from 'components/SearchBar/SearchBar'
import ImageGallery from 'components/ImageGallery/ImageGallery'

export default class App extends Component {
  state = {
    search: null
    }

////////////////Получаем данные с инпута и записываем в query
onSubmit = (search) => {
  this.setState({
    search: search
  })
}


  render() {

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SearchBar onSubmit={this.onSubmit}/>
      <ImageGallery search={this.state.search}/>
      <ToastContainer />
    </div>
  );
}}
