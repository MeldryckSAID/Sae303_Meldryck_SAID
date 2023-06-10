// Services d'appels Ajax via fetch
// les fonctions sont exportables
// afin de permettre leurs utilisations par un programme externe
// (réutilisable par import)

// Promesse de recherche pour les villageois
export const getfest = () => {
    let rq =
      "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=festivals-global-festivals-_-pl&q=&lang=fr&rows=500&facet=region_principale_de_deroulement&facet=departement_principal_de_deroulement&facet=commune_principale_de_deroulement&facet=discipline_dominante";
    // Requête concernée
    return fetch(rq)            // on renvoie la requête à qui la demande
        .then(response => {
            return response.json()  // résultat de la requête en json
        })
        .catch(error => { throw error } // Cas d'erreur
        )
}
