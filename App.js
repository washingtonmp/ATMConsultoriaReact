

import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'

// import de cenas
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';


export default class App extends Component {
    render(){
      return(

          <Navigator 
            initialRoute={{id: 'CenaPrincipal'}}
            renderScene={(route, navigator) => {
             
              /*Definir a cena com base na rota*/
              if(route.id === 'CenaPrincipal'){
                //exibir cena principal
                return(<CenaPrincipal navigator={navigator}/>);
              }

              if(route.id === 'CenaClientes'){
                //exibir cena de clientes
                return(<CenaClientes navigator={navigator}/>);
              }

              if(route.id === 'CenaContatos'){
                //exibir cena de contatos
                return(<CenaContatos navigator={navigator}/>);
                
              }

              if(route.id === 'CenaEmpresa'){
                //exibir cena da empresa
                return(<CenaEmpresa navigator={navigator}/>);
                
              }

            }}
          />
          
      );
    }
};


