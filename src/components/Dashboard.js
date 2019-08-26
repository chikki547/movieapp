import React from 'react';
import './App.css';

import LineGraph from './Graphs/LineGraph'
import BarGraph from './Graphs/BarGraph'
import TopMoviesAllTime from './Graphs/TopMoviesAllTime'
import PieGraph from './Graphs/PieGraph'
import MovieRating from './Graphs/MovieRating';
import TopMovieEachYear from './Graphs/TopMovieEachYear';

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <main className="Dashboard">
                <LineGraph />
                <MovieRating />
                <BarGraph />
                <PieGraph />
                <TopMoviesAllTime />
                <TopMovieEachYear />
            </main>
        )
    }
}
export default Dashboard;
