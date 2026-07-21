function start(){

document.querySelector(".card").innerHTML = `

<h1>
Hey Zhenyi ❤️
</h1>


<p>

I hope you don't mind, it's my first time trying this.
I had to put my programming skills to work hehe.

<br><br>

I made you a little surprise.

<br><br>

You make me the happiest boy, and I hope I can make you the happiest girl too ❤️

</p>


<button onclick="letter()">

Continue 💌

</button>

`;

}




function letter(){

document.querySelector(".card").innerHTML = `


<h1>
A Letter For You 💌
</h1>


<p>

Dear Zhenyi ❤️

<br><br>

Thank you for being someone so special in my life.

I appreciate everything you do for me, every conversation we have,
and every memory we create together.

<br><br>

You are the best girlfriend I could ask for,
and you mean the most to me.

<br><br>

Love,
<br>

Collin ❤️

</p>


<button onclick="gallery()">

Next 📸

</button>


`;

}





function gallery(){

document.querySelector(".card").innerHTML = `


<h1>
My favourite pictures of us ❤️
</h1>


<img src="photo1.jpg">


<img src="photo2.jpg">



<button onclick="question()">

One More Thing 💕

</button>


`;

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

Thank you for saying yes Zhenyi ❤️

<br><br>

I love you and I can't wait to spend this special day with you.

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
