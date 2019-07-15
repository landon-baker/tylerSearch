import React from 'react';
import Axios from 'axios';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            input: '', //current state of search bar
            items: [], //names of items 
            item: {} //specific item that needs to be rendered
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.preventDefault();
        //need to compare realtime keystrokes to filter thru names
        const names = this.state.items.map((item) => item.name);
        this.setState({ input: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('productChanged', {
            detail: {
              id: this.state.input
            }
        }));
        //when ill render the page to the item thats clicked, or the exact item
    }

    componentWillMount(){
        // Axios.get('http://localhost:3001/items')
        // .then(response => {
        // this.setState({ items: response.data })
        // })
        // .catch(err => console.log('ERR', err));
    }

    componentDidMount() {
        // document.addEventListener('productChanged', e => console.log('from search ', e.detail.id));
    }

    render(){
        return(
            <div>
                <h1>Search</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <button>search</button>
                </form>
            </div>
        )
    }
}

export default App;