(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{320:function(e,t,o){"use strict";o.r(t);var i=o(4),n=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fonctions-de-rappel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fonctions-de-rappel"}},[e._v("#")]),e._v(" Fonctions de rappel")]),e._v(" "),t("p",[e._v("Les fonctions de rappels peuvent automatiser la production d'un accusé de réception ou maintenir l'état d'une notification dans votre base de données.")]),e._v(" "),t("p",[e._v("Une fonction de rappel vous permet de recevoir des messages sur l'état des notifications de Notification GC à une adresse URL de votre choix. Les rappels sont lorsque Notification GC envoie des requêtes HTTP "),t("code",[e._v("POST")]),e._v(" à votre service. Vous pouvez obtenir des rappels lorsqu'un courriel ou un message texte que vous avez envoyé est livré ou échoue.")]),e._v(" "),t("p",[e._v("Vous devrez fournir un jeton "),t("code",[e._v("Bearer")]),e._v(", pour des raisons de sécurité. Nous ajouterons ceci à l’en-tête "),t("code",[e._v("Authorization")]),e._v(" de la demande de rappel.")]),e._v(" "),t("h2",{attrs:{id:"configurer-des-fonctions-de-rappel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configurer-des-fonctions-de-rappel"}},[e._v("#")]),e._v(" Configurer des fonctions de rappel")]),e._v(" "),t("p",[e._v("Vous devez fournir :")]),e._v(" "),t("ul",[t("li",[e._v("une adresse URL de destination vers laquelle Notification GC effectuera une requête HTTP")]),e._v(" "),t("li",[e._v("un jeton "),t("code",[e._v("Bearer")]),e._v(", pour des raisons de sécurité, que Notification GC placera dans l’en-tête "),t("code",[e._v("Authorization")]),e._v(" des demandes")])]),e._v(" "),t("p",[e._v("Pour ce faire :")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://notification.canada.ca/sign-in?lang=fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connectez-vous à Notification GC"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Allez à la page "),t("strong",[e._v("Intégration API")]),e._v(".")]),e._v(" "),t("li",[e._v("Sélectionnez "),t("strong",[e._v("Fonctions de rappel")]),e._v(".")])]),e._v(" "),t("p",[e._v("Lors de la création d’un jeton "),t("code",[e._v("Bearer")]),e._v(", vous devez :")]),e._v(" "),t("ul",[t("li",[e._v("garder votre jeton "),t("code",[e._v("Bearer")]),e._v(" sécurisé")]),e._v(" "),t("li",[e._v("le changer si vous avez une raison de penser qu’on ne peut plus lui faire confiance")]),e._v(" "),t("li",[e._v("Assurez-vous que les fonctions de rappel que vous recevez de Notification GC contiennent votre jeton "),t("code",[e._v("Bearer")]),e._v(" dans l’en-tête "),t("code",[e._v("Authorization")])]),e._v(" "),t("li",[e._v("utiliser une valeur hachée pour que Notification GC ne contienne pas le vrai jeton")])]),e._v(" "),t("h2",{attrs:{id:"accuses-de-reception-de-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accuses-de-reception-de-message"}},[e._v("#")]),e._v(" Accusés de réception de message")]),e._v(" "),t("p",[e._v("Lorsque vous envoyez un courriel ou un message texte, Notification GC envoie un accusé de réception à votre adresse URL de rappel pour vous dire s’il a été livré ou non. Il s’agit d’une méthode automatisée pour obtenir l’état des messages.")]),e._v(" "),t("p",[e._v("Cette fonctionnalité fonctionne avec les clés API de test, mais ne fonctionne pas avec les adresses de courriel ou les numéros de téléphone de test de détection de fumée.")]),e._v(" "),t("p",[e._v("Le message de la fonction de rappel est formaté en JSON. Toutes les valeurs sont des chaînes de caractères. Voici la clé, la description et le format des arguments du message de la fonction de rappel :")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Clé")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Description")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Format de la chaîne")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("id")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("ID de Notification GC pour les accusés d’état")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("UUID")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("reference")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Référence envoyée par le service")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("12345678")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("to")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("L’adresse de courriel ou numéro de téléphone du destinataire")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("hello@canada.ca ou 01234567890")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("status")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("État de la notification")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("created")]),e._v(", "),t("code",[e._v("sending")]),e._v(", "),t("code",[e._v("pending")]),e._v(", "),t("code",[e._v("sent")]),e._v(", "),t("code",[e._v("delivered")]),e._v(", "),t("code",[e._v("permanent-failure")]),e._v(", "),t("code",[e._v("temporary-failure")]),e._v(", "),t("code",[e._v("technical-failure")]),e._v(", "),t("code",[e._v("pending-virus-check")]),e._v(" ou "),t("code",[e._v("virus-scan-failed")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("status_description")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("(placeholder) Libellé de l'état de livraison de la notification")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("Envoi en cours")]),e._v(", "),t("code",[e._v("Envoi en cours")]),e._v(", "),t("code",[e._v("Envoi en cours")]),e._v(", "),t("code",[e._v("Livraison réussie")]),e._v(", "),t("code",[e._v("[Message bloqué | Numéro inexistante | Adresse inexistant]")]),e._v(", "),t("code",[e._v("[Problème de contenu ou de boîte de réception | Problème du fournisseur]")]),e._v(", "),t("code",[e._v("Problème technique")]),e._v(", "),t("code",[e._v("Envoi en cours")]),e._v(", "),t("code",[e._v("Virus dans la pièce jointe")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("provider_response")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("La réponse détaillée venant du fournisseur. Ceci sera renseigné uniquement lorsque l’état de la notification est une erreur technique")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("Blocked as spam by phone carrier")]),e._v(" (ou tout autre message) ou nul")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("created_at")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Heure à laquelle le service a envoyé la demande")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("2017-05-14T12:15:30.000000Z")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("completed_at")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Dernière mise à jour de l’état")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("2017-05-14T12:15:30.000000Z")]),e._v(" ou nul")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("sent_at")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Heure d’envoi de la notification")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("2017-05-14T12:15:30.000000Z")]),e._v(" ou nul")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("notification_type")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Type de notification")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("email")]),e._v(" ou "),t("code",[e._v("sms")])])])])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Plusieurs fonctions de rappel pour une notification")]),e._v(" "),t("p",[e._v("Vous pouvez recevoir plusieurs fonctions de rappel pour une seule notification envoyée. Par exemple, il est possible que le serveur de messagerie destinataire accepte le courriel (envoyant une fonction de rappel de livraison réussie), mais après avoir traité le courriel, le serveur de messagerie peut déterminer qu’en réalité ce courriel retourne un échec (envoyant une fonction de rappel d’échec).")]),e._v(" "),t("p",[e._v("Les fonctions de rappel sont envoyées dans l’ordre où elles sont reçues.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);