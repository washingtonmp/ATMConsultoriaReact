
import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Image, TouchableHighlight } from 'react-native';

// import do componente de navegação
import BarraNavegacao from './BarraNavegacao';

//import das imagens utilizadas 
const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');


export default class CenaPrincipal extends Component {
    render(){
      return(
        <View>
            <StatusBar backgroundColor= '#CCC'/>
            <BarraNavegacao />


            <View style={styles.logo}>
                <Image source={logo} />
            </View>

            <View style={styles.menus}>

                <View style={styles.secoes}>
                    
                    <TouchableHighlight
                      onPress={()=>{
                          this.props.navigator.push({id: 'CenaClientes'});
                      }}>
                        <Image style={styles.imgMenu} source={menuCliente} />
                    </TouchableHighlight>

                    <TouchableHighlight
                      onPress={()=>{
                          this.props.navigator.push({id: 'CenaContatos'});
                      }}>
                        <Image style={styles.imgMenu} source={menuContato} />
                    </TouchableHighlight>

                </View>

                <View style={styles.secoes}>

                    <TouchableHighlight
                      onPress={()=>{
                          this.props.navigator.push({id: 'CenaEmpresa'});
                      }}>
                        <Image style={styles.imgMenu} source={menuEmpresa} /> />
                    </TouchableHighlight>

                    
                    <Image style={styles.imgMenu} source={menuServico} /> 
                </View>

            </View>

         
                
        </View>
              
      );
    }
};

const styles = StyleSheet.create({
        logo: { 
            marginTop: 30,
            alignItems:'center'  
        },
        menus: {
           alignItems:  "center"
        },
        secoes: {
            flexDirection: 'row'
        },
        imgMenu: {
            margin: 15
        }
 
});

