!/bin/bash
##[es] Script para mostrar hora con Mayusculas y Minisculas.
#Creator: Adolfo Silerio a.k.a ZAYRONXIO
#mail: zayronxio@gmail.com
###########
Dia=$(date +%a)
Diames=$(date +%e)
Mes=$(date +%b)
dia01=$(echo -n ${Dia:0:1} | tr '[:lower:]' '[:upper:]'; echo ${Dia:1} | tr '[:upper:]' '[:lower:]')
Mes1=$(echo -n ${Mes:0:1} | tr '[:lower:]' '[:upper:]'; echo ${Mes:1} | tr '[:upper:]' '[:lower:]')

Fecha="${dia01} ${Diames} ${Mes1}"

echo "$Fecha"

