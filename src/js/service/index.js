const URL="https://assets.breatheco.de/apis/fake/contact/";
const Headers= {"Content-Type": "application/json"};

export const getAgenda= async()=>{
    try{
    const response= await fetch(`${URL}agenda/Diego123`,{method: 'GET'});
    const data= await response.json();
    return data
    }catch(err){
        console.log('Error in import Agenda',err);
    }
}

export const addContact = async (data) =>{
    try{
        const response=await fetch(URL, {method: 'POST', body: JSON.stringify(data), headers:{"Content-Type": "application/json"}});
    }catch(err){
        console.log('Error in add Contact',err);
    }
}

export const editContact = async (data,id) =>{
    try{
        const response=await fetch(`${URL}${id}`, {method: 'PUT', body: JSON.stringify(data), headers:{"Content-Type": "application/json"}});
    }catch(err){
        console.log('Error in edit Contact',err);
    }
}

export const deleteContact = async (id) =>{
    try{
        const response=await fetch(`${URL}${id}`, {method: 'DELETE'});
    }catch(err){
        console.log('Error in delete',err);
    }
}
