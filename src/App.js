import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Main from './components/catalogue/Main';
import List from './components/catalogue/List';
import FixedBar from './components/FixedBar';
import firebase from './components/firebase';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dataArr: [],
      count: 0,
      modalArr: [],
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

  handleClick = (e) => {
    e.preventDefault();
    

      this.setState({
          count: this.state.count + 1,
        });
        
  }



  render() {
    return (
      <Fragment>
        <Header />
        <FixedBar number={this.state.count} />
        <Main>
          <List>
            {this.state.dataArr.map(item => {
              return (
                <li className='col-33 catalogue-item' key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className='item-details'>
                    <h2 className='item-title'>{item.name}</h2>
                    <p className='item-price'>${item.price}.00</p>
                  </div>
                  <div className='row'>
                    <button onClick={this.handleClick} className='btn col-80'>Add to cart</button>
                    <p className='col-20 item-counter'>{this.state.count}</p>
                  </div> 
                </li>
              )
            })}
          </List>
        </Main>
      </Fragment>
    )
  }
}


export default App;
