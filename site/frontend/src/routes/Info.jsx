import { Link } from 'react-router-dom'

const Info = () => {
    return (
        <div>
            <div className = "container">
                <img id="main-image" src="src/assets/itinerance.png" alt="Itinerant"/>
                <h1 className = "font-size-big" id="title">Projet Ganymède</h1>
                <Link id="main-cta" to="/heatmap"><span>Comment aider</span></Link>
            </div>
            <h3 className = "infoh3">Qui sommes-nous?</h3>
            
            <p className = "main-paragraphs">Fondé en 2023, Ganymède est une initiative de onze étudiants du collégial. Constatant la réalité et les dangers de l’itinérance dans le quartier Côte-des-Neiges, les membres fondateurs décident d’organiser un groupe qui distribuera, quotidiennement, de l’eau, du café ou du bouillon aux personnes itinérantes du quartier et engagera la discussion avec eux. De cette façon, Ganymède cherche à atténuer la pression de deux dangers importants pour les personnes itinérantes : les risques liés à la température et l’exclusion sociale. En donnant de l’eau fraîche en été et des boissons chaudes en hiver, le groupe espère réduire les risques d’insolation et d’hypothermie guettant les personnes itinérantes ; en discutant avec elles, ils souhaitent leur fournir un besoin de première nécessité fréquemment oublié : les interactions humaines.</p>
            <p className = "main-paragraphs">Actuellement, Ganymède est à la recherche d’un organisme à but non-lucratif (OBNL) prêt à gérer ses fonds. Nous espérons pouvoir commencer nos activités de distribuGon à l’été 2024.</p>
            <h3 className = "infoh3">Notre mission</h3>
            <ol className = "main-paragraphs">
                <li>
                    Lutter contre les dangers liés à la température et à l’exclusion sociale qui visent les personnes en situation d’itinérance, en :
                    <ol>
                        <li>Distribuant quotidiennement de l’eau, du café ou du bouillon;</li>
                        <li>Engageant la conversation avec les personnes servies.</li>
                    </ol>
                </li>
                <li>Offrir aux étudiants post-secondaires une opportunité de s’impliquer positivement dans leur communauté d’étude.</li>
                
            </ol>
            <h3 className = "infoh3">Pourquoi soutenir Ganymède ? Pourquoi participer ?</h3>
            <p className = "main-paragraphs">En soutenant Ganymède, vous ou votre entreprise/organisme participez à la lutte contre l’exclusion sociale des personnes itinérantes. L’itinérance est une situation de stress constant qui affecte négativement la santé mentale globale des personnes qui en souffrent, notamment en raison du phénomène de désaffiliation sociale qui en résulte :</p>
            <blockquote className = "main-paragraphs"><p>Force est de constater que l’itinérance de rue constitue assurément l’une des expériences les plus extrêmes qu’il soit sur le plan de la perte de liens sociaux, du déni de reconnaissance et du manque de protection, alimentant disqualification, stigmatisation et marginalisation. À ce chapitre, Roy (1995) a affirmé que l’itinérance était une forme exemplaire d’exclusion. En raison des nombreuses ruptures sociales que cette situation entraîne, la vie de rue s’inscrit dans un parcours d’errance à-travers la ville, de solitude et d’ennui qui, comme le nomme Simard (2016), témoigne de la «perte de l’enveloppe psychosociale». (Ministère de la Santé et des Services sociaux du Québec, 2022)</p></blockquote>
            <p className = "main-paragraphs">En interagissant de manière répétée avec les personnes itinérantes, Ganymède espère contribuer à atténuer ce phénomène d’exclusion sociale et les problèmes de santé mentale qui y sont affiliés. Nous savons que nous ne sommes pas des sauveurs, que nous ne pouvons pas régler si simplement un problème si complexe ; mais nous croyons que nous pouvons rendre la vie des personnes itinérantes un peu plus supportable. En soutenant Ganymède, en participant aux tournées, vous nous y aidez.</p>
            <h3 className="infoh3">Comment puis-je aider ?</h3>
            <p className = "main-paragraphs">Ganymède n’accepte pas de dons en argent pour le moment. Nous voulons en effet être sûr de gérer les dons de façon parfaitement appropriée, ce qui n’est pas possible tant que nous ne sommes pas intégrés à un OBNL. Toutefois, les individus et les entreprises peuvent aider Ganymède à atteindre ce premier objectif de plusieurs façons, par exemple en :</p>
            <ol className = "main-paragraphs">
                <li>Acceptant de faire de Ganymède un projet de votre OBNL;</li>
                <li>Acceptant d’offrir des commandites au projet (entreprises) en envoyant un courriel à le.projet.ganymede@gmail.com ;</li>
                <li>Signalant votre intérêt à rejoindre le projet à Gtre de bénévole en remplissant le formulaire cidessous.</li>
            </ol>
            <p className = "main-paragraphs">Ici, un bouton menant au formulaire sous forme de Forms ou autre logiciel où les réponses sont accessibles au propriétaire du domaine.</p>
        </div>
    )
}

export default Info
