import axios from 'axios'
const baseUrl = '/api/messages'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newMessage) => {
    const response = await axios.post(baseUrl, newMessage)
    return response.data
}

const remove = async (messageId) => {
    const messageUrl = `${baseUrl}/${messageId}`
    const response = await axios.delete(messageUrl)
    return response.data
}

export default { getAll, create, remove }