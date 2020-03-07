const {Router} = require('express');
const router = Router();

const { renderIndex,renderNewEntry,creatNewEntry } = require('../controllers/entries.controller');

router.get('/', renderIndex);

router.get('/new-entry', renderNewEntry);

router.post('/new-entry', creatNewEntry)

module.exports = router;