export default {
    votingpage: 'http://localhost:3000/voting',
    callbackpage: 'http://localhost:3000/votingcallback',
    clientSecret: process.env.votingsecret,
    clientToken: 'V73XBNHGVSHHIMC47X',
    entries:[
        {
          "Id": 10000,
          "Title": "Talk 1",
          "Description": "Providing a test title",
          "Level": "Introductory and overview",
          "Tags": "DevOps, Other"
       },
        {
          "Id": 20000,
          "Title": "Functional Talk 2",
          "Description": "Functional description!",
          "Level": "Intermediate",
          "Tags": "Functional programming"
       }
       ]
};