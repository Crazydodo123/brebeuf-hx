import { useState } from "react"
import userServices from '../services/user'

const User = ({ user, deleteUser }) => {
  const [expand, setExpand] = useState(false)

  if (!expand) {
    return (
    <div className="application-small">
      <b>{user.nom} </b><button onClick={() => setExpand(true)}>voir plus</button>
    </div>
    )
  }

  const removeUser = async () => {
    if (window.confirm(`Enlever ${user.nom}?`)) {
      try {
        await userServices.remove(user.id)
        deleteUser(user)
        alert(`${user.nom} a été enlevé`)
      } catch({ response }) {
        console.log(response.data)
        notify(response.data.error, 'error')
      }
    }
  }

  return (
    <div className="application">
      <p><b>{user.nom} Age: </b>{user.age} <button onClick={() => setExpand(false)}>voir moins</button> <button onClick={removeUser}>enlever</button></p>
      <p><b>Education: </b>{user.education}</p>
      <p><b>Tournées ou prépartion des produits:</b> {user.participation}</p>
      <p><b>Fréquence de participation:</b> {user.recurrence}</p>
      <p><b>Participation durant les fins de semaine:</b> {user.weekend}</p>
      <p><b>Participation durant les jours feriées:</b> {user.holiday}</p>
      <p><b>Expérience avec les itinérants:</b> {user.experience}</p>
      <p><b>Premiers soins:</b> {user.formation}</p>
      <p><b>Autres experience:</b> {user.misc}</p>
      <p><b>Casier judiciare:</b> {user.casier}</p>
    </div>
  )
}

export default User