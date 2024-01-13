import axios from 'axios'
const baseUrl = '/api/messages'

const create = async (newMessage) => {
    const response = await axios.post(baseUrl, newMessage)
    return response
}

export default { create }