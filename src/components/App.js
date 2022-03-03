import React from 'react';
import Table from './Table';

class App extends React.Component {
  state = {
    characters: [
      {
        name: 'John',
        job: 'Smithery',
      },
      {
        name: 'Clyde',
        job: 'Carpenter',
      },
      {
        name: 'Wanda',
        job: 'Engineerr',
      },
      {
        name: 'Claudia',
        job: 'Manager',
      },
    ],
  };
  removeCharacter = i => {
    const {characters} = this.state;
    this.setState({
      characters: characters.filter((char, j) => {
          return i !== j;
    }),
  });
  };
  render() {
    const {characters} = this.state;
    return (
      <div className="container">
        <Table characters={characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

  export default App;
