db.movies.find(
	{
		$or: [
			{
				category: {
					$all: [ 'sci-fi' ]
				}
			},
			{
				ratings: {
					$elemMatch: { $gt: 199 }
				}
			}
		]
	},
	{
		title: 1,
		ratings: 1,
		category: 1,
		_id: 0
	}
);
