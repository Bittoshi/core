import { version } from '../../package.json';
import { HttpMethod } from '@/data/constants/http';

export default class ServerConfig {
	static readonly version: string = version;
	static readonly httpPort: number = Number(process.env.HTTP_PORT ?? 3000);
	static readonly httpsPort: number = Number(process.env.HTTPS_PORT ?? 3001);
	static readonly environment: string = process.env.NODE_ENV ?? 'development';
	static readonly allowedOrigins: string[] = ['http://localhost:3000', 'http://localhost:3001'];
	static readonly allowedHeaders: string[] = ['Content-Type', 'Authorization'];
	static readonly apiBasePath: string = '/api/v1';
	static readonly allowedMethods: HttpMethod[] = [
		HttpMethod.GET,
		HttpMethod.POST,
		HttpMethod.PUT,
		HttpMethod.DELETE,
		HttpMethod.PATCH,
		HttpMethod.OPTIONS,
		HttpMethod.HEAD,
	];
}
