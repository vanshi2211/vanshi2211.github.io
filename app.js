const express = require("express");
const app =express();
const bodyParser = require("body-parser");
const https  = require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname + "/signup.html");

});
app.post("/", function(req,res)
{
    const name = req.body.Name;
    const email = req.body.email;
    var data = { //key-value pairs
        //members have to be an array of objects. but using a single object so one subscriber at a time.
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME :name
                }

            }
        ]

    };
    var jsonData = JSON.stringify(data); //convert the data in the form of a string like json. we will send this formatted data to the mailchimp server

    const url = "https://us12.api.mailchimp.com/3.0/lists/671f46453";
    const options = {
        method:"POST", //to succesfully process POST request we need authentication
        auth:"vanshi2211:4267cf50430f54888861f80642d22906-us12",
    }
    const request = https.request(url, options, function(response)
    {
        console.log(response.statusCode);
        if(response.statusCode === 200)
        {
            //res.send("ok");
             res.sendFile(__dirname + "/success.html");
        }
        else
        {
            //res.send("not ok.");
            /* res.se('<h1>Sorry!</h1><h3>There was some error in registering.</h3><a href="/">Try Again!</a>'); */
            res.sendFile(__dirname + "/failure.html");
        }
        response.on(data, function(data)
        {
            console.log(JSON.parse(data));
        })
        
        
    });
    request.write(jsonData);
    request.end();
    //res.send()
});
app.listen(process.env.PORT || 3000,function(req,res){
    console.log('server is running on port 3000');
});

//mailchimp apiKey: 4267cf50430f54888861f80642d22906-us12

//list key:
//audience id: 671f464538 it will help mailchimp to identify the list you want your sub to

// "https://us12.api.mailchimp.com/3.0/ping"