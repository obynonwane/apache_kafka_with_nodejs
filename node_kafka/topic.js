const { Kafka } = require("kafkajs");
async function run() {
  try {
    //establish a TCP connection
    const kafka = new Kafka({
      clientid: "myapp",
      brokers: ["localhost:9092"],
    });

    const admin = kafka.admin();
    console.log("Connecting.....");
    await admin.connect();
    console.log("Connected!");
    //A-M, N-Z
    await admin.createTopics({
      topics: [
        {
          topic: "Users",
          numPartitions: 2,
        },
      ],
    });
    console.log("Created Successfully!");
    await admin.disconnect();
  } catch (error) {
    console.log(`something bad happened ${ex}`);
  }
}

run();
