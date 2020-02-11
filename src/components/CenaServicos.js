
import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Image, Text } from 'react-native';

// import do componente de navegação
import BarraNavegacao from './BarraNavegacao';

//import das imagens utilizadas 
const detalheServicos = require('../imgs/detalhe_servico.png');


export default class CenaServicos extends Component {
    render(){
      return(
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <StatusBar backgroundColor= '#19D1C8'/>
            <BarraNavegacao corFundo='#19D1C8' voltar navigator={this.props.navigator} />
            
            <View style={styles.cabecalho}>
                <Image source={ detalheServicos } />
                <Text style={styles.titulo}>Nossos Serviços</Text>
            </View>

            <View style={styles.detalheServicos}>
                <Text style={styles.txtDetalheServicos}>- Consultoria. </Text>
                <Text style={styles.txtDetalheServicos}>- Processos. </Text>
                <Text style={styles.txtDetalheServicos}>- Acompanhamento de projetos. </Text>
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
            color: '#19D1C8',
            fontSize: 30,
            marginLeft: 10,
            marginTop: 25
        },
        detalheServicos: {
            padding: 20,
            marginTop: 20
        },
        txtDetalheServicos: {
            fontSize: 18,
            marginLeft: 20
        }
 
});

