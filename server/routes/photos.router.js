const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

let String = req.query.serch;
router.get('/', (req, res) => {
    axios({
        method: 'GET',
       url: application.giphy.com/v1/gifs/search?api_key=AjCfLJoxDOCubSgAADPgOwXu2vNDVvSn&q=${String}


    })


}



)




// api.giphy.com/v1/gifs/search
// api_key=AjCfLJoxDOCubSgAADPgOwXu2vNDVvSn&q=steve&limit=5