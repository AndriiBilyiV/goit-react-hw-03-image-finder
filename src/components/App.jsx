import { Component } from "react";
import axios from "axios";
import { Searchbar } from "./Searchbar/Searchbar";
import { pixabayKey } from "./pixabayKey";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import toast, { Toaster } from 'react-hot-toast';
import { ProgressBar } from "react-loader-spinner";
import { theme } from "./theme";


axios.defaults.baseURL = 'https://pixabay.com/api/'

const notify = () => toast('Sorry, there is`n photo for your request',{
  style: {
     background: 'red',
  },
});

const options = {
  params: {
    key: pixabayKey,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    per_page: "12",
    page: "1",
    q: ""
  }
}


export class App extends Component {
  state = {
    request: '',
    collection: [],
    page: 1,
    isLoading: false
  }
  async componentDidUpdate(prevProps, prevState) {
    if (!prevState.isLoading) {
      console.log(4)
      this.setState({ isLoading: true })
    }
    if (prevState.request !== this.state.request) {
      options.params.q = this.state.request;
      options.params.page = "1";
     
      const result = await axios.get('', options)
        .then(resp => resp.data.hits)
        .catch(err => alert(err))
        .finally(this.setState({isLoading: false}));
        if (result.length === 0) {
        notify()
      }
      this.setState({ collection: result })
      this.setState({isLoading: false})
    }
    if (prevState.page !== this.state.page) {
      options.params.page = this.state.page;
      
      const result = await axios.get('', options)
        .then(resp => resp.data.hits)
        .catch(err => alert(err));
      this.setState({collection: [...this.state.collection, ...result]})
    }
  }
  takeRequest = (req) => {
    this.setState({request: req})
  }
  nextPage = () => {
    this.setState({page: this.state.page + 1})
  }
  render() {
    return (
      <>
        
        <Searchbar onSubmit={this.takeRequest} />
        <Toaster />
        {this.state.isLoading ?
          <ProgressBar
            height="300"
           width="400"
            ariaLabel="progress-bar-loading"
           wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = {theme.colors.glacier}
            barColor = {theme.colors.blueIce}
          />  : this.state.collection.length ?
          <>
          <ImageGallery collection={this.state.collection} />
            <Button handleClick={this.nextPage} />
            </>
          : <div></div>
        }
        
        
       
      
      </>
    )
  }
}