// d : Date
// dow: day of week

function nextDay(d, dow){
    d.setDate(d.getDate() + (dow+(7-d.getDay())) % 7);
    return d;
}

export const dow = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
export const mfy = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// days: array [0:sun, ..., 6: sat]
export function getNextDays({days, weeks}){
    let dates = [new Date()]
    dates = [];
    let date = new Date();
    for (let week = 0; week < weeks; week++) {
        days.forEach(day => {
            date = nextDay(date, day);
            dates.push(new Date(date));
        });
    }
    return dates;
}