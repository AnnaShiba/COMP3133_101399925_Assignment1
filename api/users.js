const User = require('../models/user');

const UserResolvers = {
    Query: {
        async login(_, { username, password }) {
            try {
                const user = await User.findOne({ username });
        
                if (!user) {
                    return res.status(404).json({ message: "User not found." });
                }
        
                user.comparePassword(password, (err, isMatch) => {
                    if (err)
                        throw err;
                    
                    return user;
                });
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