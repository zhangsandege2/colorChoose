import axios from 'axios';
export function getData(){
    axios.get("http://localhost:8080/#/data.json").then((response)=>{
        console.log(response);
    });
}