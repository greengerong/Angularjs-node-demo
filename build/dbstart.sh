 #!/bin/bash
 #bash ./build/dbstart.sh

if [ -d "/data/db" ]
then
  echo "/data/db not create"
else
	sudo mkdir -p /data/db/
	echo "create /data/db"
fi 
 sudo "./tools/mongodb/bin/mongod"