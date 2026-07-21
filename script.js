function start(){

document.querySelector(".card").innerHTML = `

<h1>
Hey Zhenyi ❤️
</h1>


<p>

I hope you dont mind its my first time trying this gotta put my programming skills to work

<br><br>

Made you a little surprise

You make me the happiest boy hehe

<br><br>

I hope to make you the happiest girl too ❤️

</p>


<button onclick="letter()">

Continue 💌

</button>

`;

flowers();

}




function letter(){

document.querySelector(".card").innerHTML = `


<h1>
A Letter For You 💌
</h1>


<p>

Dear Zhenyi ❤️

<br><br>

Thank you for being someone special in my life.

I appreciate everything you do for me, every conversation,
and every memory we share youre the best girlfriend.

<br><br>

you mean the most to me

<br><br>

Love,
<br>

Collin ❤️

</p>


<button onclick="gallery()">

Next 📸

</button>


`;

flowers();

}





function gallery(){

document.querySelector(".card").innerHTML = `


<h1>
Our Memories ❤️
</h1>


<img src="images/photo1.jpg">


<img src="images/photo2.jpg">



<button onclick="question()">

One More Thing 💕

</button>


`;

flowers();

}





function question(){

document.querySelector(".card").innerHTML = `


<h1>
Zhenyi ❤️
</h1>


<p>

Will you go on a date with me?

<br><br>

📅 1 August

<br>

🕖 7:00 PM

<br>

📍 Surprise

</p>



<button onclick="yes()">

YES ❤️

</button>


<button id="no" onmouseover="moveNo()">

NO 😜

</button>


`;

flowers();

}





function moveNo(){

let button=document.getElementById("no");


button.style.position="absolute";


button.style.left=
Math.random()*80+"%";


button.style.top=
Math.random()*80+"%";


}





function yes(){

document.querySelector(".card").innerHTML = `


<h1>
YAY!! ❤️🎉
</h1>


<p>

You better say yes ❤️

<br><br>

I love you

<br><br>

See you on 1 August 💕

<br><br>

Love,
<br>

Collin ❤️

</p>


`;


confetti();

}





function flowers(){

for(let i=0;i<20;i++){

let flower=document.createElement("div");


flower.innerHTML="🌸";


flower.className="petal";


flower.style.left=
Math.random()*100+"%";


flower.style.animationDelay=
Math.random()*5+"s";


document.body.appendChild(flower);


}

}





function confetti(){

for(let i=0;i<50;i++){

let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="absolute";


heart.style.left=
Math.random()*100+"%";


heart.style.top=
Math.random()*100+"%";


heart.style.fontSize="25px";


document.body.appendChild(heart);


}

}
