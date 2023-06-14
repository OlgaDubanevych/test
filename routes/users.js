const express = require('express');
const router = express.Router();

let userItems = [];

function validateUser(user) {
  const requiredFields = [
    'user_id',
    'first_name',
    'last_name',
    'gender',
    'date_of_birth',
    'address',
    'city',
    'postal_code',
    'province',
    'phone_number',
    'email',
    'country_of_origin',
    'occupation',
    'interests',
    'few_words_about_me',
    'joined_on_date'
  ];
  const missingFields = [];

  requiredFields.forEach(field => {
    if (!user.hasOwnProperty(field) || user[field].trim() === '') {
      missingFields.push(field);
    }
  });

  return missingFields;
}

router.get('/users', (req, res) => {
  return res.json(userItems);
});

router.get('/users/:user_id', (req, res) => {
  const userId = parseInt(req.params.user_id);
  const user = userItems.find((item) => item.user_id === userId);

  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ message: 'User not found' });
  }
});

router.post('/users', (req, res) => {
  const user = req.body;
  const missingFields = validateUser(user);

  if (missingFields.length > 0) {
    return res.status(400).json({ error: 'Missing fields', missingFields });
  }

  userItems.push(user);

  return res.status(201).json(user);
});

router.put('/users/:user_id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedUser = req.body;

  const index = userItems.findIndex((item) => item.user_id === itemId);

  if (index !== -1) {
    userItems[index] = { ...userItems[index], ...updatedUser };
    return res.status(200).json(userItems[index]);
  } else {
    return res.status(404).json({ error: 'User not found' });
  }
});

router.patch('/users/:user_id', (req, res) => {
  const itemId = parseInt(req.params.user_id);
  const updatedFields = req.body;

  const index = userItems.findIndex((item) => item.user_id === itemId);

  if (index !== -1) {
    userItems[index] = { ...userItems[index], ...updatedFields };
    return res.status(200).json(userItems[index]);
  } else {
    return res.status(404).json({ error: 'User not found' });
  }
});

router.delete('/users/:user_id', (req, res) => {
  const itemId = parseInt(req.params.user_id);
  const index = userItems.findIndex((item) => item.user_id === itemId);

  if (index !== -1) {
    userItems.splice(index, 1);
    return res.status(204).send();
  } else {
    return res.status(404).json({ error: 'User not found' });
  }
});

router.get('/add-user', (req, res) => {
  const form = `
    <form action="/api/users" method="POST">
      <label for="user_id">user_id:</label>
      <input type="text" id="user_id" name="user_id" required>

      <label for="first_name">First Name:</label>
      <input type="text" id="first_name" name="first_name" required>

      <label for="last_name">Last Name:</label>
      <input type="text" id="last_name" name="last_name" required>

      <label for="gender">Gender:</label>
      <input type="text" id="gender" name="gender" required>

      <label for="date_of_birth">Date of Birth:</label>
      <input type="text" id="date_of_birth" name="date_of_birth" required>

      <label for="address">Address:</label>
      <input type="text" id="address" name="address" required>

      <label for="city">City:</label>
      <input type="text" id="city" name="city" required>

      <label for="postal_code">Postal Code:</label>
      <input type="text" id="postal_code" name="postal_code" required>

      <label for="province">Province:</label>
      <input type="text" id="province" name="province" required>

      <label for="phone_number">Phone Number:</label>
      <input type="text" id="phone_number" name="phone_number" required>

      <label for="email">Email:</label>
      <input type="text" id="email" name="email" required>

      <label for="country_of_origin">Country of Origin:</label>
      <input type="text" id="country_of_origin" name="country_of_origin" required>

      <label for="occupation">Occupation:</label>
      <input type="text" id="occupation" name="occupation" required>

      <label for="interests">Interests:</label>
      <input type="text" id="interests" name="interests" required>

      <label for="few_words_about_me">Few Words About Me:</label>
      <input type="text" id="few_words_about_me" name="few_words_about_me" required>

      <label for="joined_on_date">Joined On Date:</label>
      <input type="text" id="joined_on_date" name="joined_on_date" required>

      <button type="submit">Add User</button>
    </form>
  `;

  return res.send(form);
});

module.exports = router;
