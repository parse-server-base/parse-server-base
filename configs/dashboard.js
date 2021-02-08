const HOST_URL_PORT = process.env.HOST_URL_PORT

module.exports = {
    "apps": [
      {
        "serverURL": process.env.PARSE_DASHBOARD_SERVER_URL,
        "appId": process.env.APP_ID,
        "masterKey": process.env.MASTER_KEY,
        "appName": process.env.PARSE_DASHBOARD_APP_NAME,
        graphQLServerURL: `http://${HOST_URL_PORT}/graphql`
      }
    ],
    "users": [
      {
        "user":process.env.PARSE_DASHBOARD_USER_ID,
        "pass":process.env.PARSE_DASHBOARD_USER_PASSWORD
      }
    ]
  }