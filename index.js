setInterval(()=>{
let date=new Date();
let htime=date.getHours();
let mtime=date.getMinutes();
let stime=date.getSeconds();
let hrotate=30*htime+mtime/2;
let mrotate=6*mtime;
let srotate=6*stime;
document.getElementById("hour").style.transform=`rotate(${hrotate}deg)`
document.getElementById("mint").style.transform=`rotate(${mrotate}deg)`
document.getElementById("sec").style.transform=`rotate(${srotate}deg)`
},1000);