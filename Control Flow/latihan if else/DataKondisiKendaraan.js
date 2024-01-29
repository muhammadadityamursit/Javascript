var jmlKendaraan = 10;
var kendaraanBaik = 6;

for (noKendaraan = 1; noKendaraan <= jmlKendaraan; noKendaraan++) {
  if (noKendaraan <= 6) {
    console.log(
      "Kendaraan No. " + noKendaraan + " Kondisi kendaraan layak jalan."
    );
  } else {
    console.log(
      "Kendaraan No. " + noKendaraan + " Kondisi kendaraan perlu diservis."
    );
  }
}
