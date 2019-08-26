import React from 'react';
import {PieChart, Pie, Tooltip} from 'recharts'


class PieGraph extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/Demo/genre")
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
        // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8042','#0088FE', '#00C49F', '#FFBB28', '#FF8042']
        return(
            
            
            <div className="graphs">

                <PieChart width={550} height={540}>
                    <Pie data={data} 
                    dataKey="genreCount" 
                    nameKey="genre" cx="50%" cy="50%" 
                    outerRadius={150} 
                    fill="#8884d8" 
                    labelLine />
                  
                    <Tooltip />
                    {/* <Legend /> */}
                </PieChart> 
                Number of movies released in each genre
            </div>
        
            
        );
    }
}
export default PieGraph;