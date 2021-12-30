import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

import Header from './components/Header'


const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
                <Route exact path="/favoritos" component={Favoritos}/>
                <Route path="*" component={Erro}/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;