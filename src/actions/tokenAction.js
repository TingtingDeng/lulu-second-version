import {actionType} from "../helper";

const getTokenAction = (email, password) => async dispatch => {
    let axios = require('axios')
    let data = JSON.stringify({
        "email": email,
        "password": password
    })
    console.log(email)
    console.log(password)

    let config = {
        method: 'post',
        url: 'http://localhost:3000/user/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }

    await axios(config)
        .then(function (response) {
            console.log(response.data)
            localStorage.setItem('token', JSON.stringify(response?.data?.data))
            dispatch({
                type: actionType.UPDATE_TOKEN,
                payload: response.data.data
            })
            dispatch({
                type: actionType.UPDATE_ERROR_MSG,
                payload: null
            })
                .catch(function (error) {
                    console.log(error)
                    dispatch({
                        type: actionType.UPDATE_ERROR_MSG,
                        payload: error.response.data.msg
                    })
                })
        })
}
    const updateIsLoginAction = (isLogin) => {
        return{
            type: actionType.UPDATE_IS_LOGIN,
            payload: isLogin
        }
    }

    const updateTokenAction = (newToken) => {
        return{
            type: actionType.UPDATE_TOKEN,
            payload: newToken
        }
    }

export default {
    getTokenAction,

    updateIsLoginAction,
    updateTokenAction
}
