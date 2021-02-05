import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser:    true,
  socketTimeoutMS:    30000,
  keepAlive:          true,
  poolSize:           50,
  autoIndex:          false,
  retryWrites:        false
};

const MONGO_USERNAME  = process.env.MONGO_USERNAME || 'superuser';
const MONGO_PASSWORD  = process.env.MONGO_PASSWORD || 'supersecretpassword1';
const MONGO_DB_NAME   = process.env.MONGO_DB_NAME || 'library';

const MONGO = {
  password: MONGO_PASSWORD,
  username: MONGO_USERNAME,
  options:  MONGO_OPTIONS,
  url:      `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.nytqd.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT     = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port:     SERVER_PORT
};

const config = {
    mongo:  MONGO,
    server: SERVER
};

export default config;