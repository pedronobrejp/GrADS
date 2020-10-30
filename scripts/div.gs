'reinit'


'sdfopen C:\grads\s2004\outubro\uwnd.nc'
'sdfopen C:\grads\s2004\outubro\vwnd.nc'

t=41
while (t<=44) 
'set t 't

'q time'
res=subwrd(result,3)

'set display color white'

'c'

*****************************************  
             
'set lon -90  30 '
'set lat -60 60'
*'set lev 200'
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
*****************************************
*'set clevs  -6 -5 -4 -3 -2 -1  0  1  2  3  4  5  6'
*'set ccols    15 16 17 18 19 20 21 22 23 25 26 27'
*'set cmax  6'
*'set cmin -6'
*'set cint  0'

***************************************

'set mpdset brmap_hires'

'set map 1 1 1'

'set grads off'

'set grid on 2 1 2'

*'set grid off'

'set gxout shaded'

*'set gxout contour'

'set gxout stream'

'set cthick 1'

'set strmden 5'

'define div=hdivg(uwnd,vwnd.2)'



'd div *100000'

'run cbarn'

'set gxout stream'

'set cthick 1'

'set strmden 4'

*'set gxout vector'

'd uwnd;vwnd.2'

'draw title Divergencia superficie  'res'' 

'printim C:\grads\imagens\vor'res'.jpg'


t=t+1

endwhile

















