db.movies.updateMany(
	{ 
    $or: [
      {title: 'Batman' },
      {title: 'Home Alone'} 
    ]
  },
	{
		$addToSet: {
			category: "90's"
		}
	}
);