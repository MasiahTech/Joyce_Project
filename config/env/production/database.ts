export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'ep-mute-sunset-a4f9yh2u-pooler.us-east-1.aws.neon.tech'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'verceldb'),
			user: env('DATABASE_USERNAME', 'default'),
			password: env('DATABASE_PASSWORD', 'l7LMWCsdoQ8A'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
