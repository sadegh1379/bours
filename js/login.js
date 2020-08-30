let form = document.getElementById("login-form");
let userName = document.getElementById("name");
let userPass = document.getElementById('pass');

const local_users = [
    {
        name : 'sadegh016',
        first_name : ' صادق ',
        last_name : 'اکبری',
        mobile : '09376770472',
        start_date : '1399/02/04',
        start_time : '20:01:26',
        pay_money : '399000 T',
        end_date : '1399/07/05',
        pass : '0472',
        type:'vip-m',
        level : '100'
    },{
        name : 'mohammad816',
        first_name : 'محمد تقی ',
        last_name : 'صافی',
        mobile : '09176212671',
        start_date : '1399/06/05',
        end_date : '1399/07/05',
        start_time : '18:01:26',
        pay_money : '499000 T',
        pass : '2671',
        type:'vip-m',
        level : '100'
    },{
        name : 'azita77',
        first_name : ' آزیتا ',
        last_name : 'خسروی',
        mobile : '09012409501',
        start_date : '1399/06/05',
        end_date : '1400/07/05',
        start_time : '18:01:26',
        pay_money : '499000 T',
        pass : '8080',
        type:'vip-m',
        level : '5000'
    }
]




form.addEventListener('submit' , submit);
function submit(e){
    e.preventDefault();
    let find_user_data;
    user = userName.value.toLowerCase();
    password = userPass.value.toLowerCase();

    let find_user = false;
    local_users.map((item)=>{
        if(item.name == user & item.pass == password){
            find_user = true;
             find_user_data = item
            
        }
    })
    console.log(find_user);

    
    if(find_user){
        document.getElementById('login-alert-s').classList.remove('d-none');
        
        // time out for get prevent page***
        setTimeout(()=>{
            window.localStorage.setItem("user-data" , JSON.stringify(find_user_data))
            window.location.replace('users/public_users/userlogin.html');
            
        } , 3000);
       
    }else{
        document.getElementById('login-alert-d').classList.remove('d-none');
    }

    // hide alerts

    setTimeout(()=>{
        document.getElementById('login-alert-d').classList.add('d-none');
        document.getElementById('login-alert-s').classList.add('d-none');
    } , 3000)


   
    
    // console,log(text);
}