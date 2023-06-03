import express from 'express';

import { NoteController } from '../controllers/NoteController';
import { WithAuth } from '../middlewares/auth';
import { NoteRepository } from '../repositories/note/NoteRepository';

const router = express.Router();
const repository = new NoteRepository();
const controller = new NoteController(repository);



router.post('/', WithAuth, (req, res) => controller.createNote(req, res));
router.get('/search', WithAuth, (req, res) => controller.searchNotes(req, res));
router.get('/:id', WithAuth, (req, res) => controller.getNote(req, res));
router.get('/', WithAuth, (req, res) => controller.showNotes(req, res));
router.put('/:id', WithAuth, (req, res) => controller.updateNote(req, res));
router.delete('/:id', WithAuth, (req, res) => controller.removeNote(req, res));


export default router;