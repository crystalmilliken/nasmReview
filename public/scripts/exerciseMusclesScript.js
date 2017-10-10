 $("area").mouseover(function(a)
    {
        let target = $(a.target);
        let currentName = target.attr("alt");
        return data.map((x)=>{
            if(x.name == currentName){
                if(x.exercises){
                    document.getElementById("information").innerHTML = x.exercises;
                }else{
                    document.getElementById("information").innerHTML = "Pick a different muscle";
                }
            }
        })
    });

    