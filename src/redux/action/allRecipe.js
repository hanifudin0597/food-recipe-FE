import axios from "axios";

export const getLatestRecipe = () => {
    return {
        type: 'GET_LIST_LATEST_RECIPE',
        payload: axios({
            url: `${process.env.REACT_APP_BACKEN_URL}/latest-recipe`,
            method: 'GET'
        })
    }
}


export const getAllRecipe = (resultSearch) => {
    return {
        type: 'GET_LIST_ALL_RECIPE',
        payload: axios({
            url: `${process.env.REACT_APP_BACKEN_URL}/recipe?searchRecipe=${resultSearch}`,
            method: 'GET'
        })
    }
}

export const getMyRecipe = () => {
    const token = localStorage.getItem("token")
    return {
        type: 'GET_LIST_MY_RECIPE',
        payload: axios({
            url: `${process.env.REACT_APP_BACKEN_URL}/myRecipe`,
            method: 'GET',
            headers: {
                token: token
            }
        })
    }
}

export const getDetailRecipe = (id) => {
    const token = localStorage.getItem("token")
    return {
        type: 'GET_DETAIL_RECIPE',
        payload: axios({
            url: `${process.env.REACT_APP_BACKEN_URL}/recipe/${id}`,
            method: 'GET',
            headers: {
                token: token
            }
        })
    }
}

export const addRecipe = (body) => {
    const token = localStorage.getItem("token")

    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEN_URL}/recipe`, body, {
            headers: {
                token: token
            }
        })
            .then((response) => {
                resolve(response.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export const updateRecipe = (body, id) => {
    const token = localStorage.getItem("token")

    return new Promise((resolve, reject) => {
        axios.put(`${process.env.REACT_APP_BACKEN_URL}/recipe/${id}`, body, {
            headers: {
                token: token
            }
        })
            .then((response) => {
                // console.log(response.data)
                resolve(response.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export const deleteRecipe = (id) => {
    const token = localStorage.getItem("token")

    return new Promise((resolve, reject) => {
        axios.delete(`${process.env.REACT_APP_BACKEN_URL}/delete-recipe/${id}`, {
            headers: {
                token: token
            }
        })
            .then((response) => {
                resolve(response.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
