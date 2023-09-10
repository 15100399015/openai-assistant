import { message } from "antd";
import mitt from "mitt";

const socketHost = "ws://localhost:8080/api/ws";
export let ws: WebSocket | null = null;
export const subscriber = mitt();

export const connectEventSocket = () => {
  ws = new WebSocket(socketHost);

  ws.addEventListener("message", (event) => {
    let data: any = null;
    try {
      data = JSON.parse(event.data);
    } catch (error) {}
    if (data) {
      // 消息类型为 event 事件
      if (data.type === "event") {
        subscriber.emit("event", data);
      }
      if (data.type === "message") {
        subscriber.emit("message", data);
      }
    }
  });
  ws.addEventListener("open", (event) => {
    message.info("事件助手连接成功");
    //   subscriber.emit("open", event);
  });
  ws.addEventListener("close", (event) => {
    //   subscriber.emit("close", event);
  });
  ws.addEventListener("error", (event) => {
    //   subscriber.emit("error", event);
  });
};