import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import toast, { Toaster } from 'react-hot-toast';
import { fetchColletion, perPage } from "./api";
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
    isLoading: false,
    showBtn: false
  }
  async componentDidUpdate(prevProps, prevState) {
 
      
    if (prevState.request !== this.state.request ||
      prevState.page !== this.state.page) {
      const data = {
        page: this.state.page,
        query: this.state.request
      }
      this.setState({
        isLoading: true
      })
      try {
        const result = await fetchColletion(data)
        
        const hits = result.hits;
        const totalHits = result.totalHits;
        if (hits.length === 0) {
          notify()
        } else {
          this.setState({
            collection: [...this.state.collection, ...hits],
            showBtn: (this.state.page<Math.ceil(totalHits/perPage)) ? true : false
          });
        }
      } catch (err) {
        alert(err)
      } finally {
        this.setState({
            isLoading: false
          })
      }
    }
  }
    takeRequest = (req) => {
      this.setState({
        request: req,
        collection: [],
        page: 1
      })
    }
    nextPage = () => {
      this.setState(prevState => ({ page: prevState.page + 1 }))
    }
    render() {
      return (
        <>
          <Searchbar onSubmit={this.takeRequest} />
          <Toaster />
          {this.state.collection.length ?
            <>
              <ImageGallery collection={this.state.collection} />
              {this.state.showBtn ?
                <Button handleClick={this.nextPage} />
                : null
              }
            </>
            : null
          }
          {this.state.isLoading ?
            <Loader /> : null}
        </>
      )
    }
  }
