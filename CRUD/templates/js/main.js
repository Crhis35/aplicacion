const  btnDelete =  documento . querySelectorAll ('.btn-delete');
if (btnDelete) {
  const  btnArray  =  Array . de (btnDelete);
  btnArray.forEach ((btn) => {
    BTN.addEventListener ('clic', (e) => {
      if (!confirm ('¿Estás seguro de que quieres eliminarlo?')) {
        e.preventDefault();
      }
    });
  })
}