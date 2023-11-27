import axios from 'axios'
import { MAIN_API } from '../api/MAIN_API'
import { changeStateValue } from '../redux/MainReducer'

export const loginUser = (data) => async dispatch => {
    return await axios({
        method: 'POST',
        url: `${MAIN_API}/user/check`,
        params: data,
    })
    .then(resp => {
        dispatch(changeStateValue({
            name: 'user',
            value: resp.data.user
        }))
        localStorage.setItem('Floda_Nest', resp.data.token)
        return 'success'
    }).catch(err => {
        return 'error'
    })
}

export const registerUser = (data) => async dispatch => {
    return await axios({
        method: 'POST',
        url: `${MAIN_API}/user/insert`,
        params: data,
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem('Floda_Nest')}`,
        }
    })
    .then(resp => {
        return 'success'
    }).catch(err => {
        return 'error'
    })
}

export const getProducts = (data) => async dispatch => {
    return await axios.get(`${MAIN_API}/product`)
    .then(resp => {
        console.log(resp.data)
        dispatch(changeStateValue({
            name: 'products',
            value: resp.data
        }))
    }).catch(err => {
        return 'error'
    })
}

export const getProductProperties = (data) => async dispatch => {
    return await axios.get(`${MAIN_API}/productproperies`)
    .then(resp => {
        dispatch(changeStateValue({
            name: 'productproperties',
            value: resp.data
        }))
    }).catch(err => {
        console.log(err.resp)
    })
}

export const getProductById = (id) => async dispatch => {
    return await axios.get(`${MAIN_API}/product/${id}`)
    .then(resp => {
        dispatch(changeStateValue({
            name: 'productsData',
            value: resp.data
        }))
    }).catch(err => {
        console.log(err.resp)
    })
}

export const getProductCountById = (id) => async dispatch => {
    return await axios.get(`${MAIN_API}/product/${id}`)
    .then(resp => {
        dispatch(changeStateValue({
            name: 'productsCount',
            value: resp.data
        }))
    }).catch(err => {
        console.log(err.resp)
    })
}

export const getProductPropertiesById = (id) => async dispatch => {
    return await axios.get(`${MAIN_API}/productproperties/${id}`)
    .then(resp => {
        dispatch(changeStateValue({
            name: 'productproperties',
            value: resp.data
        }))
    }).catch(err => {
        console.log(err.resp)
    })
}

export const insertContact = (data) => async dispatch => {
    return await axios({
        method: 'POST',
        url:`${MAIN_API}/contact/insert`,
        params: data
    })
    .then(resp => {
        dispatch(changeStateValue({
            name: 'contacts',
            value: resp.data
        }))
        localStorage.setItem('Floda_Nest', resp.data.token)
        return 'success'
    }).catch(err => {
        return 'error'
    })
}