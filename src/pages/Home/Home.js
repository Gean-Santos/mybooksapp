import React from 'react';
import { View, SafeAreaView, ScrollView, TextInput, Alert, Image } from 'react-native';
import { Item } from '../../components';

const Home = () => {
    const mock = [
        {
            title: 'O morro dos ventos uivantes',
            Id: 1,
            Author: 'Emily Bronte',
            Year: 2021,
            Synopsis: 'Em O Morro dos Ventos Uivantes as personagens são apresentadas na sua forma mais humana: invejosas, rancorosas, imperfeitas. Longe de trazer heróis, o livro é um clássico que aborda sobre a transformação do caráter humano. A obra conta a história da adoção de Heathcliff'+ 
            ' órfão, abandonado e desemparado, pelo sr. Earnshaw',
            url:'https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1399292-1000-1000/954558.jpg?v=637641097503770000'
        },
        {
            title: 'Billy Summers',
            Id: 2,
            Author: 'Stephen King',
            Year: 2021,
            Synopsis: 'Billy Summers é o homem com a arma; um assassino de aluguel e um dos melhores atiradores do mundo. Mas ele tem um critério: só aceita o serviço se o alvo for realmente uma pessoa ruim.',
            url: 'https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1366189-1000-1000/933537.jpg?v=637484021498100000'
        },
        {
            title: 'O morro dos ventos uivantes',
            Id: 3,
            Author: 'Emily Bronte',
            Year: 2021,
            Synopsis: 'Em O Morro dos Ventos Uivantes as personagens são apresentadas na sua forma mais humana: invejosas, rancorosas, imperfeitas. Longe de trazer heróis, o livro é um clássico que aborda sobre a transformação do caráter humano. A obra conta a história da adoção de Heathcliff'+ 
            ' órfão, abandonado e desemparado, pelo sr. Earnshaw',
            url:'https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1399292-1000-1000/954558.jpg?v=637641097503770000'
        },
        {
            title: 'Billy Summers',
            Id: 4,
            Author: 'Stephen King',
            Year: 2021,
            Synopsis: 'Billy Summers é o homem com a arma; um assassino de aluguel e um dos melhores atiradores do mundo. Mas ele tem um critério: só aceita o serviço se o alvo for realmente uma pessoa ruim.',
            url: 'https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1366189-1000-1000/933537.jpg?v=637484021498100000'
        },
        {
            title: 'Gatinhos Temperamentais',
            Id: 5,
            Author: 'Richard Henrique',
            Year: 2021,
            Synopsis: 'Richard Henrique é um gatinho muito temperamental, e vai mostrar como é ser tão lindo e cheinho',
            url: 'https://user-images.githubusercontent.com/37232748/134752470-85b65c9b-b909-49f4-98da-65c085b785f3.jpeg'
        },
    ];
    const vaiPorra = (sinopsys, title) => {Alert.alert(title, sinopsys)}
    return(
        <SafeAreaView style={{display: 'flex', flex: 1, backgroundColor:'#FFF'}}>
            <View style={{width:'100%', display: 'flex', alignItems: 'center'}}>
                <Image 
                    source={{uri: 'https://user-images.githubusercontent.com/37232748/134752470-85b65c9b-b909-49f4-98da-65c085b785f3.jpeg'}}
                    style={{height: 100, width: 150, display: 'flex', margin:10}}
                />
            </View>
            
            <TextInput  style={{borderColor: 'blue', borderWidth: 2,padding: 10, margin: 10, borderRadius: 10}}/>
            <ScrollView>
                <View>
                    {mock.map((livro, index) => (<View style={{padding: 5, width: '100%',}} key={index}><Item item={livro} onClick={() => vaiPorra(livro.Synopsis, livro.title)} /></View>))}
                </View>
            </ScrollView>
        </SafeAreaView>
        
    );
};

export default Home;