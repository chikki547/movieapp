import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';


class MovieRating extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/Demo/rating")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    items:result
                })
            })
            .catch((e)=>alert(e))
    }
    render() {
        var { items } = this.state
        var data=[]
        var l = items['length']
        for(var i=0;i<l;i++){
            data.push(items[i])
        }
        return(
            
            <div className="graphs">
                <BarChart width={550} height={300} data={data}>
                    <XAxis dataKey="rating"/>
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Bar name="count of movies of given rating" type="monotone" dataKey="movieCount" fill="#8884d8" />
                </BarChart>
                rating based count of movies from 1 to 10
            </div>
            
        );
    }
}
export default MovieRating;