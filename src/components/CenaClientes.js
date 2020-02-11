
import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Image, Text } from 'react-native';

// import do componente de navegação
import BarraNavegacao from './BarraNavegacao';

//import das imagens utilizadas 
const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');




export default class CenaClientes extends Component {
    render(){
      return(
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <StatusBar backgroundColor= '#B9C941'/>
            <BarraNavegacao corFundo='#B9C941' voltar navigator={this.props.navigator} />

            <View style={styles.cabecalho}>
                <Image source={ detalheClientes } />
                <Text style={styles.titulo}>Nossos clientes</Text>
            </View>

            <View style={styles.detalheCliente}>
                <Image source={ cliente1 } />
                <Text style={styles.txtDetalheCliente}>WMP Tecnologies</Text>
            </View>

            <View style={styles.detalheCliente}>
                <Image source={ cliente2 } />
                <Text style={styles.txtDetalheCliente}>PSMP Tecnologies</Text>
            </View>
            
            
            

        </View>
              
      );
    }
};

const styles = StyleSheet.create({
        cabecalho: { 
            marginTop: 20,
            flexDirection: 'row' 
        },
        titulo: {
            color: '#B9C941',
            fontSize: 30,
            marginLeft: 10,
            marginTop: 25
        },
        detalheCliente: {
            padding: 20,
            marginTop: 10
        },
        txtDetalheCliente: {
            fontSize: 18,
            marginLeft: 20
        }
 
});

