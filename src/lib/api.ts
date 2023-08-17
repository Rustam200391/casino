import ky from 'ky-universal';
import config from '@/lib/config';
import Cookies from 'js-cookie';

const api = ky.extend({
  prefixUrl: `${config.baseUrl}/`,
  hooks: {
    beforeRequest: [
      (request) => {
        const csrfToken = Cookies.get('X-CSRF-TOKEN');

        if (!csrfToken) {
          return;
        }

        request.headers.set('Set-Cookie', `XSRF-TOKEN=:${csrfToken}`);
        request.headers.set('X-CSRF-TOKEN', csrfToken);

        console.log(request);
      },
    ],
    beforeRetry: [
      async () => {
        const kyResponse: { token: string } = await ky(
          `${config.baseUrl}/ajax/refresh_csrf`,
        ).json();

        Cookies.set('X-CSRF-TOKEN', kyResponse.token);
      },
    ],
  },
});

export default api;
