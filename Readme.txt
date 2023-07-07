steps to create a new project
    1. create a repository
    2. create main js file <app.js>
    3. and other additional html, css files
    4. initialize npm with default options <npm init>
    5. install npm express and body-parser modules
    using command: npm install express and npm install body-parser

how to use bootstrap
    1. simply click the template> inspect source code
    2. copy all the code to your local html file
    3. replace the local css and js links with bootstrap cdn links
    4. there might be some custom css files which also needs to get replaced 

mergin css files with html:

    1.add this line to the js file: app.use(express.static("public")); 
    2.then create a public folder in the same directory ie., here inside newsletter folder
    3. move the css file to the public folder. 
    4. also include all the images that are added in the html file locally.

to start using data from a post request by a client
    1.we use body-parser module which we already installed,in the beginning, using npm
    2.to start working with the data one additional line needs to be written:
        -> app.use(bodyParser.urlencoded({extended:true}));
    3. we can now use the: req.body.{nameSpecifiedInHTML}    

deploying our project!! 
finally
        1.abarakadabara2211@gmail.com Lilylamppost123!
        2.install heroku.exe from the website
        3.check for node, npm and git
        4.login to heroku cli using - heroku login
        5.done!

    prepare the app:
        1. change the local port - 3000 to process.env.PORT (dynamic port)
            process is defined by heroku so it will not run on our machine

        2. alternative: adding || 3000
        3. create Procfile- declare what command should be executed to start the app. 
        4.only 'Procfile' should be used to name that file>
                web: node index.js //web is the process type
        5.save the work to git. 
                using: git init
        6. git add . : adding all the files in the current repository to the version ctrl
        7. git commit: commit our changes to this current version. starting a new version 
        8. git commit -m "first commit": adding message 'first commit'
        while making first commit 

    deploy the app:
        