import http from 'k6/http';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.1.0/index.js';
import { group, check } from 'k6';

export const options = {
  vus: 1000,
  duration: '3s',
  // rps: 10000,
  summaryTimeUnit: 'ms',
  summaryTrendStats: [ // min=p(0), med=p(50), max=p(100)
    'count', 'avg',
    'p(0)', 'p(5)', 'p(10)', 'p(15)', 'p(20)', 'p(25)',
    'p(30)', 'p(35)', 'p(40)', 'p(45)', 'p(50)', 'p(55)',
    'p(60)', 'p(65)', 'p(70)', 'p(75)', 'p(80)', 'p(85)',
    'p(90)', 'p(95)', 'p(99)', 'p(99.5)', 
    'p(99.9)', 'p(99.99)', 'p(99.999)', 'p(100)'
  ],
  tags: {
    'foo': 'bar'
  },
  discardResponseBodies: true,
};

export default function () {

  group('get', function(){
    const res = http.get(`http://localhost:8080`);
    check(res, {
      'is status 200': (r) => r.status === 200,
    });
  });

  
  group('post', function(){
    const res = http.post(`http://localhost:8080`);
    check(res, {
      'is status 200': (r) => r.status === 200,
    });
  });


}

export function handleSummary(data) {
  return {
    'stdout': textSummary(data, { indent: ' ', enableColors: true }),
    'summery.json': JSON.stringify(data),
  };
}
