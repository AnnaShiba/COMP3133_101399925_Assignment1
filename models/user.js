const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, maxlength: 100 },
    email: { type: String, required: true, unique: true, maxlength: 100 },
    password: { type: String, required: true, maxlength: 50 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password'))
        return next();
    
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) 
            return next(err);
        
        this.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = async function(passwordInput, callback) {
    return bcrypt.compareSync(passwordInput, this.password);
};

module.exports = mongoose.model('User', userSchema);
