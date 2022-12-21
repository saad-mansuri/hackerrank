'use strict'

let observer = new MutationObserver((data)=>{
    console.log(data);
    // console.log(data[0].removedNodes);
})
observer.observe(elem,{
    childList : true,
    subtree:true,   
    attributeOldValue:true,
    characterData: true
})

function deleteDiv(){
    document.getElementById('elem').children[0].remove()
}    

function updateContent(e){  
    // console.log(e)
    document.getElementById('innerChild').children[0].className="hello";    
}    

function addAttr(){ 
    let setAttr = document.getElementsByClassName('divs')
    for(var i = 0; i<setAttr.length; i++){
        // console.log(setAttr[i]);
        setAttr[i].removeAttribute('contenteditable')
    }
}

// document.getElementById('updateContent').addEventListener('click', function(e){
//     console.log(e.target); 
// })