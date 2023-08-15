import config from '@/lib/config';
import Centrifuge from 'centrifuge';
import { useEffect } from 'react';

const isBrowser = () =>
  typeof window !== 'undefined' && typeof window.document !== 'undefined';
const isSecureProtocol =
  isBrowser && document.location.protocol.includes('https');

const centrifuge = new Centrifuge(
  `${isSecureProtocol ? 'wss' : 'ws'}://${config.wsUrl}/websocket`,
  {
    refreshEndpoint: `${config.baseUrl}/ajax/wss/refresh`,
    subscribeEndpoint: `${config.baseUrl}/ajax/wss/subscribe`,
    subscribeHeaders: { 'X-CSRF-TOKEN': 'qwerty' },
    refreshHeaders: { 'X-CSRF-TOKEN': 'qwerty' },
  },
);

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
