function copy(text){
    var input =document.createElement('input');
    document.body.appendChild(input)
    input.value = text
    input.select();
    document.execCommand('copy',false);
    input.remove();
}

function copy_mail(){
    copy('udarshanoodit@gmail.com')
    window.scrollTo(0,0);
    show_alert()
}

function show_alert(){
    document.getElementById('email-alert').classList.remove('hide');
}

function hide_alert(){
    document.getElementById('email-alert').classList.add('hide');
}