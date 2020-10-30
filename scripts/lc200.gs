'reinit'


'sdfopen C:\grads\2000\uwnd.nc'
'sdfopen C:\grads\2000\vwnd.nc'

t=1	
while (t<=31)
'set t 't

'q time'
res=subwrd(result,3)

'set display color white'

'c'

*****************************************  
             
'set lon -90 30'
'set lat -60 30'
'set lev 250'

*****************************************
*light blue to dark blue
'set rgb 41 225 255 255'
'set rgb 42 180 240 250'
'set rgb 43 150 210 250'
'set rgb 44 120 185 250'
'set rgb 45 80 165 245'
'set rgb 46 60 150 245'
'set rgb 47 40 130 240'
'set rgb 48 30 110 235'
'set rgb 49 20 100 210'
'set rgb 50 255 255 255'
*****************************************
*light green to dark green
'set rgb 30 230 255 225'
'set rgb 32 200 255 190'
'set rgb 33 180 250 170'
'set rgb 34 150 245 140'
'set rgb 35 120 245 115'
'set rgb 36 80 240 80'
'set rgb 37 55 210 60'
'set rgb 38 30 180 30'
'set rgb 39 15 160 15'
'set rgb    87  216  216  216'
'set rgb    65  150  150  150'
'set rgb    49  102  102  102'
'set rgb    17    6    6    6'
'set rgb    18    220    220    220'
'set rgb    19    50    50    50'
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
*light pink to dark rose 
'set rgb 61 255 230 230'
'set rgb 62 255 200 200'
'set rgb 63 248 160 160'
'set rgb 64 230 140 140'
'set rgb 65 230 112 112'
'set rgb 66 230 80 80' 
'set rgb 67 200 60 60' 
'set rgb 68 180 40 40'
'set rgb 69 164 32 32'
*'set clevs   18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50'
*'set ccols   0 0 22 22 23 23 24 24 25 25 26 26 27 27 28 28 29 29'
*'set cmax 45'
'set cmin 20'
*'set cint 2'

***************************************

'set mpdset brmap_hires'

'set map 1'

'set grads off'

'set grid on  5'

*'set grid off'

'set gxout shaded'

'd mag(uwnd,vwnd.2)'

'run cbarn'

*'set gxout vector'

'set gxout stream'

*'set gxout barb'

'set cthick 1's

'set strmden 4'

'd uwnd;vwnd.2'

'draw title   LC 250 hPa 'res'' 

'printim C:\grads\imagens\'res'.jpg'


t=t+1

endwhile

















