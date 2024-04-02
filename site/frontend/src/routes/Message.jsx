import { useState } from "react"
import messageServices from '../services/messages'

const Message = ({ message, deleteMessage }) => {
  const [expand, setExpand] = useState(false)

  if (!expand) {
    if (message.message.length > 50) {
      return (
        <div className="message-small">
          <b>{message.firstName} {message.lastName}: </b>{message.message.slice(0, 50)}... <button onClick={() => setExpand(true)}>voir plus</button>
        </div>
      )
    } else {
      return (
        <div className="message-small">
          <b>{message.firstName} {message.lastName}: </b>{message.message} <button onClick={() => setExpand(true)}>voir plus</button>
        </div>
      )
    }
  }

  const removeMessage = async () => {
    let shortMessage
    if (message.message.length > 50) {
      shortMessage = `${message.message.slice(0, 20)}...`
    } else {
      shortMessage = message.message
    }

    if (window.confirm(`Enlever ${shortMessage}?`)) {
      await messageServices.remove(message.id)
      deleteMessage(message)
      alert(`${shortMessage} a été enlevé`)
      try {
      } catch({ response }) {
        console.log(response)
        notify(response.data.error, 'error')
      }
    }
  }

  return (
    <div className="message">
      <p><b>De: </b>{message.firstName} {message.lastName} <button onClick={() => setExpand(false)}>voir moins</button> <button onClick={removeMessage}>enlever</button></p> 
      <p><b>Address courriel: </b>{message.email}</p>
      <p><b>Numéro de téléphone: </b>{message.phoneNumber}</p>
      <p className="word-wrap"><b>Message: </b>{message.message}</p>
    </div>
  )
}

export default Message