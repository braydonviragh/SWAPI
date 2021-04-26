import React, { Component } from 'react';

class Planet extends Component {

    constructor(props){ 
        super(props);
        this.state = { 
            items: [],
            isLoaded: false,
            search: "",
        }
    }

    componentDidMount() { 
        fetch('http://127.0.0.1:8000/getPlanets')
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
        }else  { 
            var results = this.state.items.results;
            console.log(results)
            var filteredResults = results.filter(
                (planet) => { 
                return planet.name.toLowerCase().indexOf(this.state.
                    search.toLowerCase()) !== -1;
            }
            );

            return (
                <div className="p-5">
                    <section className="pb-100 pt-2">
                        <div className="container">
                            <div className="row align-items-start">
                        <div className="container graph col-md-10">
                        <div className="text-center">
                            <h2>Planets from Star Wars</h2>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Rotational Period</th>
                                        <th scope="col">Orbital Period</th>
                                        <th scope="col">Climate</th>
                                        <th scope="col">Gravity</th>
                                        <th scope="col">Terrain</th>
                                        <th scope="col">Surface Water</th>
                                        <th scope="col">Population</th> 
                                    </tr>
                            </thead>
                            <tbody>                   
                                {
                                    filteredResults.map(item => (
                                    <tr> 
                                        <td> {item.name}</td>
                                        <td> {item.rotation_period}</td>
                                        <td>{item.orbital_period}</td>
                                        <td>{item.climate}</td>
                                        <td>{item.gravity}</td>
                                        <td>{item.terrain}</td>
                                        <td>{item.surface_water}</td>
                                        <td>{item.population}</td>
                                    </tr>
                                            ))
                                }
                            </tbody>
                        </table>
                        </div>
                        <div className="col-md-2 justify-content-center  d-flex flex-column text-center">
                                    <div className="d-flex align-items-start justify-content-center py-4">
                                        <img src="/img/planet.png" alt="Planet"/>
                                    </div>
                                    <div className="d-flex align-items-start justify-content-center">
                                        <p className="strong"> Detailed table displaying your favourite planets from every Star Wars Movie. Scroll through and enjoy!        
                                        </p>
                                    </div>
                                    <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}  placeholder="search..." />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        );
        }
    }
}

export default Planet
