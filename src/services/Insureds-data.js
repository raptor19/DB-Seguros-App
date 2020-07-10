function createInsured(id,name,surname,dni,dateofBirth,gender,adress,phone,civilState,ocupation) {
  return { id,name,surname,dni,dateofBirth,gender,adress,phone,civilState,ocupation};
}

export default function data(){
  return(
    rowsInsureds
  )
}

const rowsInsureds = [
  createInsured(0,'Nombre0','Apellido0','35911890','01/01/2020','Masculino','Salta 1010 B:Moreno','155824850','Soltero','Empleado'),
  createInsured(1,'Nombre1','Apellido1','35911891','11/01/2020','Masculino','Salta 1010 B:Moreno','155824851','Soltero','Empleado'),
  createInsured(2,'Nombre2','Apellido2','35911892','21/01/2020','Femenino','Salta 1010 B:Moreno','155824852','Soltero','Empleado'),
  createInsured(3,'Nombre3','Apellido3','35911893','31/01/2020','Femenino','Salta 1010 B:Moreno','155824853','Soltero','Empleado'),
  createInsured(4,'Nombre4','Apellido4','35911894','11/11/2020','Masculino','Salta 1010 B:Moreno','155824854','Soltero','Empleado'),
]

