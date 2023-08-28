import config from '@/lib/config';
import Centrifuge from 'centrifuge';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const centrifuge = new Centrifuge(`${config.wsUrl}/websocket`, {
  refreshEndpoint: `${config.baseUrl}/ajax/wss/refresh`,
  subscribeEndpoint: `${config.baseUrl}/ajax/wss/subscribe`,
  subscribeHeaders: { 'X-CSRF-TOKEN': Cookies.get('XSRF-TOKEN') },
  refreshHeaders: { 'X-CSRF-TOKEN': Cookies.get('XSRF-TOKEN') },
  maxRetry: 0,
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
