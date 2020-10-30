'reinit'



'sdfopen C:\grads\2008.2\hgt.nc'



t=1
while (t<=56) 
'set t 't

'q time'
res=subwrd(result,3)

'set display color white'

'c'

*****************************************  
             
'set lon -90  30'
'set lat -60  30'
*'set lev 925'

*****************************************
* Estes são tons de AZUL

'set rgb 16   0   0 255'
'set rgb 17   40 40 255'
'set rgb 18   80 80 255'
'set rgb 19 120 120 255'
'set rgb 20 160 160 255'
'set rgb 27 200 200 255'

* Estes são tons de VERMELHO
'set rgb 28 255 200 200'
'set rgb 21 255 160 160'
'set rgb 22 255 120 120'
'set rgb 23 255  80  80'
'set rgb 24 255  40  40'
'set rgb 25 255   0   0'


*****************************************

'set clevs           1320 1360 1400 1440'
'set ccols           16 17 18 19 20 27 '


***************************************

'set mpdset brmap_hires'

'set map 1 1 1'

'set grads off'

'set grid on 2 51 '

'set grid off'

'set gxout shaded'

'set gxout stream'

'set cthick 5'

'set strmden 5'

*'set gxout contour'


'd hgt(lev=500)-hgt(lev=1000)'

*'d hgp'

'run cbarn' 



'draw title Espessura 850/1000 hPa 'res'' 

'printim C:\grads\imagens\'res'.jpg'


t=t+1

endwhile















