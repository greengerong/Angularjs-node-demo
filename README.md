Angularjs-node-demo
===================

##install dev tools:
 1:node.js
 2:npm install.
 3:npm install supervisor -g (supervisor app.js)
 4; mongodb
    1: dowload mongodb
    2;uncompress mongodb to XX
    3:sudo mkdir -p /data/db/
    4:export PATH=XX:$PATH
    5: test : 1 sudo mongod 
 
##start node server: supervisor app.js

BTW: if you use mac 32, I will congratulate to you, because I alredy code for init env.
so you can run those command:
1: bash ./build/init.sh (notice:dowload mongodb will spend too much time,you can copy your mongodb to tools).
2: run web app: bash ./build/appstart.sh
3:run db : bash ./build/dbstart.sh