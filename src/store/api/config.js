import axios from 'axios';
//  конфиги дла API 

const ApiConf = {

    // baseURL: process.env.VUE_APP_BASE_URL
 
    baseURL: 'https://localhost:7151/',
    headers: {
     'Content-Type': 'application/json'
    }
    
 }

 
export const APiInstance = axios.create(ApiConf);


const defaultConf = {

    baseURL: 'https://other/',
    headers: {
     'Content-Type': 'application/json'
    }
    
 }

 export const DefaultAPiInstance = axios.create(defaultConf);
