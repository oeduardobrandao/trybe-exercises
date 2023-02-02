const header = document.getElementById('header-container');
header.style.backgroundColor = '#00b069';
header.style.color = 'white';

const emergencyTitles = document.querySelectorAll('.emergency-tasks h3');
emergencyTitles[0].style.backgroundColor = '#a500f3';
emergencyTitles[1].style.backgroundColor = '#a500f3';

const emergencyDivs = document.querySelectorAll('.emergency-tasks div');
emergencyDivs[0].style.backgroundColor = '#ff9f84';
emergencyDivs[1].style.backgroundColor = '#ff9f84';

const nonEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');
nonEmergencyTitles[0].style.backgroundColor = '#232525';
nonEmergencyTitles[1].style.backgroundColor = '#232525';
nonEmergencyTitles[0].style.color = 'white';
nonEmergencyTitles[1].style.color = 'white';

const nonEmergencyDivs = document.querySelectorAll('.no-emergency-tasks div');
nonEmergencyDivs[0].style.backgroundColor = '#f9db5e';
nonEmergencyDivs[1].style.backgroundColor = '#f9db5e';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533';
footer.style.color = 'white';