import Server from './server/server';

(async (): Promise<void> => {
	const server = new Server();
	await server.start();
})();
