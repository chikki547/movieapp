import React from 'react';



class TopMoviesAllTime extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/Demo/movie/top")
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
            
            <div className="list">
                TOP TEN MOVIE OF ALL TIME
                {items.map(item => (
                    <li key={item.title}>
                        {item.title}
                    </li>
                ))}
            </div>
            
        );
    }
}
export default TopMoviesAllTime;