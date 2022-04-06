let cookie = prompt('Emter the Session ID\n\nExample: PHPSESSID=fgb645j7fkjjvgkfuk65ofdf');
document.cookie = `${cookie};path=/`;
