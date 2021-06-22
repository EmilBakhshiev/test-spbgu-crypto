/*
import { createServer } from 'miragejs';
export let server = createServer();

server.get('/api/notifications', {
  notifications: [
    {
      title: 'Исследования',
      text: 'Вам назначено 10 исследований',
      time: '14:07',
      status: '',
    },
    {
      title: 'Разработка вечного двигателя',
      text: 'Вечный двигатель готов',
      time: '20:22',
      status: 'success',
    },
    {
      title: 'Сделать тестовое задание в срок',
      text: 'Вы не сделали тестовое задание в срок',
      time: '10:12',
      status: 'fail',
    },
  ],
});
*/

import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      notification: Model,
    },

    seeds(server) {
      server.create('notification', {
        title: 'Исследования',
        text: 'Вам назначено 10 исследований',
        time: '14:07',
        status: '',
      });
      server.create('notification', {
        title: 'Разработка вечного двигателя',
        text: 'Вечный двигатель готов',
        time: '20:22',
        status: 'success',
      });
      server.create('notification', {
        title: 'Сделать тестовое задание в срок',
        text: 'Вы не сделали тестовое задание в срок',
        time: '10:12',
        status: 'fail',
      });
    },

    routes() {
      this.namespace = 'api';
      this.get('/notifications');
      this.post('/notifications')
    },
  });

  return server;
}
