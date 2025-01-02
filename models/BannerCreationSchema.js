import mongoose from 'mongoose';

// const localizedFieldSchema = new mongoose.Schema(
//   {
//     language: {
//       type: String,
//       enum: [
//         'Hindi',
//         'English',
//         'Bengali',
//         'Telugu',
//         'Marathi',
//         'Tamil',
//         'Gujarati',
//         'Urdu',
//         'Kannada',
//         'Odia',
//         'Malayalam',
//         'Punjabi',
//         'Assamese',
//         'Maithili',
//         'Santali',
//         'Kashmiri',
//         'Nepali',
//         'Sindhi',
//         'Dogri',
//         'Konkani',
//         'Bodo',
//         'Manipuri',
//       ],
//       required: true,
//     },
//     value: { type: String, required: true },
//   },
//   { _id: false }
// );

// const consentCategorySchema = new mongoose.Schema(
//   {
//     title: [localizedFieldSchema], // Multilingual title
//     description: [localizedFieldSchema], // Multilingual description
//     reason: [localizedFieldSchema], // Multilingual reason
//     yesOrNo: { type: Boolean, required: true },
//     consentType: { type: String, default: 'accepted' },
//   },
//   { _id: false }
// );

// const bannerSchema = new mongoose.Schema(
//   {
//     text: [localizedFieldSchema], // Multilingual text for the banner
//     buttonText: [localizedFieldSchema], // Multilingual button text
//     backgroundColor: { type: String, default: '#ffffff' },
//     textColor: { type: String, default: '#000000' },
//     buttonColor: { type: String, default: '#007bff' },
//     consentCategories: [consentCategorySchema], // Array of multilingual consent categories
//     privacyPolicyLink: { type: String },
//     termsLink: { type: String },
//     consentExpiry: { type: Number, default: 30 }, // Expiry in days
//     granularity: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );
const bannerSchema = new mongoose.Schema({
  text: [{ language: String, value: String }],
  buttonText: [{ language: String, value: String }],
  backgroundColor: String,
  textColor: String,
  buttonColor: String,
  consentCategories: [
    {
      title: [{ language: String, value: String }],
      description: [{ language: String, value: String }],
      reason: [{ language: String, value: String }],
      yesOrNo: Boolean,
      consentType: String,
    },
  ],
  privacyPolicyLink: String,
  termsLink: String,
  consentExpiry: Number,
  granularity: Boolean,
});

// const Banner = mongoose.model('Banner', bannerSchema);

const Banner = mongoose.model('Banner', bannerSchema);

export default Banner;

// import mongoose from 'mongoose';

// const bannerSchema = new mongoose.Schema(
//   {
//     text: { type: String, required: true },
//     buttonText: { type: String, required: true },
//     backgroundColor: { type: String, default: '#ffffff' },
//     textColor: { type: String, default: '#000000' },
//     buttonColor: { type: String, default: '#007bff' },
//     languages: {
//       type: [String],
//       enum: [
//         'Hindi',
//         'English',
//         'Bengali',
//         'Telugu',
//         'Marathi',
//         'Tamil',
//         'Gujarati',
//         'Urdu',
//         'Kannada',
//         'Odia',
//         'Malayalam',
//         'Punjabi',
//         'Assamese',
//         'Maithili',
//         'Santali',
//         'Kashmiri',
//         'Nepali',
//         'Sindhi',
//         'Dogri',
//         'Konkani',
//         'Bodo',
//         'Manipuri',
//       ],
//       default: ['English'],
//     },
//     consentCategories: [
//       {
//         title: { type: String, required: true },
//         description: { type: String, required: true },
//         yesOrNo: { type: Boolean, required: true },
//         reason: { type: String, required: true },
//         consentType: { type: String, default: 'accepted' },
//       },
//     ],
//     privacyPolicyLink: { type: String },
//     termsLink: { type: String },
//     consentExpiry: { type: Number, default: 30 }, // Expiry in days
//     granularity: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// const Banner = mongoose.model('Banner', bannerSchema);

// export default Banner;
