const button = document.querySelector('.button');
button.addEventListener('click', myfunc );
document.addEventListener('DOMContentLoaded', myfunc);

async function myfunc(){
    
    const thejoke = await fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept' : 'application/json',
        }
    });
    
    const jokeob= await thejoke.json();
    const joketext=document.querySelector('.joketext');
    joketext.innerHTML=jokeob.joke;

}