
export const isTokenExist =  (APIinstance) =>{
    const getToketHeader =  APIinstance.defaults.headers['authorization']; 
    const getTokenLocalStotage = localStorage.getItem('token');
    if(getToketHeader === undefined && getTokenLocalStotage){
          
        APIinstance.defaults.headers['authorization'] = `Bearer ${localStorage.getItem('token')}`
        return true;
    }else{ return false;}

}