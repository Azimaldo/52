import React, { Component } from 'react';
import Numbers from './Numbers';
import './App.css';

class App extends Component {
    state = {
        numbers: []
    };

randomizer = (event) => {

    event.preventDefault();
    const tmpArr = [];
    let  stateNumbers = [...this.state.numbers];

    for (let i = 0; i < 6; i++) {
        tmpArr.push(Math.floor(Math.random() * 31) + 5);
    }

    tmpArr.sort();
    stateNumbers = [...tmpArr];
    this.setState({numbers: stateNumbers});
};

render() {
    return (
        <div className="App">
            <button onClick={this.randomizer}>New numbers</button>
            <ul id="Menu">
                {this.state.numbers.map(num => {
                        console.log(num);
                        return <Numbers num={num} />;
                    }
                )}
            </ul>
        </div>
    );
}
}

export default App;


// state = {
//     id: '',
//     numbers: []
// };
//
// randomizer = (event) => {
//
//     event.preventDefault();
//     const tmpArr = [];
//     let  stateNumbers = [...this.state.numbers];
//
//     for (let i = 0; i < 6; i++) {
//         tmpArr.push(Math.floor(Math.random() * 31) + 5);
//     }
//
//     tmpArr.sort();
//     stateNumbers = [...tmpArr];
//     this.setState({numbers: stateNumbers});
// };
//
// render() {
//     return (
//         <div className="App">
//             <button onClick={this.randomizer}>New numbers</button>
//             <ul>
//                 {this.state.numbers.map(num => {
//                         console.log(num);
//                         return <Numbers num={num} />;
//                     }
//                 )}
//             </ul>
//         </div>
//     );
// }