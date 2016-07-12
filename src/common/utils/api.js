/**
 * Created by Olejka on 12.07.2016.
 */


const api = {
    getUsers(){
        return new Promise((res, rej) =>{
            setTimeout(()=>{
                res(['Oleg','Pasha','Olesya']);
            },2000)
        })
    }
};

export default api;