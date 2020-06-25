import React, { Component, Fragment } from 'react';
import Header from './components/header/Header';
import Main from './components/catalogue/Main';
import CatalogueList from './components/catalogue/CatalogueList';
import FixedBar from './components/header/FixedBar';
import firebase from './components/firebase';
import CatalogueItem from './components/catalogue/CatalogueItem';
import Footer from './Footer';

import './App.css';

class App extends Component {
  constructor() {
    super();


    this.state = {

      firebaseData: [],
      // Store id property of each cart with individual counter value
      count: {},
      cartCounter: 0,
      // Add selected cart
      modalItems: [
      ],
    }
  }


  // Get data from Firebase database
  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const data = response.val();

      const newState = [];

      for (let item in data) {
        newState.push(data[item]);
      }

      this.setState({
        firebaseData: newState,
      })
    })
  }

  // Event handler for cart click
  handleClick = (id) => {

    // Find if clicked cart ID matches product ID in 'firebaseData' object
    const findId = this.state.firebaseData.find(item => item.id === id);

    // Store a new property (in 'count' object) as matching item ID or '0' 
    let currentCount = this.state.count[findId.id] || 0;

    // Update state
    this.setState({
      // Spread old value and add new value (ID), map over modalCarts to render carts in a 'ModalList'
      modalItems: [
        ...this.state.modalItems, findId,
      ],

      // Spread old id value and update matching id value on click
      count: {
        ...this.state.count,
        [findId.id]: currentCount + 1,
      },

      // Update item count in cart
      cartCounter: this.state.cartCounter + 1,
    })
  }


  render() {
    return (
      <Fragment>
        <div className="overflow-hidden">
          <Header />
          <FixedBar
            cartCounter={this.state.cartCounter}
            count={this.state.count}
            modalCarts={this.state.modalItems} />
          <Main>
            <CatalogueList>
              {this.state.firebaseData
                .map(item => {
                  return (
                    <CatalogueItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      updateCount={() => this.handleClick(item.id)}
                      itemCounter={this.state.count[item.id] || 0}
                    />
                  )
                })}
            </CatalogueList>
          </Main>
        </div>
        <Footer />
      </Fragment>
    )
  }
}


export default App;
