import React from 'react';
import './App.css';
import MenuAppBar from "./components/MenuAppBar"

import http from "./http";

class App extends React.Component {
  componentDidMount() {
    http.get("/business/api/business/0/").then(res => {
      console.log(res)
    })

    http.get("/content/api/content/?model=page").then(res => {
      console.log(res)
    })
  }

  handleClick() {
    console.log("kurikku")
  }

  render() {
    return (
      <MenuAppBar/>
    );
  }
}

export default App;
