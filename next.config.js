const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_USERNAME: 'ersin-nextjs-blog',
        MONGODB_PASSWORD: 'Pewdiepiebro23',
        MONGODB_CLUSTERNAME: 'cluster0',
        MONGODB_DATABASE: 'my-nextjs-blog-dev',
      },
    };
  }

  return {
    env: {
      MONGODB_USERNAME: 'ersin-nextjs-blog',
      MONGODB_PASSWORD: 'Pewdiepiebro23',
      MONGODB_CLUSTERNAME: 'cluster0',
      MONGODB_DATABASE: 'my-nextjs-blog',
    },
  };
};
