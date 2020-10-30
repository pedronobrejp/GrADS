'reinit'


'sdfopen C:\grads\2011\omega.nc'
'sdfopen C:\grads\2011\uwnd.nc'
'sdfopen C:\grads\2011\vwnd.nc'


t=1
while (t<=12) 
'set t 't

'q time'
res=subwrd(result,3)

'set display color white'

'c'


*****************************************  
             
'set lon -90 30'
'set lat -60 30'
'set lev 200'






*****************************************
* Estes são tons de AZUL

'set rgb 16   0   0 255'
'set rgb 17  20  20 255'
'set rgb 18  40  40 255'
'set rgb 19  60  60 255'
'set rgb 20  80  80 255'
'set rgb 27 100 100 255'

* Estes são tons de VERMELHO
'set rgb 28 255 100 100'
'set rgb 21 255  80  80'
'set rgb 22 255  60  60'
'set rgb 23 255  40  40'
'set rgb 24 255  20  20'
'set rgb 25 255   0   0'


*****************************************

'set clevs     -0.30 -0.25 -0.20 -0.15 -0.10  0 0.10 0.15 0.20 0.25 0.30'
'set ccols       25 24 23 22 21 28 27 20 19 18 17 16'
*'set cmax -0.1'  
*'set cmin -0.30'
*'set cint 0.5 '

***************************************

'set mpdset brmap_hires'

'set map 1 1 1'

'set grads off'

'set grid on 2 51 '

*'set grid off'

'set gxout shaded'

'set gxout stream'

'set cthick 1'

'set strmden 4' 


'd omega'

'run cbarn' 

*'set gxout contour'


*****************************************  
             
'set lon -90 30'
'set lat -60 30'
'set lev 200'

'd uwnd.2;vwnd.3'

*'d mag(uwnd.2,vwnd.3)'


 

*'draw title LC e Omega em 925 hPa 'res'' 

'printim C:\grads\imagens\'res'.jpg'


t=t+1

endwhile















