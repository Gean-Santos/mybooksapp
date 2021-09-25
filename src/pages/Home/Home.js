import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Item } from '../../components';

const Home = () => {
    const mock = [
        {
            title: 'O morro dos ventos uivantes',
            Id: 1,
            Author: 'Emily Bronte',
            Year: 2021,
            Synopsis: 'Em O Morro dos Ventos Uivantes as personagens são apresentadas na sua forma mais humana: invejosas, rancorosas, imperfeitas. Longe de trazer heróis, o livro é um clássico que aborda sobre a transformação do caráter humano. A obra conta a história da adoção de Heathcliff'+ 
            'órfão, abandonado e desemparado, pelo sr. Earnshaw',
        },
        {
            title: 'Billy Summers',
            Id: 2,
            Author: 'Stephen King',
            Year: 2021,
            Synopsis: 'Billy Summers é o homem com a arma; um assassino de aluguel e um dos melhores atiradores do mundo. Mas ele tem um critério: só aceita o serviço se o alvo for realmente uma pessoa ruim.'
        },
        {
            title: 'O morro dos ventos uivantes',
            Id: 3,
            Author: 'Emily Bronte',
            Year: 2021,
            Synopsis: 'Em O Morro dos Ventos Uivantes as personagens são apresentadas na sua forma mais humana: invejosas, rancorosas, imperfeitas. Longe de trazer heróis, o livro é um clássico que aborda sobre a transformação do caráter humano. A obra conta a história da adoção de Heathcliff'+ 
            'órfão, abandonado e desemparado, pelo sr. Earnshaw',
        },
        {
            title: 'Billy Summers',
            Id: 4,
            Author: 'Stephen King',
            Year: 2021,
            Synopsis: 'Billy Summers é o homem com a arma; um assassino de aluguel e um dos melhores atiradores do mundo. Mas ele tem um critério: só aceita o serviço se o alvo for realmente uma pessoa ruim.'
        },
    ];
    return(
        <ScrollView style={{display: 'flex', flex: 1,}}>
            {mock.map((livro, index) => (<View style={{padding: 10, width: '100%'}} key={index}><Item item={livro} /></View>))}
        </ScrollView>
    );
};

export default Home;