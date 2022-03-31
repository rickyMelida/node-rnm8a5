/*var FECHA_NACIMIENTO = verifyDate(FECHA_NACIMIENTO);
var FECHA_BLOQUEO = verifyDate(FECHA_NACIMIENTO)
var FECHA_EMB = verifyDate(FECHA_EMB);
var FECHA_ENTR = verifyDate(FECHA_ENTR);
var FECHA_PEDIDO = verifyDate(FECHA_PEDIDO);
var FECHA_BAJA = verifyDate(FECHA_BAJA);
var FECHA_ACTIVACION = verifyDate(FECHA_ACTIVACION);
var FECHA_HASTA_P_MIN = verifyDate(FECHA_HASTA_P_MIN);
var FECHA_ULT_CIERRE = verifyDate(FECHA_ULT_CIERRE);
var ULT_VENCIMIENTO = verifyDate(ULT_VENCIMIENTO);
var ULT_MOV = verifyDate(ULT_MOV);
var FECHA_ULTIMO_PAGO = verifyDate(FECHA_ULTIMO_PAGO);
var FECHA_ULTIMO_PAGO = verifyDate(FECHA_ULTIMO_PAGO);
var FECHA_BAJA_CUENTA = verifyDate(FECHA_BAJA_CUENTA);
var FECHA_GENERACION_ARCHIVO = verifyDate(FECHA_GENERACION_ARCHIVO);*/

///----------------------------FUNCION QUE VALIDA LA FECHA
function verifyDate(theDate) {
  const date = new Date();
  var year;
  var month;
  var day;

  if (theDate.length == 8) {
    year = theDate.substr(0, 4);
    month = theDate.substr(4, 2);
    day = theDate.substr(6, 2);
  }

  if (theDate.length == 7) {
    year = theDate.substr(0, 4);
    if (date.getMonth() + 1 <= parseInt(theDate.substr(4, 2))) {
      month = '0' + theDate.substr(4, 1);
      day = theDate.substr(5, 2);
    } else {
      month = theDate.substr(4, 2);
      day = '0' + theDate.substr(6, 1);
    }
  }

  if (theDate.length == 6) {
    year = theDate.substr(0, 4);
    month = '0' + theDate.substr(4, 1);
    day = '0' + theDate.substr(5, 1);
  }

  return validateYear(year) && validateMonth(month) && validateDay(day, month)
    ? day + '/' + month + '/' + year
    : '01/01/1900';
}

///----------------------------FUNCION QUE VALIDA EL AÑO
function validateYear(year) {
  const date = new Date();
  return year.length == 4 && year >= 1900 && year <= date.getFullYear()
    ? true
    : false;
}

///----------------------------FUNCION QUE VALIDA EL MES
function validateMonth(month) {
  if (month.length >= 2)
    return Number(month) <= 12 && Number(month) >= 1 ? true : false;

  if (month.length == 1)
    return Number(month) <= 12 && Number(month) >= 1 ? true : false;
}

///----------------------------FUNCION QUE VALIDA EL DIA
function validateDay(day, month) {
  const monthsOf31 = [1, 3, 5, 7, 8, 10, 12];
  const monthsOf30 = [4, 6, 9, 11];

  var lastDayOfMonth = searchDay(monthsOf30, month)
    ? 30
    : searchDay(monthsOf31, month)
    ? 31
    : 28;

  if (day.length >= 2)
    return Number(day) <= lastDayOfMonth && Number(day) >= 1 ? true : false;

  if (day.length == 1)
    return Number(month) <= 12 && Number(day) >= 1 ? true : false;
}

///----------------------------FUNCION QUE VALIDA EL ULTIMO DIA SEGUN EL MES
function searchDay(listMonths, month) {
  var result;
  for (var i = 0; i < listMonths.length; i++) {
    if (listMonths[i] == month) result = true;
    else result = false;
  }

  return result;
}

console.log(verifyDate('20200831'));
