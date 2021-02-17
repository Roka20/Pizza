import React ,{Component} from 'react' ;
import Header from './Component/Header';
import About from './Component/About';
import Shop from './Component/Shop';
import Menu from './Component/Menu' ;
import Clients from './Component/Clients';
import Prices from './Component/Prices';
import Footer from './Component/Footer';
import CopyRights from './Component/CopyRights';
import  './App.css'; 


class App extends Component {
  render(){
  return (
    <div >
     <Header/>
     <About/>
     <Shop/>
     <Menu/>
     <Clients/>
     <Prices/>
     <Footer/>
     <CopyRights/>
    </div>
  ); }
}

export default App;
