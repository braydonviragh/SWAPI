import React, { Component } from 'react';

class Starship extends Component {

    constructor(props){ 
        super(props);
        this.state = { 
            items: [],
            isLoaded: false,
            search: "",
        }
    }

    componentDidMount() { 
        fetch('http://127.0.0.1:8000/getStarships')
        .then(res => res.json())
        .then(json => {
            this.setState ({
                isLoaded: true,
                items: json,
                search: "",
            })
        })
    };
    updateSearch(event){ 
        this.setState({search: event.target.value.substr(0, 20)});
    }
    
    
    render() {  
        var { isLoaded, items, search } = this.state;
        if(!isLoaded) { 
            return <div className="loading"> Loading...</div>;
        }else { 
            var results = this.state.items.results;
            console.log(results)
            var filteredResults = results.filter(
                (person) => { 
                return person.name.toLowerCase().indexOf(this.state.
                    search.toLowerCase()) !== -1;
            });
            return (
                <div className="p-4">
                <section className="pb-100 pt-2">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-md-2 justify-content-center  d-flex flex-column text-center">
                                <div className="d-flex align-items-start justify-content-center py-4">
                                    <img src="/img/spaceship.png" alt="Spaceship"/>
                                </div>
                                <div className="d-flex align-items-start justify-content-center">
                                    <p className="strong"> Detailed table displaying your favourite starships from every Star Wars Movie. Scroll through and enjoy!        
                                    </p>
                                </div>
                                <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}  placeholder="search..." />
                            </div>
                    <div className="container graph col-md-10">
                    <div className="text-center">
                                <h2>Star Wars Starships</h2>
                                </div>
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Model</th>
                                            <th scope="col">Mass</th>
                                            <th scope="col">Manufacturer</th>
                                            <th scope="col">Cost (in credits)</th>
                                            <th scope="col">Length (meters)</th>
                                            <th scope="col">Max Sppeed</th>
                                            <th scope="col"># of Crew</th>
                                            <th scope="col"># of Passengers</th>
                                            <th scope="col">Cargo Capacity</th>
                                            <th scope="col">Consumables</th>
                                            <th scope="col">Hyper Drive Rating</th>
                                            <th scope="col">MGLT</th>
                                            <th scope="col">Starship Class</th>

                                        </tr>
                                    </thead>
                                    <tbody>                   
                                            {
                                                filteredResults.map(item => (
                                                    <tr> 
                                                        <td> {item.name}</td>
                                                        <td> {item.model}</td>
                                                        <td>{item.manufacturer}</td>
                                                        <td>{item.cost_in_credits}</td>
                                                        <td> {item.length}</td>
                                                        <td>{item.max_atmosphering_speed}</td>
                                                        <td>{item.crew}</td>
                                                        <td> {item.passengers}</td>
                                                        <td> {item.cargo_capacity}</td>
                                                        <td> {item.consumables}</td>
                                                        <td>{item.mass}</td>
                                                        <td>{item.hyperdrive_rating}</td>
                                                        <td> {item.MGLT}</td>
                                                        <td>{item.starship_class}</td>
                                                    </tr>
                                                        ))
                                                    }
                                    </tbody>
                                </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
            );
        }
    }
}

export default Starship
