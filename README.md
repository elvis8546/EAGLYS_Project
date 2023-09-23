# EAGLYS_Project

-For EAGLYS job-application assignment : 

    -To start the project to check:

    # git clone https://github.com/elvis8546/EAGLYS_Project.git to your local storage

    -For four basic assignment : 
        1. Open the terminal and navigate to the folder 'EAGLYS-Backend' where the files are located.("cd path/EAGLYS-Backend")
        2. type node app.js and enter,you will see main.py executing and return 3 output from 1st : parseSqlToAst.py 、 2nd : modifiedAst.py and 3rd : rebuildSqlFromAst.py.
        3. To test 4th assignment as Unit Test, type "cd python" to Switch directory where included parseUnitTest.py.
        4. type "python parseUnitTest.py" to run the Unit Test.(Your computer need to install python first!)
        5. To check the Unit Test's output is "OK" or not.

    -To build backend dockerfile into container
        1. In terminal,CD under EAGLYS-Backend where dockerfile located.
        2. Build docker image : docker build -t eaglys_backend .
        3. Run docker container : docker run -p 4000:4000 eaglys_backend 
        4. Open the browser and enter http://localhost:4000/,see if "Start! Node.js!" show up
        5. To check container status,type "docker ps" list all container.
      