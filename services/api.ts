/* eslint-disable no-unused-vars */
import axios from 'axios'
var qs = require('qs');


const getTokenAccess = async () => {   
  var data = qs.stringify({
      'scope': 'oob',
      'grant_type': 'client_credentials' 
  });

  var config = {
      method: 'post',
      url: 'https://api-sandbox.getnet.com.br/auth/oauth/v2/token',
      headers: { 
          'authorization': 'Basic Mzk3YTQ4YjUtYWU0NS00ODBjLWJkZGItNzdjNzc2M2MwYjNiOjAzN2YxMmIwLWE0NDQtNGUzNS05YTU0LWRiYmUyYzk0NDRmZA==', 
          'content-type': 'application/x-www-form-urlencoded'
      },
      data : data
  };
  
  return axios(config)
      .then((res) => { 
        console.log("header", res.data)

        return res.data.token_type + " " + res.data.access_token})
      .catch((e) => { 
        console.log("header ERROR", e)
        return ""})
}

const getConfigHeaders = async () => {
  const auth = await getTokenAccess()
  return {
    'content-type': 'application/json; charset=utf-8',
    'authorization': auth
  }
}

const api = axios.create({
  baseURL: 'https://api-sandbox.getnet.com.br/',
})


export {
  api,
  getConfigHeaders
}
