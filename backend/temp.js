const got = require('got');  //send ship info to ship service
    (async () => {
        const {body} = await got.post('https://localhost:9000/api/ship', {
            json: {
                "order": "order"
            },
            responseType: 'json'
        });
    
        console.log(body);
    })();