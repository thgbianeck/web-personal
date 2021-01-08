const mongoose = require("mongoose");
const app = require("./app");
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");
const PORT_SERVER = process.env.PORT || 3977;

mongoose.set("useFindAndModify", false);
mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/thiagomoreirabianeck`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("A conexão com a base de dados está correta");
      app.listen(PORT_SERVER, () => {
        console.log("###################################");
        console.log("############ API REST #############");
        console.log("###################################");
        console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}`);
      });
    }
  }
);
