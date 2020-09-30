const mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

const MusicianSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required.'],
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required.'],
        },
        // city: {
        //     type: String,
        //     required: [true, 'City is required'],
        // },
        // state: {
        //     type: String,
        //     required: [true, 'State is required'],
        // },
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
            minlength: [8, 'Password must be 8 characters or longer.'],
        },
        // priInst: {
        //     type: String,
        //     required: [true, 'Primary Instrument is required'],
        // },
        // priSkill: {
        //     type: String,
        //     required: [
        //         true,
        //         'Please select a proficiency for your Primary Instrument from the dropdown',
        //     ],
        // },
        // secInst: {
        //     type: String,
        //     default: '',
        // },
        // secSkill: {
        //     type: String,
        //     default: '',
        // },
        // terInst: {
        //     type: String,
        //     default: '',
        // },
        // terSkill: {
        //     type: String,
        //     default: '',
        // },
        // bio: {
        //     type: String,
        //     required: [true, 'Bio is required'],
        //     minlength: [10, 'Bio must be at least 10 characters'],
        //     maxlength: [50, 'Too long'],
        // },
        // influences: {
        //     type: String,
        //     required: [true, 'Influences are required'],
        //     minlength: [2, 'Influences must be at least 2 characters'],
        //     maxlength: [50, 'Too long'],
        // },
        // seeking: {
        //     type: String,
        //     required: [
        //         true,
        //         'Please select what type of musician you are seeking from the dropdown',
        //     ],
        // },
    },
    { timestamps: true },
);

MusicianSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => (this._confirmPassword = value));

MusicianSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate(
            'confirmPassword',
            'Password must match confirm password',
        );
    }
    next();
});

MusicianSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10).then(hash => {
        this.password = hash;
        next();
    });
});

const Musician = mongoose.model('Musician', MusicianSchema);

module.exports = Musician;
