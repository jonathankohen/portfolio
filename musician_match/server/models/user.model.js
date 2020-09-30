const mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required.'],
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required.'],
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: 'Please enter a valid email.',
            },
        },
        password: {
            type: String,
            required: [true, 'Password is required.'],
            minlength: [2, 'Password must be  characters or longer.'],
        },
        city: {
            type: String,
            required: [true, 'City is required.'],
        },
        state: {
            type: String,
            required: [true, 'Please select a state from the dropdown.'],
        },
        priInst: {
            type: String,
            required: [true, 'Primary Instrument is required'],
        },
        secInst: {
            type: String,
            default: '',
        },
        bio: {
            type: String,
            required: [true, 'Bio is required'],
            minlength: [10, 'Bio must be at least 10 characters'],
            maxlength: [50, 'Too long'],
        },
        seeking: {
            type: String,
            required: [
                true,
                'Please select what type of musician you are seeking from the dropdown',
            ],
        },
    },
    { timestamps: true },
);

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => (this._confirmPassword = value));

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate(
            'confirmPassword',
            'Password must match confirm password',
        );
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10).then(hash => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model('User', UserSchema);

module.exports.User = User;
