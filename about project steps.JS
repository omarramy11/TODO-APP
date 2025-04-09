/*
   ** npm installation **
    1. npm init -y => package.json
    2. npm i express => node_modules
    3. npm i mongoose => Database
    4. npm i nodemon => autorestart server
    5. npm run start

    ** create mongo-express in docker **
    1. file docker-compose
    2. in terminal => docker compose-up -d
    3. run the DB with port 8085

    ** nodemon quickly start **
    --"start": "nodemon app.js"

    ** modules folder **
    - for form for DB Scema

    ** ESX ***
    _______________________________________________________________________________________________________________
    -- مثلا روحت دلوقتي mongo express وقمت باضافه row في task collection => DONE
    -- بعد كدا روحت postman وشغلت ال APItask عن طريق امر get 
    -- المفروض يرجعلك في response Json حاجتين : ID and test tasks اللي انت عملتهم 
    -- ولكن ميزه من مميزات mongo express بيحترم الكود اللي انت كاتبو وعشان انت كاتب في ال scema 3 rows 
    -- ف يروح يرجع ال 3 كاملين والحاجه اللي انت معملتهاش يضيفها من عندو الا وهي : completed
    ---------------------------------------------------------
    -- اذن نستفاد ان ال model بيحترم ال schema في اوامرها 
    -- اذن ال schema بتفرض rules بتاعتها علطول
    ________________________________________________________________________________________________________________

    ** قاعده **
    -- قاعده اساسيه : لو انت بتسحب داتا من Database 
    -- you must use : Try_catch



    *** endpoints ***

    1. get
        http://localhost:3000/tasks

    2. post
        - http://localhost:3000/tasks
        - body , raw , Json
        - create new task about ("title" - "description", "completed")
        - EX :
                {
                    "title": "test",
                    "completed" : false,
                    "description" : "a test description"
                }
        ____________ note 
         "_id": "67f5e85f76edbb9cd89ec836",
        "__v": 0 دول بيتضافو اوتوماتيك

    3. put or update
        - استخدم iD من ال DB
        - حطو في postman في URL بعد /task
        - زي كدا : http://localhost:3000/tasks/67f5e85f76edbb9cd89ec836
        - وبس هتستخدم completed and description في ملف JSON
        
                 "message": "Updated Successfuly",
                "task": {
                "_id": "67f5e85f76edbb9cd89ec836",
                "title": "test",
                "description": "A completed discrition",
                "completed": true,
                "__v": 0
    }
}
    4. delete
        - نفس الكلام عن طريق ال ID
        - http://localhost:3000/tasks/67f5e85f76edbb9cd89ec836
        - تنساش تحول ال structure to none
        - النتيجه : {
                        "message": "Deleted Successfuly"
                    }
        - go to mongo-expreess from docker to ensure

*/
