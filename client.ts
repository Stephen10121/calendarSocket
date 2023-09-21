import { io } from "socket.io-client";

const ioClient = io("http://localhost:8000");

ioClient.on("seq-num", (msg) => console.info(msg));