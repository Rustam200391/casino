import ky from 'ky-universal';
import config from '@/lib/config';
import Cookies from 'js-cookie';

const api = ky.extend({
  prefixUrl: `${config.baseUrl}/`,
  credentials: 'include',
  hooks: {
    beforeRequest: [
      (request) => {
        const token = Cookies.get('XSRF-TOKEN');

        if (!token) {
          return;
        }

        request.headers.set('X-CSRF-TOKEN', token);
      },
    ],
    beforeRetry: [
      async () => {
        const kyResponse: { token: string } = await ky(
          `${config.baseUrl}/ajax/refresh_csrf`,
        ).json();

        Cookies.set('XSRF-TOKEN', kyResponse.token);
      },
    ],
  },
});

export default api;
