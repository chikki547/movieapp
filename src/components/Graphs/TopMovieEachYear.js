import React from 'react';



class TopMovieEachYear extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/Demo/movie/year")
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
        var year1=[]
        var year2=[]
        var l = items['length']
        for(var i=0;i<l;i++){
            if(items[i]['year']=='2015')
            year1.push(items[i])
            if(items[i]['year']=='2016')
            year2.push(items[i])
        }
       
        return(
            
            <div className="movie">
                
                <div className="list">
                    Top Movies of 2015
                    {year1.map(item => (
                    
                        <li key={item.title}>
                            {item.title}
                        </li>
                    ))}
                </div>
                <div className="list">
                    Top Movies of 2016
                    {year2.map(item => (
                    
                        <li key={item.title}>
                            {item.title}
                        </li>
                    ))}
                </div>
                
            </div>
            
            
        );
    }
}
export default TopMovieEachYear;