var textarea = document.getElementById('what');
var form = document.getElementsByTagName('form')[0];

textarea.addEventListener('change',function(){
	form.submit();
}, false);

var com = Math.floor((Math.random()*3)+1);
// 1 = Rock, 2 = Paper, 3 = Scissors

var what = location.search;
what = what.replace('?what=', '');
what = what.replace(/\+/g, ' ');
what = decodeURIComponent(what);
//textarea.value = what;
what = what.toUpperCase();
var rock = what.search("ROCK");
var paper = what.search("PAPER");
var scissors = what.search("SCISSORS");

var player = document.getElementById('player');
var comtxt = document.getElementById('com');
var result = document.getElementById('result');


if(rock != -1)
{
	player.innerHTML = "You played: Rock";
	switch(com)
	{
		case 1:
		comtxt.innerHTML = "Computer played: Rock";
		result.innerHTML = "It's a tie!";
		result.style.backgroundColor = '#FFFF80';
		break;
		case 2:
		comtxt.innerHTML = "Computer played: Paper";
		result.innerHTML = "The computer wins.";
		result.style.backgroundColor = '#FF6666';
		break;
		case 3:
		comtxt.innerHTML = "Computer played: Scissors";
		result.innerHTML = "You win!";
		result.style.backgroundColor = '#94FF70';
		break;
	}
}
else if(paper != -1)
{
	player.innerHTML = "You played: Paper";
	switch(com)
	{
		case 1:
		comtxt.innerHTML = "Computer played: Rock";
		result.innerHTML = "You win!";
		result.style.backgroundColor = '#94FF70';
		break;
		case 2:
		comtxt.innerHTML = "Computer played: Paper";
		result.innerHTML = "It's a tie!";
		result.style.backgroundColor = '#FFFF80';
		break;
		case 3:
		comtxt.innerHTML = "Computer played: Scissors";
		result.innerHTML = "The computer wins.";
		result.style.backgroundColor = '#FF6666';
		break;
	}
}
else if(scissors != -1)
{
	player.innerHTML = "You played: Scissors";
	switch(com)
	{
		case 1:
		comtxt.innerHTML = "Computer played: Rock";
		result.innerHTML = "The computer wins.";
		result.style.backgroundColor = '#FF6666';
		break;
		case 2:
		comtxt.innerHTML = "Computer played: Paper";
		result.innerHTML = "You win!";
		result.style.backgroundColor = '#94FF70';
		break;
		case 3:
		comtxt.innerHTML = "Computer played: Scissors";
		result.innerHTML = "It's a tie!";
		result.style.backgroundColor = '#FFFF80';
		break;
	}
}
else
{
	player.innerHTML = "You played: ";
	comtxt.innerHTML = "Computer played: ";
	result.innerHTML = "Winner: ";
	result.style.backgroundColor = 'white';
}
