'reinit'


'sdfopen c:/NIVEIS/uwnd.nc'
'sdfopen c:/NIVEIS/vwnd.nc'

t=1
while (t<=12) 
'set t 't

'q time'
res=subwrd(result,3)

'set display color white'

'c'

****************************************  
             
'set lon -90  30'
'set lat -60  30'
'set lev 200'

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
'set clevs       0 10 15 20 25 30 25 30 35'
'set ccols     0 21 22 23 24 25 26 27 28 29 '
*'set cmax 50'
*'set cmin 20'
*'set cint 3'

***************************************

'set mpdset brmap_hires'

'set map 1 1 1'

'set grads off'

'set grid on 2 1 2'

*'set grid off'

'set gxout shaded'


'set gxout stream'

'set cthick 1'

'set strmden 1'

'd mag(uwnd,vwnd.2)'

'run cbarn'

'set gxout stream'

'set cthick 1'

'set strmden 4'

'd uwnd;vwnd.2'

*'draw title LC 250 hPa 'res'' 

'printim C:\grads\imagens\'res'.jpg'


t=t+1

endwhile

















