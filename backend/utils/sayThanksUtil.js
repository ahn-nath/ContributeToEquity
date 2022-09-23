var axios = require('axios');
var qs = require('qs');

export function sayThanksToUser(sayThanksURL, message, byline) {

    var data = qs.stringify({
        'content-type': 'palintext',
        'Font style': '0',
        'body': message,
        'byline': byline
    });
    var config = {
        method: 'post',
        url: sayThanksURL + '/submit',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            console.log("Successfully sent");
        })
        .catch(function (error) {
            console.log(error);
        });
}
