
module.exports = {

    SECRET: process.env.AUTH_SECRET || "pingüino", 
    EXPIRES: process.env.AUTH_EXPIRES || "24h",
    ROUNDS : process.env.AUTH_ROUNDS || 10,
    PORT : process.env.PORT || 5500,
    URL : process.env.URL || `mongodb+srv://diego:TY0chgHp8Z1fDeH8@cluster0.xipat0i.mongodb.net/integrarTEA?retryWrites=true&w=majority`
};