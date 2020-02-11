
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
                    
                    {/* Menu Cena Clientes */}
                    <TouchableHighlight
                        underlayColor={'B9C941'}
                        activeOpacity={0.3}
                        onPress={()=>{
                            this.props.navigator.push({id: 'CenaClientes'});
                        }}>
                        <Image style={styles.imgMenu} source={menuCliente} />
                    </TouchableHighlight>

                    {/* Menu cena contatos */}
                    <TouchableHighlight
                        underlayColor={'61BD8C'}
                        activeOpacity={0.3}
                        onPress={()=>{
                            this.props.navigator.push({id: 'CenaContatos'});
                        }}>
                        <Image style={styles.imgMenu} source={menuContato} />
                    </TouchableHighlight>

                </View>

                <View style={styles.secoes}>

                     {/* Menu cena empresa */} 
                     <TouchableHighlight
                        underlayColor={'EC7148'}
                        activeOpacity={0.3}
                        onPress={()=>{
                            this.props.navigator.push({id: 'CenaEmpresa'});
                        }}>
                        <Image style={styles.imgMenu} source={menuEmpresa} />
                    </TouchableHighlight>

                     {/* Menu cena servicos */} 
                     <TouchableHighlight
                        underlayColor={'19D1C8'}
                        activeOpacity={0.3}
                        onPress={()=>{
                            this.props.navigator.push({id: 'CenaServicos'});
                        }}>
                        <Image style={styles.imgMenu} source={menuServico} /> 
                    </TouchableHighlight>

                    

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

