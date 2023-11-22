const matriz = [4,5,6,[1,2,[5,4,8]]];

console.log(matriz.flat(3));


// flat map
const matriz2 = [1,2,3,4,5]
console.log(matriz2.flatMap(v => [v, v*2]));




// mysqldump -h 10.73.211.197 -u RiCard0JumboKrdac -p'RKm81XRKm81X[ubmH:PX{5@vtguQyGf-VQ1fs:Q3]J1gOW3]J1g' --where="fecha = '2022-07-01'" --lock-tables=FALSE --add-locks=FALSE --insert-ignore --no-create-info --complete-insert ktaxihistoricodb dato_fastracks| gzip >dato_fastracks_2022-07-01.sql.gz