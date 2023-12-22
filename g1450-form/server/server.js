const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// db.connect((err) => {
//     if (err) {
//         console.error('MySQL connection failed:', err);
//     } else {
//         console.log('Connected to MySQL');
//     }
// });

// Save form data to MySQL
app.post('/api/formdata', (req, res) => {
    const formData = req.body;
    console.log(formData)
    // db.query('INSERT INTO form_data SET ?', formData, (err, result) => {
    //     if (err) {
    //         console.error('MySQL insert error:', err);
    //         res.status(500).send('Internal Server Error');
    //     } else {
    //         console.log('Form data inserted:', result);
    //         res.status(200).send('Form data saved successfully');
    //     }
    // });
});