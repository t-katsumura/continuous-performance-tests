#!/bin/bash

echo -n "$$" > docker_stats.pid
trap 'rm -f docker_stats.pid; exit 0;' SIGTERM

FORMAT="{{.ID}},{{.CPUPerc}},{{.MemUsage}},{{.MemPerc}},{{.NetIO}},{{.BlockIO}},{{.PIDs}}"

while true; do

  DATE=$(date -u +'%Y-%m-%d')
  TIME=$(date -u +'%H:%M:%S')
  STATS=$(docker stats gateway --no-stream --format "${FORMAT}")

  ID=$(echo "${STATS}" | cut -d "," -f 1)
  CPUPerc=$(echo "${STATS}" | cut -d "," -f 2)
  CPUPerc="${CPUPerc%\%}"
  MemUsage=$(echo "${STATS}" | cut -d "," -f 3)
  MemUsage=$(echo "${MemUsage%% \/*}" | tr -d "GMkiB")
  MemPerc=$(echo "${STATS}" | cut -d "," -f 4)
  MemPerc="${MemPerc%\%}"
  NetIO=$(echo "${STATS}" | cut -d "," -f 5)
  NetIO=$(echo "${NetIO%% \/*}" | tr -d "GMkiB")
  BlockIO=$(echo "${STATS}" | cut -d "," -f 6)
  BlockIO=$(echo "${BlockIO%% \/*}" | tr -d "GMkiB")
  PID=$(echo "${STATS}" | cut -d "," -f 7)

  echo "${DATE},${TIME},${STATS}" >> docker_stats_raw.csv
  echo "${DATE},${TIME},${ID},${CPUPerc},${MemUsage},${MemPerc},${NetIO},${BlockIO},${PID}" >> docker_stats.csv

  sleep 10

done;
