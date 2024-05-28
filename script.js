const slider=document.querySelector('.slider');
const length=document.querySelector('.length');

const upper=document.querySelector('#upper');
const lower=document.querySelector('#lower');
const number=document.querySelector('#number');
const symbol=document.querySelector('#symbol');

const generateButton=document.querySelector('.btn-generate');

const passwordDisplay=document.querySelector('.password');
const copyButton=document.querySelector('.copypass');

slider.addEventListener("input",()=>{
    length.textContent=slider.value
})

const characters={
    uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase:'abcdefghijklmnopqrstuvwxyz',
    number:'0123456789',
    symbol:'!@#$%^&*_~?<>'
};

const createPassword=(options)=>{
    let str='';

    if(options.uppercase) str+=characters.uppercase;
    if(options.lowercase) str+=characters.lowercase;
    if(options.number) str+=characters.number;
    if(options.symbol) str+=characters.symbol;

    let pass='';
    for (let i = 0; i < options.length; i++) {
        const randomindex=Math.floor(Math.random()*str.length);
        pass+=str.charAt(randomindex);
    }
    console.log(pass)
    return pass;
}

generateButton.addEventListener("click",()=>{
    const passwordOptions={
        length:slider.value,
        uppercase:upper.checked,
        lowercase:lower.checked,
        number:number.checked,
        symbol:symbol.checked
    };

    const password=createPassword(passwordOptions)
    passwordDisplay.textContent=password;
})

copyButton.addEventListener('click', () => {
    const passwordToCopy = passwordDisplay.textContent;
    if (passwordToCopy) {
        navigator.clipboard.writeText(passwordToCopy);
        alert('Password copied to clipboard!');
    }
});