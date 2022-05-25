//https://www.omdbapi.com/?apikey=9b3377fb&t=thor
//https://www.omdbapi.com/?apikey=9b3377fb&t=thor


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
        data.forEach(function(el){
            console.log(el)
            data=null
            let box=document.createElement("div");
            let image=document.createElement("img")
            image.src=el.Poster

            let title=document.createElement("p")
            title.innerText=el.Title;
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