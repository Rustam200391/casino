import config from '@/lib/config';
import Centrifuge from 'centrifuge';

const centrifuge = new Centrifuge(`${config.wsUrl}/websocket`, {
  refreshEndpoint: `${config.baseUrl}/ajax/wss/refresh`,
  subscribeEndpoint: `${config.baseUrl}/ajax/wss/subscribe`,
});

centrifuge.connect();

export default centrifuge;
