import { createServer, Model } from 'miragejs';
import education from '../components/TimeLine/timelineData.json';
import skillsList from '../components/Expertise/skillList.json';

function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      job: Model,
    },

    routes() {
      this.namespace = 'api';

      this.get('/education', () => {
        return JSON.parse(JSON.stringify(education));
      });
      this.get('/skills', () => {
        return JSON.parse(JSON.stringify(skillsList));
      });
      this.post('/skills', (schema, request) => {
        let newSkill = JSON.parse(request.requestBody);
        return schema.create('skill', newSkill);
      });
    },
  });

  return server;
}

export default makeServer;
