javascript:(function (){Qr=prompt('What URL do you want to Coralize?%27,location.href);if(Qr){%20if(Qr.replace(%27http://%27,%27%27).indexOf(%27/%27)==-1)Qr=Qr+%27/%27;location.href=Qr.replace(/^http\:\/\/([^\/\@]+)\/(?:)/,%27http://%27+%27$1%27.replace(%27\:%27,%27.%27)+%27.nyud.net:8090/%27);}})()
