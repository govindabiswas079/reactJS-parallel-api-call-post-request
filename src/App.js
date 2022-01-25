import React from 'react';
import { Add, List } from './component';
import { Switch, Route } from 'react-router-dom';

const App = () => {
     return (
          <div>
               <h3 style={{ textAlign: 'center' }}>React</h3>
               <Switch>
                    <Route exact path="/" component={Add} />
                    <Route exact path="/list" component={List} />
               </Switch>
          </div>
     )
}

export default App
