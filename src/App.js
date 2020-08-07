import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import WorkersList from './pages/WorkersList.jsx'
import NewWorker from './components/forms/NewWorker.jsx'
import Profile from './components/Profile'
// import { url, opts } from './config'
// import { addWorker } from './mutations'

import './styles/app.css';

const App = () =>{
  // state={
  //   server: 'https://hr-app-server.irvinfiz.now.sh/graph',
  //   profiles: []

  // }

  // async componentDidMount(){
  //   const query = `query{
  //     profiles {
  //       _id
  //       number
  //       firstname
  //       lastname
  //       entry
  //       department
  //       position
  //       area
  //       picture_URL
  //     }
  //   }`

  //   const url = this.state.server;
  //   const opts = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ query })
  //   };
  //   const res = await fetch(url, opts);
  //   const data = await res.json();
  //   console.log(data.data.profiles)
  //   this.setState({profiles: data.data.profiles })
  // }

  // newWorker = async (input) =>{
  //   addWorker.variables = { input }

  //   opts.body = JSON.stringify(addWorker)
  //   const res = await fetch(url, opts);
  //   const data = await res.json();
  //   if(data.errors){
  //     return console.log(data.errors)
  //   } else {
  //     const profile = data.data.newProfile
  //     const profiles = [...this.state.profiles, profile]
  //     return this.setState({profiles})
  //   }
  // }

    return (
      <BrowserRouter>
        <div className="App">
          <div className="Content">
            <Switch>
              <Route path="/" exact component={ props => ( <WorkersList {...props} /> )} />
              <Route path="/employees/new" exact component={ props => ( <NewWorker {...props} /> )} />
              <Route path="/profile" exact component={ props => ( <Profile {...props} /> )} 
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
  
}

export default App;
