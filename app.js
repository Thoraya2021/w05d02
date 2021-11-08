const express=require ("express");
const app=express ()
const port=3000 ;
app.use(express.json()) ;


const movies=[{id:1, name:"walking",isfav:false, isdelete:true },
{id:2, name:"walking",isfav:false, isdelete:true },
{id:3, name:"walking",isfav:false, isdelete:true }];

//to show all items arry
app.get("/movies",(req,res)=>{
    res.status(200);
    res.json(movies) ;
    }) ;

    app.get("/movie_id",(req,res)=>  {

   const id = req.query.id;
   const movie = movies.find((movie)=>

   movie.id===Number(id));
   res.status(200);
    res.json(movie) ;
    }) ;

   
   
   
  




            app.listen (port,() => {
                console.log(`server is running ${port}`);
                });