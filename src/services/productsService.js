import axios from "axios"

const URL = "https://fakestoreapi.com/products"

const getProducts = () => {
    return axios.get(URL)
        .then(({data, status}) => {
            if(status === 200) {
                // console.log(data)
                return data
            }
        })
        .catch((error) => {
            console.log(error)
            throw error
        }) 
}


const filterProducts = () => {
    
}
export {
    getProducts
}
