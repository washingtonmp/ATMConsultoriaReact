

import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'

// import de cenas
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';


export default class App extends Component {
    render(){
      return(

          <Navigator 
            
            // definir a rota principal
            initialRoute={{id: 'CenaPrincipal'}}

            // renderizar cenas 
            renderScene={(route, navigator) => {

              switch(route.id){
                case 'CenaPrincipal': return(<CenaPrincipal navigator={navigator}/>);
                case 'CenaClientes': return(<CenaClientes navigator={navigator}/>);
                case 'CenaContatos': return(<CenaContatos navigator={navigator}/>);
                case 'CenaEmpresa': return(<CenaEmpresa navigator={navigator}/>); 
                case 'CenaServicos': return(<CenaServicos navigator={navigator}/>);
                default: return false;
              }

            }}
          />
          
      );
    }
};


