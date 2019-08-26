import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from 'recharts';
import data from "./data"

class BarGraph extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/Demo/lang")
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
        var all_data=[]
        var l = items['length']
        for(var i=0;i<l;i++){
            all_data.push(items[i])
        }
        all_data.sort(function(a,b){
            return a.countLang - b.countLang
        });
        for(var j = l-1; j > l-20 ;j--)
        {
            data.push(all_data[j])
        }
        data.push({'language':'others','count':0,'countLang':0})
        for(var k =0 ;k < l-20; k++)
        {
            data[19]['countLang'] += all_data[k]['countLang']
        }
        
        return(
            
            <div className="graphs">
                <BarChart width={1160} height={300} data={data}>
                    <XAxis dataKey="language"/>
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Bar name="count  of movies in language" type="monotone" dataKey="countLang" fill="#8884d8" />
                </BarChart>
                Number of movies released in each language
            </div>
            
        );
    }
}
export default BarGraph;