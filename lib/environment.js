const environment = {
  KC_REALM:process.env.KC_REALM ? process.env.KC_REALM: 'app-teste',
  KC_URL:process.env.KC_URL ? process.env.KC_URL: 'http://localhost:8088',
  KC_CLIENT_ID:process.env.KC_CLIENT_ID ? process.env.KC_CLIENT_ID: 'client-teste'
}

export default environment;