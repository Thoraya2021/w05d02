const express = require ('express');
const app=express ()
const port=3000 ;





app.use(express.json()) ;

const fs = require("fs");


let movies = [];


//to show all items arry
app.get("/movies",(req,res)=> {
    res.status(200);
    res.json(movies) ;
    }) ;

    
    app.get("/movie/:id",(req,res)=> {
        const found = movies.find((found) => found.id === parseInt(req.params.id));
      

        if(found)
        {

            res.json(movies.filter(movie=>movie.id===parseInt(req.params.id)));
        }
        else
        {

            res.status(400).json({msg:`movie not found`});
        
        
        }
      });

            

      
app.post("/movies", (req, res) => {
    const {id,name,isfav}=req.body;

movies.push({id:movies.length+1+"",
name:name,
isfav:isfav,
isdelete:false
})

    fs.readFile("./read.json", (err, data) => {
        let movies = [];
          movies = JSON.parse(data.toString());
        });
  ​

  app.put("/movies/:id", (req, res) => {
    const updated = movies.map((ele) => {
      if (ele.id == req.params.id) {
        return {
          id: ele.id,
          name: req.body.name,
          isFav: req.body.isFav,
          isdelete: req.body.isDeleted,
        };
      } else return ele;
    });
    fs.writeFile("./movies.json", JSON.stringify(updated), (err, data) => {});
    let filter = movies.filter((ele) => ele.isdelete === "false");
    res.json(filter);
  });
  
  app.delete("/delete/:id", (req, res) => {
    let delet = movies.map((ele) => {
      if (ele.id == req.params.id) {
         
        return {
          id: ele.id,
          name: ele.name,
          isfav: ele.isFav,
          isdelete: "true"
        };
      } else return ele;
    });
    let filter = delet.filter((ele) => ele.isdelete === "false");
    fs.writeFile("./movies.json", JSON.stringify(delet),(err,data)=>{});
    res.json(filter);
  });
  


            app.listen (port,() => {
                console.log(`server is running ${port}`)
            });