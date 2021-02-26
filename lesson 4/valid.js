const validPar = {
    name: {
        pattern: /^[a-zа-яё]+$/i,
        error: 'Имя должно содержать только буквы'
    },
    phone: {
        pattern: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
        error: 'Телефон пишите по шаблону +7(000)111-2222'
    },
    email:{
        pattern: /^[\w\.-]+@\w+\.[a-z]{2,4}$/i,
        error: 'Email выглядит как fdsfas@dfsf.ru'
    }
};


var myname = document.querySelector('#name');
var myphone = document.querySelector('#phone');
var myemail = document.querySelector('#email');

document.getElementById('val-btn').addEventListener('click', () => {


    function check(entered, data) {
        let test = entered.test(data.value);
        if (test) {
            data.classList.remove('false');
            data.nextElementSibling.classList.add('hidden');
        } else {
            data.classList.add('false');
            data.nextElementSibling.classList.remove('hidden');
        }
    }
    check(myname,validPar.name.pattern,);
    check(myphone,validPar.phone.pattern);
    check(myemail,validPar.email.pattern,myemail);


    document.getElementById('res-btn').addEventListener('click', () => {
        myname.classList.remove('false');
        myphone.classList.remove('false');
        myemail.classList.remove('false');
    });
});
