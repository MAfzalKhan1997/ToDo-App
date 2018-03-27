function add(){
    var val = document.getElementById('val');
    var list= document.getElementById('list');
    var li= document.createElement('li');
    var btn=document.createElement('button');
    var btnText = document.createTextNode('');
    var btn2= document.createElement('button');
    var btnText2 = document.createTextNode('');
    btn.appendChild(btnText);//it takes variable
    btn2.appendChild(btnText2);

    btn.className="trashbutton";
    btn.className += " glyphicon glyphicon-trash butt";
    btn.onclick=function(){
        var li=this.parentNode;
        var ol =li.parentNode;
        ol.removeChild(li);
    }

    btn2.className="editbutton";
    btn2.className += " glyphicon glyphicon-edit butt";
    btn2.onclick=function(){
        var li=this.parentNode;
        var text=prompt();
        li.innerHTML=text;
        li.appendChild(btn);
        li.appendChild(btn2);
    }

var text=document.createTextNode(val.value);
li.appendChild(text)
li.appendChild(btn)
li.appendChild(btn2)
list.appendChild(li)
val.value="";
}

function delall(){
    alert("Sure to Delete All?");
    document.getElementById("list").innerHTML="";
}