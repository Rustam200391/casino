import config from '@/lib/config';
import { Centrifuge } from 'centrifuge';

const centrifuge = new Centrifuge(`ws://${config.wsUrl}/ajax/wss/subscribe`);
