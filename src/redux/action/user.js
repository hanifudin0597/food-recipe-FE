import axios from "axios";

export const register = (body) => {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEN_URL}/register/`, body, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then((response) => {
                // console.log(response.data)
                resolve(response.data)
            })
            .catch((err) => {
                // console.log(err.error.message)
                reject(err)
            })

    })
}

export const login = (body) => {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEN_URL}/login/`, body)
            .then((response) => {
                localStorage.setItem("token", response.data.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.data.user))
                resolve(response.data)
            })
            .catch((err) => {
                reject(err)
                // console.log(err)
            })
    })
}

export const getUser = () => {
    const token = localStorage.getItem("token")
    return {
        type: 'GET_USERS',
        payload: axios({
            url: `${process.env.REACT_APP_BACKEN_URL}/user-detail`,
            method: 'GET',
            headers: {
                token: token
            }
        })
    }
}