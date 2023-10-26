import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import toast, { Toaster } from 'react-hot-toast';
import { fetchColletion, options } from "./api";
import { Loader } from "./Loader/Loader";




const notify = () => toast('Sorry, there is`n photo for your request',{
  style: {
     background: 'red',
  },
});



export class App extends Component {
  state = {
    request: '',
    collection: [],
    page: 1,
    isLoading: false
  }
  async componentDidUpdate(prevProps, prevState) {
 
      
    if (prevState.request !== this.state.request) {
      options.params.q = this.state.request;
      options.params.page = "1";
      this.setState({
        isLoading: true,
        collection: []
      })
      try {
        const result = await fetchColletion(options);
        this.setState({
          collection: result,
          isLoading: false
        });
        if (result.length === 0) {
          notify()
        }
      } catch (err) {
        alert(err)
      } 
      }
    
    if (prevState.page !== this.state.page) {
      options.params.page = this.state.page;
      this.setState({ isLoading: true })
      try {
        const result = await fetchColletion(options);
        this.setState({
          collection: [...this.state.collection, ...result],
          isLoading: false
        })
      } catch (err) {
        alert(err)
      } 
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
          {this.state.collection.length ?
          <>
          <ImageGallery collection={this.state.collection} />
            <Button handleClick={this.nextPage} />
            </>
          : null
        }
        {this.state.isLoading ?
          <Loader /> : null}
      </>
    )
  }
}
