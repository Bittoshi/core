import http from 'http';
import https from 'https';
import { join } from 'path';
import { readFileSync } from 'fs';
import { logger } from '@/utils/logger';
import ServerConfig from '@/config/server_config';
import express, { type Application } from 'express';

export default class Server {
	private readonly app: Application;
	private readonly privateKey: string;
	private readonly certificate: string;
	private readonly httpServer: http.Server;
	private readonly httpsServer: https.Server;

	constructor() {
		this.app = express();

		try {
			this.privateKey = readFileSync(join(__dirname, 'keys', 'key.pem'), 'utf8');
		} catch (error) {
			logger.info('Could not find private key');
			process.exit(1);
		}

		try {
			this.certificate = readFileSync(join(__dirname, 'keys', 'cert.pem'), 'utf8');
		} catch (error) {
			logger.info('Could not find certificate');
			process.exit(1);
		}

		try {
			this.httpServer = http.createServer(this.app);
		} catch (error) {
			logger.info('Could not create HTTP server');
			process.exit(1);
		}

		try {
			this.httpsServer = https.createServer({ key: this.privateKey, cert: this.certificate }, this.app);
		} catch (error) {
			logger.info('Could not create HTTPS server');
			process.exit(1);
		}
	}

	public async start(): Promise<void> {
		this.httpServer.listen(ServerConfig.httpPort, () => {
			logger.info(`HTTP server started on port ${ServerConfig.httpPort}`);
		});

		this.httpsServer.listen(ServerConfig.httpsPort, () => {
			logger.info(`HTTPS server started on port ${ServerConfig.httpsPort}`);
		});
	}
}
