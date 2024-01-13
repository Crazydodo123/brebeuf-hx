import { useField }from '../hooks/index.js'

const SignUp = () => {
    const nom = useField('nom')
    const age = useField('age')
    const education = useField('education')
    const participation = useField('participation')
    const recurrence = useField('recurrence')
    const weekend = useField('weekend')
    const holiday = useField('holiday')
    const experience = useField('experience')
    const formation = useField('formation')
    const misc = useField('misc')
    const casier = useField('casier')

    return (
        <div>
            <h2 className='subheader'>Inscrivez-vous pour devenir bénévole dès aujourd'hui!</h2>
            <form>
                <ol>
                    <li>
                        <label htmlFor="nom">Quel est votre nom?</label>
                        <input required { ...nom }></input>
                    </li>
                    <li>
                        <label htmlfor ='age'>Quel est votre âge?</label>
                        <input required { ...age }></input>
                    </li>
                    <li>
                        <label htmlFor="education">Êtes-vous actuellement enrôlé dans un établissement d’éducation post-secondaire de la région de Montréal ? Lequel ?</label>
                        <input required { ...education }></input>
                    </li>
                    <li>
                        <label htmlfor ='participation'>Préférez-vous participer aux tournées ou à la préparation des produits ?</label>
                        <input required { ...participation }></input>
                    </li>
                    <li>
                        <label htmlfor ='recurrence'>Les tournées auront principalement lieu aux alentours de midi. Combien de fois par mois pensez-vous pouvoir participer à une tournée ? À la préparation des produits ?</label>
                        <input required { ...recurrence }></input>
                    </li>
                    <li>
                        <label htmlfor ='weekend'>Seriez-vous prêt à participer à une tournée ou à la préparation de produits les fins de semaines ?</label>
                        <input required { ...weekend }></input>
                    </li>
                    <li>
                        <label htmlFor="holiday">Seriez-vous prêt à participer à une tournée ou à la préparation des produits certains jours fériés ? Lesquels ?</label>
                        <input required { ...holiday }></input>
                    </li>
                    <li>
                        <label htmlFor="experience">Avez-vous de l’expérience d’interaction avec ou de service aux itinérants ? Avec des personnes toxicomanes ou souffrant de problèmes de santé mentale graves ? Avec des personnes agressives ou violentes ? Précisez. (Votre réponse à cette question n’influencera pas votre admission au sein de l’équipe de Ganymède).</label>
                        <input required { ...experience }></input>
                    </li>
                    <li>
                        <label htmlFor="formation">Avez-vous reçu des formations en premiers soins ou premiers secours ? Précisez. (Votre réponse à cette question n’influencera pas votre admission au sein de l’équipe de Ganymède).</label>
                        <input required { ...formation }></input>
                    </li>
                    <li>
                        <label htmlFor="misc">Avez-vous une expérience autre quelconque dont vous pensez qu’elle pourrait vous être utile dans le contexte des activités de Ganymède ? Précisez.</label>
                        <input required { ...misc }></input>
                    </li>
                    <li>
                        <label htmlFor="casier">Acceptez-vous que Ganymède demande à consulter votre casier judiciaire ? Cette procédure est nécessaire pour que vous puissiez participer aux activités de Ganymède. Si vous n’avez pas de casier judiciaire, elle ne donnera à Ganymède aucune informaGon sur vous. Si vous avez un casier judiciaire, vous pourrez quand même probablement participer aux activités de Ganymède.</label>
                        <input required { ...casier }></input>
                    </li>
                </ol>

            </form>
        </div>
    )
}

export default SignUp