
let sinupForm = document.getElementById('sinup-form');
let selectValue = document.getElementById('sinup-select')

sinupForm.addEventListener('submit' , sendForm);

function sendForm(e){
    e.preventDefault();
    let q = confirm(' توجه !!! ' +'  در صفحه ی بعدی نام و شماره تلفن خود را وارد کنید . در صورت وارد نکردن , رمز ورود به سایت برای شما ارسال نخواهد شد .' + 'رمز ورود به سایت کمتر از 24 ساعت بعد از پرداخت برای شما ارسال خواهد شد');

    if(q){
        switch (selectValue.value) {
            case '1':
                window.location.replace('https://me.sizpay.ir/Razibours/3990000100046DD8B6D3CFF9CD9')
            break;
    
            case '2':
                window.location.replace('https://me.sizpay.ir/Razibours/49900001000BE24CD805D0F0B99')
            break;
        
            case '3':
                // window.location.replace('https://me.sizpay.ir/Razibours/190000010001657F5AE2CC77E0C');
                alert(" با عرض پوزش این بسته در دسترس نمیباشد  ")
            break;
    
            case '4':
                // window.location.replace('https://me.sizpay.ir/Razibours/250000010001443DD18A3C8AA73')
                alert(" با عرض پوزش این بسته در دسترس نمیباشد  ")
            break;
    
            case '5':
                // window.location.replace('https://me.sizpay.ir/Razibours/290000010004B5E9C6847DEDE60')
                alert(" با عرض پوزش این بسته در دسترس نمیباشد  ")
            break;

           case '6':
                window.location.replace('https://me.sizpay.ir/Razibours/100001000314B40BB958B603D')
            break;
    
            
        }
        
        document.getElementById('sinup-alert-s').classList.remove('d-none');
        document.getElementById('sinup-spinner').classList.remove('d-none');

        setTimeout(()=>{
            document.getElementById('sinup-alert-s').classList.add('d-none');
            document.getElementById('sinup-spinner').classList.add('d-none');
        } , 3000)
    }else{
        null
    }
   

    
    
}



