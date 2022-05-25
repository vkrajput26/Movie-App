//https://www.omdbapi.com/?apikey=9b3377fb&t=thor
//https://www.omdbapi.com/?apikey=9b3377fb&t=thor
let not=document.getElementById("not-found")

let container=document.getElementById("container")
function movies(){
     let x=document.getElementById("quary").value
     let url=`https://www.omdbapi.com/?apikey=9b3377fb&s=${x}`;
    fetch(url).then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res)
        let data=res.Search
        append(data)
    })
    .catch(function(err){
        console.log(err)
      
    })
}

    function append(data){
        console.log(data)
       container.innerHTML=null
       not.innerHTML=null
           
            if(data==undefined)
            {
              
                let img=document.createElement("img");
                img.src="https://media2.giphy.com/media/C21GGDOpKT6Z4VuXyn/200w.webp?cid=ecf05e475iqeq3h19kd0zqx1w6y1gpg9yog61xigjj89cimk&rid=200w.webp&ct=g"
           
                not.append(img)
            }
        
        data.forEach(function(el){


          
            console.log(el)
            data=null
            let box=document.createElement("div");
            let image=document.createElement("img")
            image.src=el.Poster

            var title=document.createElement("p")
            title.innerText=el.Title;
            title.addEventListener("click",function(){
                myfun(el)
            })
            title.style.textAlign="center"
            title.setAttribute("id","title")

            let year=document.createElement("p")
            year.innerText=el.Year
            year.style.textAlign="center"
            year.setAttribute("id","year")

            box.append(image,title,year)
            // document.getElementById("container").append(box)
            container.append(box)
            
        })
    
    }
//Movie-Details



let Details=document.getElementById("Movie-Details")


  function  myfun(data)
  {
      let value=(data.Title)
      console.log(value)
    let link=`https://www.omdbapi.com/?apikey=9b3377fb&t=${value}`;
      fetch(link).then(function(res){
          return res.json();
      })
      .then(function(res){
        //  console.log(res)
          adding(res)
      })
      .catch(function(err){
          console.log("err",err)
      })

  }

  function adding(res){
    console.log(res.imdbRating)
    let box2=document.createElement("div")
    box2.style.color="white"
    box2.setAttribute("id","movieDetailsBox")

    let Poster=document.createElement("img");
    Poster.src=res.Poster;

    let name=document.createElement("p")
    name.innerText=res.Title;

    let actor=document.createElement("p")
    actor.innerText=res.Actors
    console.log(actor)

    let director=document.createElement("p");
    director.innerText=res.Director;

    let lang=document.createElement("p");
    lang.innerText=res.Language;

    let date=document.createElement("p")
    date.innerText=res.Released;

    let rating=document.createElement("p");
    rating.innerText=res.Rating;
    box2.append(name,actor,director,lang,date,rating)
    
    Details.append(Poster,box2)
  }