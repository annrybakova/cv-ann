import { createServer, Model } from 'miragejs';
import TimelineData from '../components/TimeLine/timelineData.json';

function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      job: Model,
    },

    routes() {
      this.namespace = 'api';

      this.get('/timelineData', () => {
        return JSON.parse(JSON.stringify(TimelineData));
      });
    },
  });

  return server;
}

export default makeServer;
