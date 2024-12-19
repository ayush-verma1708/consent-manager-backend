import request from 'supertest';
import mongoose from 'mongoose';
import app from '../app.js'; // Import the Express app
import Banner from '../models/Banner.js';

describe('Banner API', () => {
  beforeAll(async () => {
    // Connect to a test database
    const TEST_DB_URI =
      process.env.TEST_DB_URI || 'mongodb://localhost:27017/testdb';
    await mongoose.connect(TEST_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Clean up and disconnect
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  describe('POST /api/banners/save', () => {
    it('should save a banner and return its ID', async () => {
      const bannerData = {
        text: 'Sample Banner Text',
        buttonText: 'Click Here',
        backgroundColor: '#ffffff',
        textColor: '#000000',
        buttonColor: '#007bff',
        consentCategories: [
          {
            title: 'Analytics',
            description: 'Analytics consent',
            consentType: 'accepted',
          },
        ],
        privacyPolicyLink: 'https://example.com/privacy',
        termsLink: 'https://example.com/terms',
        consentExpiry: 30,
        granularity: true,
      };

      const response = await request(app)
        .post('/api/banners/save')
        .send(bannerData);
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.bannerId).toBeDefined();
    });
  });

  describe('GET /api/banners/:id', () => {
    it('should retrieve a banner by ID', async () => {
      const banner = new Banner({
        text: 'Sample Banner Text',
        buttonText: 'Learn More',
        consentCategories: [
          {
            title: 'Marketing',
            description: 'Marketing consent',
            consentType: 'denied',
          },
        ],
      });
      await banner.save();

      const response = await request(app).get(`/api/banners/${banner._id}`);
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.banner).toMatchObject({
        text: 'Sample Banner Text',
        buttonText: 'Learn More',
      });
    });

    it('should return 404 if the banner is not found', async () => {
      const invalidId = new mongoose.Types.ObjectId();
      const response = await request(app).get(`/api/banners/${invalidId}`);
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Banner not found');
    });
  });
});
