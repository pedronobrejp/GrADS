'reinit'


'sdfopen C:\grads\dados\n2004\novembro\shum.nc'
'sdfopen c:\grads\dados\n2004\novembro\uwnd.nc'
'sdfopen c:\grads\dados\n2004\novembro\vwnd.nc'



t=1
while (t<=120)
'set t 't

'q time'
res=subwrd(result,3)

'set display color white'

'c'

*****************************************  
             
'set lon -90 30'
'set lat -60 60'
'set lev 1000'






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

*'set clevs      -32 -16 -8 -4 -1 1 4 8 16 32'
*'set ccols     16 17 18 19 20 27 28 21 22 23 24 25'
*'set cmax 45'  
*'set cmin 0'
*'set cint 0.06 '

***************************************

'set mpdset brmap_hires'

'set map 1 1 1'

'set grads off'

'set grid on 2 51 '

*'set grid off'

'set gxout shaded'


'define dtx = cdiff(shum,x)' 
'define dty = cdiff(shum,y)' 
'define dx = cdiff(lon,x)*3.1416/180' 
'define dy = cdiff(lat,y)*3.1416/180' 
'd -100000*( (uwnd.2*dtx)/(cos(lat*3.1416/180)*dx) + vwnd.3*dty/dy )/6.37e6' 



'run cbarn' 

'set gxout shaded'

'draw title  Adveccao 'res' ' 

'printim C:\grads\imagens\'res'.jpg'


t=t+1

endwhile




























