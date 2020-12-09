const jwtAuthz = require('express-jwt-authz');

const checkVideoScope = jwtAuthz([ 'read:videos']);
const checkBroadcastScope = jwtAuthz(['read:broadcast'])
const checkPersonalScope = jwtAuthz(['read:videos','read:session'])

const scopes = function(){
    return{
        videos:checkVideoScope(),
        broadcast: checkBroadcastScope(),
        personal: checkPersonalScope()
    }
}

module.exports = scopes
