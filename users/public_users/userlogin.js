/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  //******************************************************************* */
  
  window.addEventListener('DOMContentLoaded', (event) => {
   
    let user_name_data = localStorage.getItem('user-data')? JSON.parse(localStorage.getItem('user-data')) : false ;
    if(user_name_data){

      //show data in single page

      
      document.getElementById("profile_name").textContent = user_name_data.first_name + user_name_data.last_name ;
      document.getElementById("profile_phone").textContent = user_name_data.mobile;
      document.getElementById("profile_start_date").textContent = user_name_data.start_date;
      document.getElementById("profile_end_date").textContent = user_name_data.end_date;
      document.getElementById("profile_level").textContent = user_name_data.level;
    }else{
      document.body.style.display = 'none';
    }

});


// *********************************************************************

 exit_button =  document.getElementById('exit');
 
 exit_button.addEventListener( 'click' , exitPage);
function exitPage(){
  localStorage.clear();
  document.location.replace('/');
}

// *******************************************************************
let date =  document.getElementById('show-date');
let time =  document.getElementById('show-time');
let day = document.getElementById('show-day');

date.textContent = new Date().toLocaleDateString('fa-IR');

var currentdate = new Date();
var datetime = + currentdate.getHours() + " : " + currentdate.getMinutes() + " : " + currentdate.getSeconds();
time.textContent = datetime;

week = new Array("يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه");

day.innerText = week[new Date().getDay()];