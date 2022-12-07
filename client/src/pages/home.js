import React from 'react';
import {NavBar} from '../components/NavBar';
import Display from '../components/Display';
import axios from 'axios';

export const Home = () => {
    
    const [data,setData] = React.useState([])

    React.useEffect(() => {
        const getData = async() => {
        const response = await axios.get('http://localhost:5000/api/acts/gt')
            setData(response.data)
        }
        getData()
    }, [])

    const actiData = data.map(entry => {
        console.log(entry);
        return <Display
                ActNumber = {entry.ActNumber}
                ActName = {entry.ActName}
                />
    })

    return(
        <>
            <NavBar/>
            <br/>
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Activities</li>
                    {actiData}
                </ul>
            </div>
        </>
    )
}

export default Home;