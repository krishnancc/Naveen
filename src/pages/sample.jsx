// import { Card, Grid, Stack, Typography } from '@mui/material';
// import React from 'react';

// const MyComponent = () => {
//   const imageUrl = 'https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png'; // Replace with your actual image URL

//   return (
//     <Grid item xs={12} sm={6} md={6} lg={6} sx={{
//       position: 'relative', height: '400px', backgroundImage: `url(${imageUrl})`,
//       backgroundSize: 'cover', backgroundPosition: 'center'
//     }}>
//       <Stack spacing={3} sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
//         <Card style={{ background: 'linear-gradient(to right, #002E8C, #0051F7)', padding: '24px', width: '100%' }}>
//           <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
//             <Typography variant='h6' color="#F5F5F5">
//               Web hosting
//             </Typography>
//             <Typography variant='body1' color="#F5F5F5">
//               Shared hosting is a budget-friendly option where multiple website owners share a server. It's ideal for beginners or small businesses seeking affordable hosting, although it may have limitations in terms of performance and resources.
//             </Typography>
//           </Stack>
//         </Card>
//         <Card style={{ background: 'linear-gradient(to right, #002E8C, #0051F7)', padding: '24px', width: '100%' }}>
//           <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
//             <Typography variant='h6' color="#F5F5F5">
//               UI/UX Design
//             </Typography>
//             <Typography variant='body1' color="#F5F5F5">
//               I provide comprehensive UI/UX design services, creating visually appealing and intuitive interfaces that enhance user experiences.
//             </Typography>
//           </Stack>
//         </Card>
//       </Stack>
//     </Grid>

//   );
// };

// export default MyComponent;
// src/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add your form submission logic here (e.g., send data to an API)
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
