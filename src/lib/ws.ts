import config from '@/lib/config';
import Centrifuge from 'centrifuge';
import { useEffect } from 'react';

const csrfToken = () =>
  typeof window !== 'undefined' && window.sessionStorage.getItem('csrf');

const centrifuge = new Centrifuge(`${config.wsUrl}/websocket`, {
  refreshEndpoint: `${config.baseUrl}/ajax/wss/refresh`,
  subscribeEndpoint: `${config.baseUrl}/ajax/wss/subscribe`,
  subscribeHeaders: { 'X-CSRF-TOKEN': csrfToken() },
  refreshHeaders: { 'X-CSRF-TOKEN': csrfToken() },
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
