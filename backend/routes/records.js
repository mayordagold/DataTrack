const express = require('express');
const router = express.Router();
const Record = require('../models/Record');
const authMiddleware = require('../middleware/authMiddleware');

// Create record
router.post('/', authMiddleware, async (req, res) => {
  const { title, category, description, amount } = req.body;
  console.log('Creating record', req.body);
  try {
    const record = new Record({
      title,
      category,
      description,
      amount,
      createdBy: req.user.id,
    });
    await record.save();
    console.log('Record saved', record);
    res.json(record);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all records
router.get('/', authMiddleware, async (req, res) => {
  try {
    const records = await Record.find({ createdBy: req.user.id });
    res.json(records);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get single record
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) return res.status(404).json({ msg: 'Record not found' });
    res.json(record);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update record
router.put('/:id', authMiddleware, async (req, res) => {
  const { title, category, description, amount } = req.body;
  try {
    let record = await Record.findById(req.params.id);
    if (!record) return res.status(404).json({ msg: 'Record not found' });

    record.title = title || record.title;
    record.category = category || record.category;
    record.description = description || record.description;
    record.amount = amount || record.amount;

    await record.save();
    res.json(record);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete record
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) return res.status(404).json({ msg: 'Record not found' });

    await record.remove();
    res.json({ msg: 'Record removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
