const isBrowser = () =>
  typeof window !== 'undefined' && typeof window.document !== 'undefined';
const isSecureProtocol =
  isBrowser() && document.location.protocol.includes('https');

const config = {
  serverAddress: process.env.NEXT_PUBLIC_SERVER_ADDRESS,
  baseUrl: `${isSecureProtocol ? 'https' : 'http'}://${
    process.env.NEXT_PUBLIC_SERVER_ADDRESS
  }`,
  wsUrl: `${isSecureProtocol ? 'wss' : 'ws'}://${
    process.env.NEXT_PUBLIC_SERVER_ADDRESS
  }`,
};

export default config;
