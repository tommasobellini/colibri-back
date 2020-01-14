import express, { Router } from 'express';
// Import index action from movies controller
import { index, addData, getHandPosition } from './controllers/dataController';

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/data.json')
  .get(index);

router.route('/addData').post(addData)

router.route('/getHandPosition').post(getHandPosition)

export default router;