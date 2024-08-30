import axios from "axios";
import { BASE_URL } from "./config";

//function to get all users data
let getAllUsers=async()=>{
    try{
        let res=await axios.get(`${BASE_URL}`);
        return res;;
    }catch(error){
        console.log(error);
        throw new Error("Failed to get all Users data")
    }
}

//function to add a new user
let addnewUser=async(FormData) =>{
    try{
        let res=await axios.post(`${BASE_URL}`,FormData,{
            headers:{
                'Content-Type':'application/json',
            }
        })

        return res;
    }
    catch(error){
        console.log(error);
        throw new Error("Failed to add User")

    }
}


//functiom to delete a user

let deleteUser=async(id)=>{
    try{
        let res=await axios.delete(`${BASE_URL}/${id}`,{
            headers: {
                    'Content-Type': 'application/json'
                }
        })
    
        return res;
    }
    catch(error){
        console.log(error);
        throw new Error("Failed to delete User")
    }
}

// Function to update user data
let patchUser = async (formData, id) => {
    try {
        let res = await axios.patch(`${BASE_URL}/${id}`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return res

    } catch (error) {
        console.log(error);
        throw new Error("Failed to update user details")
    }
}

export { getAllUsers, addnewUser, deleteUser, patchUser }