import config from '@/lib/config';
import Centrifuge from 'centrifuge';
import { useEffect } from 'react';

const centrifuge = new Centrifuge(`${config.wsUrl}/websocket`, {
  refreshEndpoint: `${config.baseUrl}/ajax/wss/refresh`,
  subscribeEndpoint: `${config.baseUrl}/ajax/wss/subscribe`,
  subscribeHeaders: { 'X-CSRF-TOKEN': 'qwerty' },
  refreshHeaders: { 'X-CSRF-TOKEN': 'qwerty' },
});

const useCentrifuge = () => {
  useEffect(() => {
    centrifuge.connect();
    return () => {
      centrifuge.disconnect();
    };
  }, []);

  return centrifuge;
};

export default useCentrifuge;
