import React, { Component, Fragment } from 'react';
import Header from './components/header/Header';
import Main from './components/catalogue/Main';
import CatalogueList from './components/catalogue/CatalogueList';
import FixedBar from './components/header/FixedBar';
import firebase from './components/firebase';
import CatalogueItem from './components/catalogue/CatalogueItem';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dataArr: [],
      count: {},
      cartCounter: 0,
      modalArr: [
      ],
    }
  }


  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const data = response.val();

      const newState = [];

      for (let item in data) {
        newState.push(data[item]);
      }

      this.setState({
        dataArr: newState,
      })
    })
  }

  handleClick = (id) => {
    const newItem = this.state.dataArr.find(item => item.id === id);

    let currentCount = this.state.count[newItem.id] || 0;


    this.setState({
      modalArr: [...this.state.modalArr, newItem],
      count: { 
        ...this.state.count, 
        [newItem.id]: currentCount + 1 
      },

      cartCounter: this.state.cartCounter + 1,
    })
  }



  render() {
    return (
      <Fragment>
        <Header />
        <FixedBar totalCounter={this.state.cartCounter} count={this.state.count} items={this.state.modalArr}  />
        <Main>
          <CatalogueList>
            {this.state.dataArr.map(item => {
              return (
                //Created a separate item component
                <CatalogueItem key={item.id} id={item.id} name={item.name} price={item.price} image={item.image}  updateCount={() => this.handleClick(item.id)} itemCounter={this.state.count[item.id] || 0} />
              )
            })}
          </CatalogueList>
        </Main>
      </Fragment>
    )
  }
}


export default App;
