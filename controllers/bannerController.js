import Banner from '../models/BannerCreationSchema.js';

// Controller for creating a new banner
// export const createBanner = async (req, res) => {
//   try {
//     const {
//       text,
//       buttonText,
//       backgroundColor,
//       textColor,
//       buttonColor,
//       languages,
//       consentCategories,
//       privacyPolicyLink,
//       termsLink,
//       consentExpiry,
//       granularity,
//     } = req.body;

//     const newBanner = new Banner({
//       text,
//       buttonText,
//       backgroundColor,
//       textColor,
//       buttonColor,
//       languages,
//       consentCategories,
//       privacyPolicyLink,
//       termsLink,
//       consentExpiry,
//       granularity,
//     });

//     await newBanner.save();

//     res
//       .status(201)
//       .json({ message: 'Banner created successfully', banner: newBanner });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Error creating banner', error: error.message });
//   }
// };
export const createBanner = async (req, res) => {
  try {
    const {
      text,
      buttonText,
      backgroundColor,
      textColor,
      buttonColor,
      consentCategories,
      privacyPolicyLink,
      termsLink,
      consentExpiry,
      granularity,
    } = req.body;

    // Validate multilingual fields (example for text and buttonText)
    if (
      !Array.isArray(text) ||
      !text.every((item) => item.language && item.value)
    ) {
      return res.status(400).json({ message: 'Invalid text format' });
    }
    if (
      !Array.isArray(buttonText) ||
      !buttonText.every((item) => item.language && item.value)
    ) {
      return res.status(400).json({ message: 'Invalid buttonText format' });
    }

    const newBanner = new Banner({
      text,
      buttonText,
      backgroundColor,
      textColor,
      buttonColor,
      consentCategories,
      privacyPolicyLink,
      termsLink,
      consentExpiry,
      granularity,
    });

    await newBanner.save();

    res
      .status(201)
      .json({ message: 'Banner created successfully', banner: newBanner });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error creating banner', error: error.message });
  }
};

// Controller for fetching all banners
// export const getBanners = async (req, res) => {
//   try {
//     const banners = await Banner.find();
//     res.status(200).json(banners);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Error fetching banners', error: error.message });
//   }
// };
export const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json(banners);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching banners', error: error.message });
  }
};

// Controller for fetching a single banner by ID
// export const getBannerById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const banner = await Banner.findById(id);

//     if (!banner) {
//       return res.status(404).json({ message: 'Banner not found' });
//     }

//     res.status(200).json(banner);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Error fetching banner', error: error.message });
//   }
// };

export const getBannerById = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Banner.findById(id);

    if (!banner) {
      return res.status(404).json({ message: 'Banner not found' });
    }

    res.status(200).json(banner);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching banner', error: error.message });
  }
};
// Controller for updating a banner
// export const updateBanner = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;

//     const updatedBanner = await Banner.findByIdAndUpdate(id, updates, {
//       new: true,
//     });

//     if (!updatedBanner) {
//       return res.status(404).json({ message: 'Banner not found' });
//     }

//     res
//       .status(200)
//       .json({ message: 'Banner updated successfully', banner: updatedBanner });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Error updating banner', error: error.message });
//   }
// };
export const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate multilingual fields if present in the updates
    if (
      updates.text &&
      (!Array.isArray(updates.text) ||
        !updates.text.every((item) => item.language && item.value))
    ) {
      return res.status(400).json({ message: 'Invalid text format' });
    }
    if (
      updates.buttonText &&
      (!Array.isArray(updates.buttonText) ||
        !updates.buttonText.every((item) => item.language && item.value))
    ) {
      return res.status(400).json({ message: 'Invalid buttonText format' });
    }

    const updatedBanner = await Banner.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedBanner) {
      return res.status(404).json({ message: 'Banner not found' });
    }

    res
      .status(200)
      .json({ message: 'Banner updated successfully', banner: updatedBanner });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error updating banner', error: error.message });
  }
};

// Controller for deleting a banner
// export const deleteBanner = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletedBanner = await Banner.findByIdAndDelete(id);

//     if (!deletedBanner) {
//       return res.status(404).json({ message: 'Banner not found' });
//     }

//     res.status(200).json({ message: 'Banner deleted successfully' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Error deleting banner', error: error.message });
//   }
// };
export const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBanner = await Banner.findByIdAndDelete(id);

    if (!deletedBanner) {
      return res.status(404).json({ message: 'Banner not found' });
    }

    res.status(200).json({ message: 'Banner deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting banner', error: error.message });
  }
};

// import Banner from '../models/Banner.js';

// export const saveBanner = async (req, res) => {
//   try {
//     const banner = new Banner(req.body);
//     const savedBanner = await banner.save();
//     res.status(201).json({ success: true, bannerId: savedBanner._id });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// export const getBanner = async (req, res) => {
//   try {
//     const banner = await Banner.findById(req.params.id);
//     if (!banner) {
//       return res
//         .status(404)
//         .json({ success: false, message: 'Banner not found' });
//     }
//     res.status(200).json({ success: true, banner });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// //Get all Banner
// export const getAllBanner = async (req, res) => {
//   try {
//     const banner = await Banner.find();
//     res.status(200).json({ success: true, banner });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };
