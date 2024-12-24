import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    buttonText: { type: String, required: true },
    backgroundColor: { type: String, default: '#ffffff' },
    textColor: { type: String, default: '#000000' },
    buttonColor: { type: String, default: '#007bff' },
    languages: {
      type: [String],
      enum: [
        'Hindi',
        'English',
        'Bengali',
        'Telugu',
        'Marathi',
        'Tamil',
        'Gujarati',
        'Urdu',
        'Kannada',
        'Odia',
        'Malayalam',
        'Punjabi',
        'Assamese',
        'Maithili',
        'Santali',
        'Kashmiri',
        'Nepali',
        'Sindhi',
        'Dogri',
        'Konkani',
        'Bodo',
        'Manipuri',
      ],
      default: ['English'],
    },
    consentCategories: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        yesOrNo: { type: Boolean, required: true },
        reason: { type: String, required: true },
        consentType: { type: String, default: 'accepted' },
      },
    ],
    privacyPolicyLink: { type: String },
    termsLink: { type: String },
    consentExpiry: { type: Number, default: 30 }, // Expiry in days
    granularity: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Banner = mongoose.model('Banner', bannerSchema);

export default Banner;
