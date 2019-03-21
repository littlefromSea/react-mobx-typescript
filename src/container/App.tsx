import React, { Suspense } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'mobx-react'

import stores from '../store';
import routes from '../router/index';
import LoadingHomePage from '../components/Loading/loading';


  class App extends React.Component{
  public render() {
    return(
      <Provider {...stores}>
       <Router>
        <Suspense fallback={<LoadingHomePage />}>       
            {routes()}
        </Suspense>
      </Router>
    </Provider>
    )
  } 
}

export default App;
