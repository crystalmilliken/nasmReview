  $("area").mouseover(function(a)
    {
        let target = $(a.target);
        let currentName = target.attr("alt");
    return data.map((x)=>{
            if(x.name == currentName){
                console.log(x.name)
                document.getElementById("information").innerHTML = x.description;
            }
        })
    
});