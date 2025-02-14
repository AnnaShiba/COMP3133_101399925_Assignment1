const User = require('../models/user');

const UserResolvers = {
    Query: {
        async login(_, { username, password }) {
            try {
                const user = await User.findOne({ username });
        
                if (!user) {
                    return null;
                }
        
                const result = await user.comparePassword(password);
                if (!result) {
                    return null;
                } 

                return user;
            } catch (err) {
                return err;
            }
        },
    },
    Mutation: {
        async signup(_, { user }) {
            const newUser = new User({
                username: user.username,
                email: user.email,
                password: user.password,
            });
            try {
                await newUser.save();
                return newUser;
            } catch (ex) {
                return ex;
            }
        },
    },
};

module.exports = UserResolvers;