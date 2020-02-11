
import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Image, Text } from 'react-native';

// import do componente de navegação
import BarraNavegacao from './BarraNavegacao';

//import das imagens utilizadas 
const detalheContatos = require('../imgs/detalhe_contato.png');


export default class CenaContatos extends Component {
    render(){
      return(
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <StatusBar backgroundColor= '#61BD8C'/>
            <BarraNavegacao corFundo='#61BD8C' voltar navigator={this.props.navigator} />

            <View style={styles.cabecalho}>
                <Image source={ detalheContatos } />
                <Text style={styles.titulo}>Contatos</Text>
            </View>

            <View style={styles.detalheContatos}>
                <Text style={styles.txtDetalheContatos}>TEL: (11) 1234 1234</Text>
                <Text style={styles.txtDetalheContatos}>CEL: (11) 91234 1234</Text>
                <Text style={styles.txtDetalheContatos}>EMAIL: contato@atmconsultoria.com</Text>
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
            color: '#61BD8C',
            fontSize: 30,
            marginLeft: 10,
            marginTop: 25
        },
        detalheContatos: {
            padding: 20,
            marginTop: 20
        },
        txtDetalheContatos: {
            fontSize: 18,
            marginLeft: 20
        }
 
});

