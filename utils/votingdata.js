export default {
    votingpage: 'http://localhost:3000/voting',
    callbackpage: 'http://localhost:3000/votingcallback',
    clientSecret: process.env.votingsecret,
    clientToken: 'V73XBNHGVSHHIMC47X',
    votingApiEndpoint:'https://jnl0hejt73.execute-api.eu-west-1.amazonaws.com/prod/talks', //Take api_url from votingapi stack output
    votingApiKey:'Pu8NoXRP6g3gn61mJvIgPaWBcAOckTOo9d4M4xg3', //Take api_key from votingapi stack output
};