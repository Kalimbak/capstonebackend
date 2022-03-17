import dotenv from "dotenv"
dotenv.config()

const config={
    development:{
        port: process.env,
    },
    test: {
        port: process.env.DB_TEST,
    }
};

const currentConfig = config[process.env.NODE_ENV];
export default currentConfig;