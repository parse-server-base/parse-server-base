const {GraphQLClient} = require('graphql-request')

const query = `{
    cogDetections(title: "project-1576663976493") {
      title
    }
  }`
  
const base = `http://${process.env.HOST_URL || 'localhost'}:1337/graphql`
const url = `${base}`
const token = 'r:ff7cd9890ce21fd9fb19aabada4cb986'

const graphQLClient = new GraphQLClient(url, {
    headers: {
      'X-Parse-Application-Id': `${process.env.APP_ID}`,
      'X-Parse-Session-Token': `${token}`,
    },
  })

graphQLClient.request(query).then(data =>
    console.log(data)
)