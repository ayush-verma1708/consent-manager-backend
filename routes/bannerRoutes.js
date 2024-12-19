import express from 'express';
import {
  saveBanner,
  getBanner,
  getAllBanner,
} from '../controllers/bannerController.js';

const router = express.Router();

router.post('/save', saveBanner); // Save banner configuration
router.get('/banner/:id', getBanner); // Retrieve a banner by ID

router.get('/all', getAllBanner); // Retrieve a banner by ID

export default router;
