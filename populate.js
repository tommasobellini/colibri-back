import mongoose from 'mongoose';
import data from './models/data';

const fullData = [
    {
        ax: '1.555',
        ay: '1.3343',
        az: '1.4343',
        ir: '434323',
        bpm: '222',
        pd: '0'
    },
    {
        ax: '1.555',
        ay: '1.3343',
        az: '1.4343',
        ir: '434323',
        bpm: '222',
        pd: '0'
    },
    {
        ax: '1.555',
        ay: '1.3343',
        az: '1.4343',
        ir: '434323',
        bpm: '222',
        pd: '0'
    },
    {
        ax: '1.555',
        ay: '1.3343',
        az: '1.4343',
        ir: '434323',
        bpm: '222',
        pd: '0'
    },
    {
        ax: '1.555',
        ay: '1.3343',
        az: '1.4343',
        ir: '434323',
        bpm: '222',
        pd: '0'
    },
    {
        ax: '1.555',
        ay: '1.3343',
        az: '1.4343',
        ir: '434323',
        bpm: '222',
        pd: '0'
    }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/data')

// Go through each data
fullData.map(item => {
    // Inizialize a model with data
    const itemData = new data(item);
    // and save it into db
    itemData.save()
})