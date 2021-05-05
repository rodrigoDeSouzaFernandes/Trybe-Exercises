db.movies.updateOne(
  {
    title: "Home Alone"
  },
  {
    $set: {
      "cast.$[elem].character": "Marv"
    }
  },
  {
    arrayFilters: [ { "elem.actor": "Daniel Stern" } ]
  }
);