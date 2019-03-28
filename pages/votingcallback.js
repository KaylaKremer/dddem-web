import React from 'react'
const fetch = require("node-fetch");
const querystring = require('querystring');
import { parse } from 'url';
import { encrypt } from '../utils/cryptohelper';
import votingdata from '../utils/votingdata';
const crypto = require('crypto');

class votingcallback extends React.Component {
    static formdata(obj) {
        var str = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
            }
        }
        return str.join("&");
    }

    static async getInitialProps({ req, res }) {
        const query = querystring.parse(parse(req.url).query);
        let cookieValue = '';
        if (query.code) {
            const response = await fetch('https://www.eventbrite.com/oauth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: votingcallback.formdata({
                    grant_type: 'authorization_code',
                    code: query.code,
                    client_secret: votingdata.clientSecret,
                    client_id: votingdata.clientToken
                })
            });
            cookieValue = await response.json();
        }

        if (res) {
            if (cookieValue.hasOwnProperty('access_token')) {
                const encryptedCookie = encrypt(cookieValue['access_token'].toString());
                res.setHeader('Set-Cookie', [`voteid=${encryptedCookie}`]);
            }
            res.writeHead(302, {
                Location: votingdata.votingpage
            })
            res.end()
        } else {
            Router.push( votingdata.votingpage);
        }
        return {}
    }
}

export default votingcallback;