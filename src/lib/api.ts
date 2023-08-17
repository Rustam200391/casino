import ky from 'ky-universal';
import config from '@/lib/config';

const api = ky.extend({
  prefixUrl: `${config.baseUrl}/`,
  hooks: {
    beforeRequest: [
      (request) => {
        const csrfToken =
          typeof window !== 'undefined' &&
          window.sessionStorage.getItem('csrf');

        if (!csrfToken) {
          return;
        }

        request.headers.set('X-CSRF-TOKEN', csrfToken);
      },
    ],
    beforeRetry: [
      async ({ request, options, error, retryCount }) => {
        const kyResponse: { token: string } = await ky(
          `${config.baseUrl}/ajax/refresh_csrf`,
        ).json();

        window.sessionStorage.setItem('csrf', kyResponse.token);

        request.headers.set('X-CSRF-TOKEN', kyResponse.token);
      },
    ],
  },
});

export default api;
