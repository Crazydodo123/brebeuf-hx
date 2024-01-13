// obtain plugin
var cc = initCookieConsent();



// run plugin with your configuration
cc.run({
    current_lang: 'fr',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: true,                   // default: true
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        console.log(cookie);
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'fr': {
            consent_modal: {
                title: 'Bienvenue ! Nous souhaitons vous informer que ce site utilise des cookies.',
                description: 'Nous utilisons des cookies essentiels pour garantir le bon fonctionnement du site, ainsi que des cookies de suivi pour comprendre comment vous interagissez avec celui-ci. Les cookies de suivi ne seront activés qu\'après votre accord. Vous avez le pouvoir de choisir. <button type="button" data-cc="c-settings" class="cc-link">Me laisser choisir</button>',
                primary_btn: {
                    text: 'Tout accepter',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Tout refuser',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Préférences des cookies',
                save_settings_btn: 'Sauvegarder les préférences',
                accept_all_btn: 'Tout accepter',
                reject_all_btn: 'Tout refuser',
                close_btn_label: 'Fermer',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    // {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Utilisation des cookies',
                        description: 'Nous utilisons des cookies afin d\'assurer les fonctionnalités de base de notre site, ainsi qu\'afin de vous fournir une meilleure expérience de navigation. Vous pouvez choisir de les accepter où non pour les catégories qui ne sont pas strictement nécéssaires.'
                    }, {
                        title: 'Cookies strictement nécéssaires',
                        description: 'Ces cookies sont essentiels pour le bon fonctionnement de notre site. Sans ces cookies, le site ne fonctionnerait pas correctement.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                        cookie_table: [             // list of all expected cookies
                        {
                            col1: 'JSESSIONID',
                            col2: '211qc.ca',
                            // col3: 'Session',
                            col4: 'JSESSIONID est un cookie généré par des conteneurs Servlet comme Tomcat ou Jetty et utilisé pour la gestion de session dans l\'application Web J2EE pour le protocole HTTP.',
                        },
                        ]
                    }, {
                        title: 'Cookies de performance et d\'analytique.',
                        description: 'Ces cookies permettent au site de se souvenir des choix que vous avez fait sur celui-ci dans le passé.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '_ga_*',       // match all cookies starting with "_ga"
                                col2: '211qc.ca',
                                // col3: '2 ans',
                                col4: 'Google Analytics',
                                is_regex: true,
                            },
                            {
                                col1: '_gid',       // match all cookies starting with "_ga"
                                col2: '211qc.ca',
                                // col3: '2 ans',
                                col4: 'Google Analytics',
                                is_regex: true,
                            },
                            {
                                col1: '_gat',       // match all cookies starting with "_ga"
                                col2: '211qc.ca',
                                // col3: '2 ans',
                                col4: 'Google Analytics',
                                is_regex: true,
                            },
                            {
                                col1: '_ga',       // match all cookies starting with "_ga"
                                col2: '211qc.ca',
                                // col3: '2 ans',
                                col4: 'Google Analytics',
                                is_regex: true,
                            },
                        ]
                    }, {
                        title: 'En savoir plus',
                        description: 'Pour en savoir plus sur notre politique et sur la manière dont nous nous servons des cookies, veuillez <a class="cc-link" href="/nous-joindre">nous contacter</a>.',
                    }
                ]
            }
        }
    }
});