db.movies.find(
	{
		ratings: {
			$elemMatch: { $gte: 103 }
		}
	},
	{
		title: 1,
		ratings: 1,
		_id: 0
	}
);
