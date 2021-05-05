db.movies.updateMany(
	{
		title: 'Home Alone'
	},
	{
		$push: {
			cast: {
				$each: [
					{
						actor: 'Macaulay Culkin',
						character: 'Kevin'
					},
					{
						actor: 'Joe Pesci',
						character: 'Harry'
					},
					{
						actor: 'Daniel Stern'
					}
				]
			}
		}
	}
);
