 #!/bin/bash
 #bash ./build/init.sh

 npm install
 sudo npm install supervisor -g
 sudo npm install jasmine-node -g
 sudo npm install -g karma

if [ -f "./tools/mongodb.tgz" ]
then
    echo "mongodb not change"
else
	curl http://fastdl.mongodb.org/osx/mongodb-osx-x86_64-2.4.1.tgz > ./tools/mongodb.tgz
	tar zxvf ./tools/mongodb.tgz
	mv mongodb-osx-x86_64-2.4.1  mongodb 	
	echo "dowload mongodb"
fi 


if [ -d "/data/db" ]
then
  echo "/data/db not create"
else
	sudo mkdir -p /data/db/
	echo "create /data/db"
fi 

echo "congratulate to you : env already done."



