// App.js
import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyBZ6c0gneH6mJnOhqTWpyNLbJF5Cn-0euU",
    authDomain: "reacttest-fa9ce.firebaseapp.com",
    databaseURL: "https://reacttest-fa9ce.firebaseio.com",
    projectId: "reacttest-fa9ce",
    storageBucket: "reacttest-fa9ce.appspot.com",
    messagingSenderId: "803816759003"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
      <Header title="Simple Firebase App" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;