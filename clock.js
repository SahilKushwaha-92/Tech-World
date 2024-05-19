setInterval(() => {
   d = new Date(); //object of date()
   hr = d.getHours();
   min = d.getMinutes();
   sec = d.getSeconds();
   hr_rotation = 30 * hr + min / 2; //converting current time
   min_rotation = 6 * min;
   sec_rotation = 6 * sec;

   getHours.style.transform = 'rotate(${hr_rotation}deg)';
   getMinutes.style.transform = 'rotate(${min_rotation}deg)';
   getSeconds.style.transform = 'rotate(${sec_rotation}deg)';
}, 1000);