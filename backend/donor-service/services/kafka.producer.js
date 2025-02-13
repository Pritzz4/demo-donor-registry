const config = require('../configs/config');
const { Kafka, Partitioners } = require('kafkajs');

// Connect and send the event
async function emitEventToKafka(topic, telemetryEvent) {

const kafka = new Kafka({
  clientId: 'dB-Migration',
  brokers: config.KAFKA_BROKER_FOR_METRICS_SERVICE?.split(","), // List your Kafka brokers
  createPartitioner: Partitioners.LegacyPartitioner
});

const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic,
    messages: [
      {
        value: JSON.stringify(telemetryEvent)
      }
    ]
  });

  await producer.disconnect();
}

module.exports = {
  emitEventToKafka
}

