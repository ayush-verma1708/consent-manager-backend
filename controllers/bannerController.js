import Banner from '../models/Banner.js';

export const saveBanner = async (req, res) => {
  try {
    const banner = new Banner(req.body);
    const savedBanner = await banner.save();
    res.status(201).json({ success: true, bannerId: savedBanner._id });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getBanner = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res
        .status(404)
        .json({ success: false, message: 'Banner not found' });
    }
    res.status(200).json({ success: true, banner });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//Get all Banner
export const getAllBanner = async (req, res) => {
  try {
    const banner = await Banner.find();
    res.status(200).json({ success: true, banner });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
