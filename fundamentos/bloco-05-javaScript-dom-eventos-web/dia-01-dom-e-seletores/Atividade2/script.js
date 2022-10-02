const administrador = document.getElementById("header-container");
administrador.style.backgroundColor = 'rgb(0, 176, 105)';

const emergency = document.getElementsByClassName('emergency-tasks')[0];
emergency.style.backgroundColor = 'rgb(255,218,185)';

const emergencyTaksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTaksHeaders.length; index += 1) {
    emergencyTaksHeaders[index].style.backgroundColor = 'rgb(165,25,243)';
}

const noEmergencyTaks = document.querySelector('.no-emergency-tasks');
noEmergencyTaks.style.backgroundColor = 'rgb(255,215,0)';

const noEmergencyTaksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTaksHeaders.length; index += 1) {
    noEmergencyTaksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = 'rgb(47,79,79)';


