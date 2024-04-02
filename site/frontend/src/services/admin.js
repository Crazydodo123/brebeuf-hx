import axios from 'axios'
const baseUrl = '/api/admin'

const login = async (password) => {
    const response = await axios.post(baseUrl, { password })
    return response.data
}

const update = async (oldPassword, newPassword) => {
    const response = await axios.post(baseUrl, { oldPassword, newPassword })
    return response.data
}

export default { login, update }