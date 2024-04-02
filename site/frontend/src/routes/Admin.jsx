import { useEffect, useState } from 'react'
import userServices from '../services/user'
import messageServices from '../services/messages'
import User from './User'
import Message from './Message'
import { useNavigate } from 'react-router-dom'
import adminServices from '../services/admin'
import { useField } from '../hooks'

const Admin = () => {
  const [logged, setLogged] = useState(false)
  const password = useField('password', 'password')
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])

  useEffect(() => {
    userServices.getAll().then(users => {
      setUsers(users)
    })
    messageServices.getAll().then(messages => {
      setMessages(messages)
    })
  }, [])

  const login = async (e) => {
    e.preventDefault()
    try {
      const { token } = await adminServices.login(password.value)
      setLogged(token)
    } catch({ response }) {
      alert(response.data.error)
    }
    password.clear()
  }

  if (!logged) {
    return (
      <div id='admin-login'>
        <h3 id="admin-subheader">Mot de passe:</h3>
        <form id="admin-form" onSubmit={login}>
          <input className="text-input" required { ...password } ></input>
          <button id="admin-submit" type='submit'>Soumettre</button>
        </form>
      </div>
    )
  }


  const deleteUser = (deletedUser) => {
    const newUsers = users.filter(user => {
      return user.id !== deletedUser.id
    })
    setUsers(newUsers)
  }

  const deleteMessage = (deletedMessage) => {
    const newMessages = messages.filter(message => {
      return message.id !== deletedMessage.id
    })
    setMessages(newMessages)
  }

  return (
    <div id='admin-section'>
      <div className='admin-subsection'>
        <h3 className='admin-header'>Applications</h3>
        <div id='applications'>
          {users.map((user) => {
            return <User user={user} deleteUser={deleteUser} key={user.id}/>
          })}
        </div>
      </div>
      <div className='admin-subsection'>
        <h3 className='admin-header'>Messages</h3>
        <div id='messages'>
          {messages.map((message) => {
            return <Message message={message} deleteMessage={deleteMessage} key={message.id}></Message>
          })}
        </div>
      </div>
    </div>
  )
}

export default Admin