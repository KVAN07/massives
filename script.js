var mas = [

];
do {
  var admin = prompt('Введите команду как: add, - добавлять; del, - удалять так же можно - delete; stop - остановить');
  var spl = admin.split(", ");
  if (spl[0] == "add") {
    mas.push(spl[1]);
  }
  if (spl[0] == "del") {
    const i = mas.findIndex((del) => del == spl[1]);
    if (i + 1) {
      mas.splice(i, 1);
    }
  }
  if (spl[0] == "delete") {
    const i = mas.findIndex((del) => del == spl[1]);
    if (i + 1) {
      mas.splice(i, 1);
    }
  }
  console.log(mas);
} while (spl[0] !== "stop");