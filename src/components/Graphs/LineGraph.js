import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
class LineGraph extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/Demo/month")
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
        for(var i=0;i<12;i++){
            data.push(items[i])
        }
        return (
            
            <div className="graphs">

                <LineChart width={550} height={300} data={data}>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                </LineChart>
                Number of movies released in each month for last 5 year                

            </div>


        );
    }
}
export default LineGraph;