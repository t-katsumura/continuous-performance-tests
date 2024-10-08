import http from 'k6/http';
import { check } from 'k6';
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';
import {countStatus} from './k6_status.js'

export const options = {
  vus: 25,  // 25 virtual users.
  rps: 100, // 4 requests per 1 user.
  duration: '60s',
  summaryTimeUnit: 'ms',
  summaryTrendStats: [ // min=p(0), med=p(50), max=p(100)
    'count', 'avg',
    // 'p(0)', 'p(1)', 'p(2)', 'p(3)', 'p(4)',
    // 'p(5)', 'p(6)', 'p(7)', 'p(8)', 'p(9)',
    // 'p(10)', 'p(11)', 'p(12)', 'p(13)', 'p(14)',
    // 'p(15)', 'p(16)', 'p(17)', 'p(18)', 'p(19)',
    // 'p(20)', 'p(21)', 'p(22)', 'p(23)', 'p(24)',
    // 'p(25)', 'p(26)', 'p(27)', 'p(28)', 'p(29)',
    // 'p(30)', 'p(31)', 'p(32)', 'p(33)', 'p(34)',
    // 'p(35)', 'p(36)', 'p(37)', 'p(38)', 'p(39)',
    // 'p(40)', 'p(41)', 'p(42)', 'p(43)', 'p(44)',
    // 'p(45)', 'p(46)', 'p(47)', 'p(48)', 'p(49)',
    // 'p(50)', 'p(51)', 'p(52)', 'p(53)', 'p(54)',
    // 'p(55)', 'p(56)', 'p(57)', 'p(58)', 'p(59)',
    // 'p(60)', 'p(61)', 'p(62)', 'p(63)', 'p(64)',
    // 'p(65)', 'p(66)', 'p(67)', 'p(68)', 'p(69)',
    // 'p(70)', 'p(71)', 'p(72)', 'p(73)', 'p(74)',
    // 'p(75)', 'p(76)', 'p(77)', 'p(78)', 'p(79)',
    // 'p(80)', 'p(81)', 'p(82)', 'p(83)', 'p(84)',
    // 'p(85)', 'p(86)', 'p(87)', 'p(88)', 'p(89)',
    // 'p(90)', 'p(91)', 'p(92)', 'p(93)', 'p(94)',
    // 'p(95)', 'p(96)', 'p(97)', 'p(98)', 'p(99)',
    'p(99.5)', 'p(99.9)', 'p(99.99)', 'p(99.999)', 'p(100)'
  ],
  discardResponseBodies: true,
};

export default function () {
  let uuid = uuidv4();
  const res = http.get(http.url`http://localhost:12345?header=uuid:${uuid}`);
  countStatus[res.status].add(res.timings.duration)
  check(res, {
    'check uuid': (r) => r.headers["Uuid"] === uuid,
  });
}

export function handleSummary(data) {
  return {
    'k6_summery.json': JSON.stringify(data),
  };
}
