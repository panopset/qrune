cd server
mvn clean install
cd ..
yarn
yarn build
scp -r build/* @p:/var/www/qrune.com/html/
