import axios from "axios";
import { GET_ALL_DOGS,
     GET_DOG_BY_NAME,
     GET_TEMPERAMENTS,
     TEMP_ALL_NAMES,
     NAME_BY_ORIGIN,
     ALPHABETIC_ORDER} from "./action-types";



export const getAllDogs= () =>{
    const endpoint = "http://localhost:3001/dogs";
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(endpoint);
            return dispatch ({
                type: GET_ALL_DOGS , 
                payload:data
            })
        } catch (error) {
            return error.message
        }
    }
}
export const getDogByName = (name) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/name?name=${name}`)
            return dispatch ({
                type: GET_DOG_BY_NAME,
                payload:data
            })
        } catch (error) {
            return error.message
        }
    }
}

export const getTemperaments = () =>{
    const endpoint= "http://localhost:3001/temperaments"
    return async(dispatch)=>{
        try {
            const {data} = await axios.get(endpoint)
            return dispatch ({
                type: GET_TEMPERAMENTS,
                payload: data
            })
        } catch (error) {
           return error.message
            
        }
    }
}
export const tempAllNames= (temp) =>{
    return ({type:TEMP_ALL_NAMES, payload:temp})
}

export const nameByOrigin = (origin) =>{
    return ({type: NAME_BY_ORIGIN, payload:origin})
}
export const alphabeticOrder = (order) =>{
    return ({type: ALPHABETIC_ORDER, payload: order })
}
