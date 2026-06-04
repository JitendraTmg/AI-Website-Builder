import express from 'express';
import { changeWebsite, deployWebsite, generateWebsite, getAllWEbsites, getBySlug, getWebsiteBYId } from '../controllers/websiteController.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';

const router = express.Router()

router.post('/generate',isAuthenticated ,generateWebsite)
router.post('/update/:id',isAuthenticated ,changeWebsite)
router.get('/getbyid/:id',isAuthenticated ,getWebsiteBYId)
router.get('/getall',isAuthenticated ,getAllWEbsites)
router.get('/deploy/:id',isAuthenticated ,deployWebsite)
router.get('/getbyslug/:slug',getBySlug)

export default router;