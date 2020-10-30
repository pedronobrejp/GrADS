'reinit'


'sdfopen C:\grads\2008.2\air.nc'






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
'set lev 1013'






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
'set clevs       0 4 8 12 16 20 24 28 32 36 40'
'set ccols      16 17 18 19 20 21 22 23 24 25 26 27'
*'set cmax 35'
*'set cmin 25'
*'set cint 0.06 '

***************************************

'set mpdset brmap_hires'

'set map 1 1 1'

'set grads off'

'set grid on 2 51 '

*'set grid off'

'set gxout shaded'

'd air -273'

'run cbarn' 

'set gxout shaded'

'draw title  Temperatura Sup. 'res' ' 

'printim C:\grads\imagens\'res'.jpg'


t=t+1

endwhile















