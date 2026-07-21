function continuePage(){


document.body.innerHTML = `

<div class="card">


<h1>Zhenyi ❤️</h1>


<p>

I have one important question...

<br><br>

Will you go on a date with me? 💕

<br><br>

📅 1 August

<br>

🕖 7:00 PM

<br>

📍 Surprise

</p>



<button onclick="yesButton()">
YES ❤️
</button>


<button id="noButton" onmouseover="moveButton()">
NO 😜
</button>



</div>

`;

}



function moveButton(){


let button =
document.getElementById("noButton");


button.style.position="absolute";


button.style.left =
Math.random()*80 + "%";


button.style.top =
Math.random()*80 + "%";


}




function yesButton(){


document.body.innerHTML = `


<div class="card">


<h1>
YAY!! ❤️🎉
</h1>


<p>

u can only say yes ❤️

<br><br>

I can't wait to spend this special day with you.

<br><br>

I hope we make more amazing memories together.

<br><br>

Love,
<br>

Collin ❤️

</p>


</div>


`;


createHearts();


}




function createHearts(){


for(let i=0;i<30;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="absolute";


heart.style.left=
Math.random()*100+"%";


heart.style.top=
Math.random()*100+"%";


heart.style.fontSize=
Math.random()*30+15+"px";


document.body.appendChild(heart);


}

}
