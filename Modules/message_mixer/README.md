# Message Mixer

Message Mixer est un petit programme en JavaScript qui permet de chiffrer des messages en utilisant différents types de chiffrement, notamment le chiffre de César, le chiffre de substitution de symboles et le chiffrement par inversion de mots.

## Comment ça marche ?

### Le programme utilise trois fonctions d'encryption :

- caesarCipher: Cette fonction utilise le chiffre de César pour décaler les lettres du message.
- symbolCipher: Cette fonction remplace certaines lettres par des symboles prédéfinis.
- reverseCipher: Cette fonction inverse l'ordre des mots dans une phrase.

### Pour exécuter le programme, suivez ces étapes :

- Assurez-vous d'avoir Node.js installé sur votre machine.
- Clonez ce dépôt sur votre machine.
- Dans votre terminal, accédez au répertoire du programme.
- Exécutez node message_mixer.js [type_de_chiffrement] [paramètres_supplémentaires].
- Suivez les instructions pour saisir le message que vous souhaitez chiffrer.

### Exemples d'utilisation :

- Pour chiffrer un message avec le chiffre de César : `node message_mixer.js caesar 4`
- Pour chiffrer un message avec le chiffre de substitution de symboles : `node message_mixer.js symbol`
- Pour chiffrer un message avec le chiffrement par inversion de mots : `node message_mixer.js reverse`
