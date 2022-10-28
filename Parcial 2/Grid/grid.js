const grid = new gridjs.Grid({
    columns: ['Id', 'Nombre', 'Apellido'],
    server: {
      url: 'http://localhost:8081',
      then: data => data.results.map(movie => 
        [movie.title, movie.director, movie.producer]
      )
    } 
  }).render(document.getElementById("wrapper"));