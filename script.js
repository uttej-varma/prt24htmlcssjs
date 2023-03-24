let english=document.getElementById("englishMarks");
let maths=document.getElementById("mathsMarks");
let physics=document.getElementById("physicsMarks");
let chemistry=document.getElementById("chemistryMarks");
let computer=document.getElementById("computerMarks");
let submit=document.getElementById("gradeCalButton");
let totalContainer=document.getElementById("total");
let averageContainer=document.getElementById("average");
let gradeContainer=document.getElementById("grade")
let arr=new Array(5).fill(0);
let test2=true;
function check(urr){
   for(let i=0;i<urr.length;i++)
   {
    if(urr[i]>100 || urr[i]<0)
    {
        test2=false;
        return;
    }
   }
   test2=true;
   return;
}
function calc(urr){
    let total=0;
    let average=0;
   for(let i=0;i<urr.length;i++)
   {
        total=total+parseFloat(urr[i]);
   }
   average=total/5;
   return [total,average];
}
function grade(total)
{
    total=parseFloat(total);
   let percent=(total/500)*100;
    if(percent>=90)
    {
        return "A";
    }
    else if(percent<=89 && percent>=80)
    {
        return "B";
    }
    else if(percent<=79 && percent>=70)
    {
        return "C";
    }
    else if(percent<=69 && percent>=60)
    {
        return "D";
    }
    else {
        return "F";
    }

}
english.addEventListener("change",(e)=>{
    arr[0]=e.target.value; 
});
maths.addEventListener("change",(e)=>{
    arr[1]=e.target.value;
});
physics.addEventListener("change",(e)=>{
    arr[2]=e.target.value;
});
chemistry.addEventListener("change",(e)=>{
    arr[3]=e.target.value;
})
computer.addEventListener("change",(e)=>{
    arr[4]=e.target.value;
})
submit.addEventListener("click",()=>{
    check(arr);
    if(test2===false)
    {
        alert("please enter marks in range of 0-100")
    }
    else{
        let test3=true;
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]<=35)
            {
                test3=false;
                break;
            }
        }
        if(test3===false){
            [total,average]=calc(arr);
            let totaldiv=document.createElement("div");
            let averagediv=document.createElement("div");
            let gradediv=document.createElement("div");
            totaldiv.innerHTML=`TotalMarks:${total}`;
            averagediv.innerHTML=`Your average marks are:${average}`;
            gradediv.innerHTML=`you got F grade`;
            totalContainer.appendChild(totaldiv);
            averageContainer.appendChild(averagediv);
            gradeContainer.appendChild(gradediv);
        }
        else{
            [total,average]=calc(arr);
            let totaldiv=document.createElement("div");
            let averagediv=document.createElement("div");
            let gradediv=document.createElement("div");
            totaldiv.innerHTML=`TotalMarks:${total}`;
            averagediv.innerHTML=`Your average marks are:${average}`;
            totalContainer.appendChild(totaldiv);
            averageContainer.appendChild(averagediv);
            let ans=grade(total);
            console.log(ans);
            
            gradediv.innerHTML=`you got ${ans} grade`;
            gradeContainer.appendChild(gradediv);

        }

    }
   
})