
import React, { Component } from 'react';
import { StyleSheet,  StatusBar, View, Image, Text } from 'react-native';

// import do componente de navegação
import BarraNavegacao from './BarraNavegacao';

//import das imagens utilizadas 
const detalheEmpresa = require('../imgs/detalhe_empresa.png');


export default class CenaEmpresa extends Component {
    render(){
      return(
        <View>
            <StatusBar backgroundColor= '#CCC'/>
            <BarraNavegacao voltar navigator={this.props.navigator} />

            <View style={styles.cabecalho}>
                <Image source={ detalheEmpresa } />
                <Text style={styles.titulo}>A Empresa</Text>
            </View>

            <View style={styles.detalheEmpresa}>

                <Text style={styles.txtDetalheEmpresa}>ATM Consultoria é uma empresa criada com o intuito de facilitar a vida de nossos clientes. </Text>
                
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
            color: '#EC7148',
            fontSize: 30,
            marginLeft: 10,
            marginTop: 25
        },
        detalheEmpresa: {
            padding: 20,
            marginTop: 20
        },
        txtDetalheEmpresa: {
            fontSize: 18,
            marginLeft: 20
        }
 
});

