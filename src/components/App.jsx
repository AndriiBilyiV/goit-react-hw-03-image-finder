import { Component } from "react";
import axios from "axios";
import { Searchbar } from "./Searchbar/Searchbar";
axios.defaults.baseURL ='https://pixabay.com/api/'

export class App extends Component {
  state = {
  }
  render() {
    return (
      <Searchbar />
    )
  }
}