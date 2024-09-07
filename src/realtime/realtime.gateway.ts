import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: '*',  // Allow requests from any origin (for development)
    },
  })
  export class RealtimeGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
  {
    @WebSocketServer()
    server: Server;
  
    afterInit(server: Server) {
      console.log('WebSocket server initialized');
    }
  
    handleConnection(client: Socket, ...args: any[]) {
      console.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
    }
  
    @SubscribeMessage('message')
    handleMessage(client: Socket, payload: any): string {
      console.log(`Message received: ${payload}`);
      return 'Message received';
    }
  
    // You can add custom methods to emit events to all clients
    emitTradeUpdate(data: any) {
      this.server.emit('tradeUpdate', data);  // Emits the data to all connected clients
    }
  
    emitCargoUpdate(data: any) {
      this.server.emit('cargoUpdate', data);
    }
  
    emitInventoryUpdate(data: any) {
      this.server.emit('inventoryUpdate', data);
    }
  }