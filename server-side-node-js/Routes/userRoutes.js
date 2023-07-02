const express= require('express');
const router= express.Router();
const userController= require('../Controllers/userController');
const diaryController=require('../Controllers/diaryController');

router.get('/:_id/diary',diaryController.getUsersDiary);
router.post('/:_id/diary',diaryController.addNewDaySummary);
router.post('/:idU/diary/:idD',diaryController.updateDaySummary);
router.delete('/:idU/diary/:idD',diaryController.removeDaySummary);

router.get('/', userController.getAllUsers);
router.get('/:_id', userController.getOneUser);
router.put('/:_id', userController.updateUser);
router.delete('/:_id', userController.deleteUser);
router.post('/', userController.addNewUser);


module.exports= router;