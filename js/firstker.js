 
$(document).ready(function() {
  $(".skitter-large").skitter();
});

var txtArea = document.getElementById("exampleFormControlTextarea1");
var addBtn = document.getElementById("myBtn");
var myBtn = document.getElementById("btn2");

var commentContainer=[]

if(localStorage.getItem("commentContainer")==null){
    
    commentContainer=[]
}
else{
    productContainer= JSON.parse(localStorage.getItem("commentContainer"))
     displayData()
}

addBtn.onclick = function(){
    
    addmore()
}

myBtn.onclick = function(){
    
    addProduct();
    displayData();
    
}

function addProduct(){
    
    var comments ={
        
    
comment:txtArea.value
    
    }
    commentContainer.push(comments);
localStorage.setItem("commentContainer",JSON.stringify(commentContainer))
    }

function displayData(){
    
    var temp ="";
    for(var i=0 ; i<commentContainer.length;i++){
        
        temp+=`<div class="col-md-4">
                    <div class="comment">
                    <h3>`+commentContainer[i].comment+`</h3>
                    </div>
                </div>`
    }
        document.getElementById("myRow").innerHTML = temp;

    
}
 function addmore(){
     document.getElementById("demo").innerHTML="Struggling with chronic pain can rob you of your hope. We created Nura to restore it. Our physicians and pain specialists have pioneered Precision Pain Management to bring you lasting"
 }
