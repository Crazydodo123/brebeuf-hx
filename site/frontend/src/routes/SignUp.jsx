import { useField }from '../hooks/index.js'

const SignUp = () => {
    const nom = useField('nom')
    const age = useField('age')
    const education = useField('education')
    const participation = useField('participation')
    const recurrence = useField('recurrence')
    const weekend = useField('weekend')
    const holidays = useField('holiday')
    const experience = useField('experience')


    return (
        <div>
            <form>
                <ol>
                    <li>
                        <label htmlFor="nom">Quel est votre nom?</label>
                        <input required { ...nom }></input>
                    </li>
                    <li>
                        <label>Quel est votre âge?</label>

                    </li>
                </ol>

            </form>
        </div>
    )
}

export default SignUp