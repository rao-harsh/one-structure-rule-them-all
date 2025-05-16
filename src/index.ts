import dotenv from 'dotenv';
import { Server } from '@app/Server';

dotenv.config();

const PORT: number = parseInt(process.env.PORT || '3000', 10);

const server: Server = new Server(PORT);

server.listen();
