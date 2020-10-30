'reinit'


'sdfopen C:\grads\s2004\fevereiro\uwnd.nc'
'sdfopen C:\grads\s2004\fevereiro\vwnd.nc'

t=1
while (t<=24) *24
'set t 't

'q time'
res=subwrd(result,3)

'set display color white'

'c'

*****************************************  
             
'set lon -90 0'
'set lat -60 30'
*'set lev 1000'

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
*'set clevs   -10 -8 -6 -4 4 6 8 10'
*'set ccols   17 18 19 20 0 23 25 27 28'
*'set cmax 0'
*'set cmin -20'
*'set cint 2'

***************************************

'set mpdset brmap_hires'

'set map 1 1 1'

'set grads off'

'set grid on 2 1 2'

*'set grid off'

'set gxout shaded'

'set gxout stream'

'set cthick 1'

'set strmden 5'

'define vort=hcurl(uwnd,vwnd.2)'



'd vort *100000'

'run cbarn'

'set gxout stream'

'set cthick 1'

'set strmden 5'

*'set gxout vector'

'd uwnd;vwnd.2'

'draw title   vorticidade 'res'' 

'printim C:\grads\imagens\vor'res'.jpg'


t=t+1

endwhile

















