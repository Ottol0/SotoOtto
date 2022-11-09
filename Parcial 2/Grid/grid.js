const grid = new gridjs.Grid({
    columns: ['Id', 'Nombre', 'Apellido'],
    server: {
      url: 'http://localhost:8081',
      then: data => data.map(personasxd => 
        [personasxd.id, personasxd.nombre, personasxd.apellido]
      )
    } 
  }).render(document.getElementById("wrapper"));