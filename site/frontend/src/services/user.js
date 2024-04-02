import axios from 'axios'
const baseUrl = '/api/users'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newUser) => {
    const response = await axios.post(baseUrl, newUser)
    return response.data
}

const remove = async (userId) => {
    const userUrl = `${baseUrl}/${userId}`
    const response = await axios.delete(userUrl)
    return response.data
}

export default { getAll, create, remove }