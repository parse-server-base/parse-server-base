# parse-server-base

Parse is a good staff, super suitable for small projects that needs Restful API endpoints. You can focus on the schema(data fields) that you care, and parse will do everything for you, including:
 1. generating `RESTFul API endpoints`/`graphQL endpoints` by just given class and colum(fields)
 2. ready to use javascript SDK (both client & server)
 3. secure authentication methods (5times lockout policy, salt key)
 4. ACL
 5. file integration (file ACL + data relation)




## 1. install
```
$ yarn
```

## 2. setup env.sh
```sh
# env.sh
# -=-=-=-=-==-=-=-=-=-=-=- server -=-=-=-=-=-=-=-=-=-=-=-=-=-
echo "set DATABASE_URI"
export DATABASE_URI="mongodb://yourusername:password@abc.mlab.com:1234/parse-db"
echo "set APP_ID"
export APP_ID="APPLICATION_ID"
echo "set MASTER_KEY"
export MASTER_KEY="MASTER_KEY"


echo "set S3_ACCESS_KEY"
export S3_ACCESS_KEY="yourS3_ACCESS_KEY"
echo "set S3_SECRET_KEY"
export S3_SECRET_KEY="yourS3_SECRET_KEY"
echo "set S3_REGION"
export S3_REGION="ap-northeast-1"
echo "set S3_BUCKET"
export S3_BUCKET="your-bucket"

# -=-=-=-=-=-=-=-=-=-=-=-= dashboard -=-=-=-=-=-=-=-=-=-=-=-=
echo "set PARSE_DASHBOARD_APP_ID"
export PARSE_DASHBOARD_APP_ID=$APP_ID
echo "set PARSE_DASHBOARD_MASTER_KEY"
export PARSE_DASHBOARD_MASTER_KEY=$MASTER_KEY
echo "set PARSE_DASHBOARD_SERVER_URL"
export PARSE_DASHBOARD_SERVER_URL="http://localhost:1337/parse"
#change to http://yourdomain for non-local env

echo "set PARSE_DASHBOARD_APP_NAME"
export PARSE_DASHBOARD_APP_NAME="youApp"
echo "set PARSE_DASHBOARD_USER_ID"
export PARSE_DASHBOARD_USER_ID="amazingPeter"
echo "set PARSE_DASHBOARD_USER_PASSWORD"
export PARSE_DASHBOARD_USER_PASSWORD="amazingPassword"
```

## 3. Run
```
$ yarn dev
```

This project includes :

3.1 parse-server, 
3.2 - dashboard
![image](https://user-images.githubusercontent.com/5538753/71545127-436f8e00-29c2-11ea-85b2-81e8cd9d8231.png)

3.3 graphQl playground + graphQl server
![image](https://user-images.githubusercontent.com/5538753/71545186-24bdc700-29c3-11ea-8223-a77721644212.png)

3.4 express apis
3.5 cloud code


## Reference:
 - https://docs.parseplatform.org/graphql/guide/
