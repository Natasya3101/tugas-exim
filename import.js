import { panggil } from "./export.js";

function view() {
  for (let a = 0; a < panggil.nama.length; a++) {
    console.log(`Nama : ${panggil.nama[a]}`);
    console.log(`Nim : ${panggil.nim[a]}`);
    console.log();
  }
}
view();
