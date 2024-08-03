var faces=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
var cards=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
while(faces.length>0){
    var randomface = Math.floor(Math.random()*(faces.length-1))
    var randomcards = Math.floor(Math.random()*(cards.length-1))
    document.querySelector(".card"+String(cards[randomcards])+">img").src="./images/img"+String(faces[randomface])+".svg";
    faces = faces.filter((_,index)=>index!==randomface);
    cards = cards.filter((_,index)=>index!==randomcards);
    console.log(faces)
}
var flag = false;
var element=null;
var counter=0;
var elimination=8;
document.querySelectorAll("[class*='card'").forEach((value)=>{
    value.addEventListener("click",clickhandler)
})
function clickhandler(ele){
    var cur = ele.currentTarget;
    if(cur==element){
        return;
    }
    document.querySelector(".counter>span").innerText = String(++counter);
    cur.classList.toggle("rotate");
    if(!flag){
        flag=true;
        element=cur;
    }else{
        if(cur.children[0].getAttribute("src")===element.children[0].getAttribute("src")){
            cur.removeEventListener("click",clickhandler);
            element.removeEventListener("click",clickhandler);
            elimination--;
            var local = element;
            setTimeout(()=>{
                cur.style.opacity="0";
                local.style.opacity="0";

            },300);
        }else{
            setTimeout(()=>{
                cur.classList.toggle("rotate")
            },600);
            element.classList.toggle("rotate");
        }
        flag=false;
        element=null;
    }
    if(elimination==0){
        document.querySelector(".completed").classList.add("done");
    }
}