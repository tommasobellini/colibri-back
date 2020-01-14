import Data from '../models/data'
import moment from 'moment'

// First View (from top)
const TOP_VIEW_MIN_AX = -0.2;
const TOP_VIEW_MIN_AY = -0.2;
const TOP_VIEW_MIN_AZ = 0.65;

const TOP_VIEW_MAX_AX = 0.3;
const TOP_VIEW_MAX_AY = 0.3;
const TOP_VIEW_MAX_AZ = 1.15;

// Second View (from bottom)
const BOTTOM_VIEW_MIN_AX = -1.15;
const BOTTOM_VIEW_MIN_AY = -0.2;
const BOTTOM_VIEW_MIN_AZ = -0.2;

const BOTTOM_VIEW_MAX_AX = -0.65;
const BOTTOM_VIEW_MAX_AY = 0.3;
const BOTTOM_VIEW_MAX_AZ = 0.3;

// Third View (from side)
const SIDE_VIEW_MIN_AX = -0.2;
const SIDE_VIEW_MIN_AY = -1.15;
const SIDE_VIEW_MIN_AZ = -0.2;

const SIDE_VIEW_MAX_AX = 0.3;
const SIDE_VIEW_MAX_AY = -0.65;
const SIDE_VIEW_MAX_AZ = 0.3;

export const index = (req, res, next) => {
  // Find all movies and return json response
  Data.find().lean().exec((err, datas) => res.json(
    // Iterate through each movie
    { datas: datas.map(data => ({
      ...data,
    }))}
  ));
};

export const addData = (req, res, next) => {
    console.log(req.body)
    var new_data = new Data(req.body)
    new_data.save((err, data) => {
        if(err) {
            res.send(err);
        }
        res.json(data);
    })
}

export const getHandPosition = (req, res, next) => {
    console.log('received data..')
    console.log(req.body.message)
    let data = req.body.message
    let currentAXPosition = 'NULL';
    let currentAYPosition = 'NULL';
    let currentAZPosition = 'NULL';
    let currentPosition = 'NULL';
    // CHECK 'AX'
    if(data['AX'] >= BOTTOM_VIEW_MIN_AX && data['AX'] <= BOTTOM_VIEW_MAX_AX) {
        currentPosition = 'BOTTOM';
    } 

    // CHECK 'AY'
    if(data['AY'] >= SIDE_VIEW_MIN_AY && data['AY'] <= SIDE_VIEW_MAX_AY) {
        currentPosition = 'SIDE';
    }

    // CHECK 'AZ'
    if(data['AZ'] >= TOP_VIEW_MIN_AZ && data['AZ'] <= TOP_VIEW_MAX_AZ) {
        currentPosition = 'TOP';
    } 
    let message = ''
    console.log(currentAXPosition);
    console.log(currentAYPosition);
    console.log(currentAZPosition);
    if(currentPosition != 'NULL'){
        message = 'The current hand position is: ' + currentPosition
    } else {
        message = 'The current hand position is: ' + 'UNDEFINED'
    }
    res.json({
      message: message,
      position: currentPosition
    });
}