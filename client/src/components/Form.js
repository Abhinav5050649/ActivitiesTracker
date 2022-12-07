import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Form = () => {

    const [Num, setNum] = React.useState('')
    const [Name, setName] = React.useState('')
    const navigate = useNavigate();

    // const handleChange = async(e) => {
    //     //handlechange
    //     e.preventDefault()

        // const data = {ActNumber, ActName}
        // const response = await fetch('http://localhost:5000/api/Act/', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers:{
        //         'Content-Type': 'text/json'
        //     }
        // })

        // e.preventDefault()
        // const data = {Num, Name}
        // console.log(data);
        // const response = await fetch('http://localhost:5000/api/acts/pst', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // })
        
        // console.log({Name, Num})

        // if(response.ok){
        //     setName('')
        //     setNum('')
        // }

        const handleSubmit = async(e) => {
            e.preventDefault();
            axios.post('http://localhost:5000/api/acts/pst', {
                ActNumber: Num,
                ActName: Name,
            })
              .then((response) => {
                console.log(response);
                setNum('');
                setName('');
            }, (error) => {
                console.log(error);
            });

            // const task = { ActNumber: Num, ActName: Name };
            // if (task.Num && task.Num.length > 0) {
            // axios
            //     .post('http://localhost:5000/api/acts/pst', task)
            //     .then((res) => {
            //         if (res.data) {
            //             setNum('');
            //             setName('');
            //         }
            //     })
            //     .catch((err) => console.log(err));
            // }  
            
            navigate("/");
        }
        // axios({
        //     method: 'post',
        //     url: '/pst',
        //     data: {
        //         ActNumber: this.Num,
        //         ActName: this.Name,
        //     }
        // });
        // axios.post('/Act', {
        //     ActNumber: this.ActNumber,
        //     ActName: this.ActName
        // })
        //   .then((response) => {
        //     console.log(response);
        //     setActNumber('');
        //     setActName('');
        // }, (error) => {
        //     console.log(error);
        // });

        // if(response.ok){
        //     setActNumber('')
        //     setActName('')
        // }
    //}
    
    return(
        <>
            <div>
                <form onSubmit={handleSubmit} method="post"> 
                    <div className="form-group">
                        <label>Activity Number</label>
                        <input type="text" className="form-control" value={Num} onChange={(e) => setNum(e.target.value)} id="textFormControlInput1" placeholder="Enter Activity Number: " required={true}></input>
                    </div>
                    <div className="form-group">
                        <label>Activity Name</label>
                        <input type="text" className="form-control" value={Name} onChange={(e) => setName(e.target.value)} id="textFormControlInput1" placeholder="Enter Name: " required={true}></input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;