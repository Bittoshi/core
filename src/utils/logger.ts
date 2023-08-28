import winston from 'winston';
import { format } from 'logform';

export const logger = winston.createLogger({
	format: format.combine(
		format.errors({ stack: true }),
		format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		format.json(),
	),
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize({
					message: false,
				}),
				winston.format.timestamp({
					format: 'YYYY-MM-DD hh:mm:ss A',
				}),
				winston.format.align(),
				winston.format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message.trim()}`),
				winston.format.errors({ stack: true }),
			),
		}),
		new winston.transports.File({ filename: 'logs/error.log', level: 'warn' }),
		new winston.transports.File({ filename: 'logs/app.log', level: 'info' }),
	],
});
