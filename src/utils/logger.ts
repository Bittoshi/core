import fs from 'fs';
import pino from 'pino';
import path from 'path';
import stream from 'stream';
import childProcess from 'child_process';

const { env } = process;
const cwd = process.cwd();
const logDirPath = path.resolve('src', 'logs');

if (!fs.existsSync(logDirPath)) {
	fs.mkdirSync(logDirPath);
}

const tunel = new stream.PassThrough();
const logger = pino(
	{
		transport: {
			target: 'pino-pretty',
			options: {
				colorize: true,
			},
		},
	},
	tunel,
);

const child = childProcess.spawn(process.execPath, [require.resolve('pino-tee')], { cwd, env });

tunel.pipe(child.stdin);
tunel.pipe(process.stdout);

export { logger };
