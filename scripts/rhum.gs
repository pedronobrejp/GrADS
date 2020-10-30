'reinit'


'sdfopen C:\grads\2008.2\rhum.nc'
'sdfopen C:\grads\2008.2\uwnd.nc'
'sdfopen C:\grads\2008.2\vwnd.nc'


t=1
while (t<=56) 
'set t 't

'q time'
res=subwrd(result,3)

'set display color white'

'c'


*****************************************  
             
'set lon -90 30'
'set lat -60 30'
'set lev 300'




*****************************************
* Estes são tons de AZUL
'set rgb 16   0   0 255'
'set rgb 17  55  55 255'
'set rgb 18 110 110 255'
'set rgb 19 165 165 255'
'set rgb 20 220 220 255'
* Estes são tons de VERMELHO
'set rgb 21 255 220 220'
'set rgb 22 255 165 165'
'set rgb 23 255 110 110'
'set rgb 24 255  55  55'
'set rgb 25 255   0   0'
*****************************************
*light yellow to dark red
'set rgb 21 255 250 170'
'set rgb 22 255 232 120'
'set rgb 23 255 192 60'
'set rgb 24 255 160 0'
'set rgb 25 255 96 0'
'set rgb 26 255 50 0'
'set rgb 27 225 20 0'
'set rgb 28 192 0 0'
'set rgb 29 165 0 0'
'set rgb 50 255 255 255'
******************************************
'set clevs       0 10 20 30 40 50 60 70 80 90 100'
'set ccols       27 26 25 24 23 22 21 20 19 18 17 16  '
*'set cmax 50'
*'set cmin 20'
*'set cint 3'

***************************************

'set mpdset brmap_hires'

'set map 1 1 1'

'set grads off'

'set grid on 2 51 '

*'set grid off'

'set gxout shaded'

'set gxout stream'

'set cthick 1'

'set strmden 5' 


'd rhum'

'run cbarn' 

'set gxout contour'


*****************************************  
             
'set lon -90 30'
'set lat -60 30'
'set lev 300'

'd uwnd.2;vwnd.3'

'draw title LC e UR em 300 hPa 'res'' 

'printim C:\grads\imagens\'res'.jpg'


t=t+1

endwhile















