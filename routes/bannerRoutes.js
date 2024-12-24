import express from 'express';
import {
  createBanner,
  getBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
} from '../controllers/bannerController.js';

const router = express.Router();

// Route to create a new banner
router.post('/banners', createBanner);

// Route to fetch all banners
router.get('/banners', getBanners);

// Route to fetch a single banner by ID
router.get('/banners/:id', getBannerById);

// Route to update a banner by ID
router.put('/banners/:id', updateBanner);

// Route to delete a banner by ID
router.delete('/banners/:id', deleteBanner);

export default router;

// import express from 'express';
// import {
//   saveBanner,
//   getBanner,
//   getAllBanner,
// } from '../controllers/bannerController.js';

// const router = express.Router();

// router.post('/save', saveBanner); // Save banner configuration
// router.get('/banner/:id', getBanner); // Retrieve a banner by ID

// router.get('/all', getAllBanner); // Retrieve a banner by ID

// export default router;
