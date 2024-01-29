var jmlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 7;
while(noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot +  ' Beroperasi dengan baik');
    noAngkot++;
}

for(noAngkot = angkotBeroperasi + 1; noAngkot <= 10; noAngkot++){
    console.log('Angkot No. ' + noAngkot +  ' Sedang tidak beroperasi');
}