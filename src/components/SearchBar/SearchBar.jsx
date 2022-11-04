import { toast } from 'react-toastify';
import React, { Component } from "react";

export default class SearchBar extends Component { 
    state = {
     search: ""
    }

///////////////////Функция которая записывает в стейт данные введенные в инпут
    handleInputChange = event => {
        this.setState({
          [event.currentTarget.name]: event.currentTarget.value
        })
      }

////////////////////////////При сабмите передает данные с инпута в АРР
onSubmitSearch = event => {
    event.preventDefault();
if(this.state.search.trim() === ""){
    toast.warn('Введите название фото что вы ищете')
    return 
}
    this.props.onSubmit(this.state.search)
    this.reset()
}

////////////////////Функция обновляет до начального состояния инпут ввода
reset = () => {
    this.setState({
        search: ""
    })
  }

    render() {

    return <header className="searchbar">
    <form className="form" onSubmit={this.onSubmitSearch}>
      <button type="submit" className="button" >
        <span className="button-label">Search</span>
      </button>
  
      <input
        className="input"
        type="text"
        name="search"
        onChange={this.handleInputChange}
        value={this.state.search}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>}
}