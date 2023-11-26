const db = require('../models')
const Service = db.service
const sharp = require('sharp');
const fs = require('fs');

exports.findAll = async (req, res) => {
    try {
      const results = await Service.findAll()
      // console.log("--------------------------",user)
      if (!results) {
        return res.status(404).send({ message: 'services Not found.', success: false })
      }

      const services = results
      for (const service of services) {
        const base64string = service.logo.toString('base64');
        // service.logo = `data:image/png;base64,${service.logo}`;
        service.logo = base64string;
        // service.logo = `data:image/svg+xml;base64,${service.logo}`;
      }
  
      return res.status(200).send({
        success: true,
        services
      })
    } catch (error) {
      return res.status(500).send({ message: error.message })
    }
  }
  //post user api
exports.create = async (req,res) => {
    try {
        const logo = req.file.buffer; // Get logo buffer
        const thumbnail = await createThumbnail(logo)
        console.log("thumbnail: ", thumbnail)
        let service = req.body.service;
        console.log("service: ",service)
        const { title, content } = JSON.parse(service)
        const newPost = await Service.create({ title, content, logo:thumbnail });
        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (err) {
        console.error('Error creating post:', err);
        res.status(500).json({ error: 'Failed to create post' });
    }
}
  
exports.deleteServiceById = async (req, res) => {
try {
    const {id} = req.params;

    // Find the testimonial by ID and delete it
    const result = await Service.destroy({
    where: { id: id },
    });

    if (result === 0) {
    return res.status(404).json({
        success: false,
        message: 'services not found or already deleted',
    });
    }

    return res.status(200).json({
    success: true,
    message: 'Service deleted successfully',
    });
} catch (err) {
    console.error(err.message);
    return res.status(500).json({
    success: false,
    message: 'Internal server error',
    });
}
};

// Function to create a thumbnail
async function createThumbnail(inputImagePath) {
  try {
    // Read the input image using sharp
    const image = sharp(inputImagePath);

    // Resize the image to create a thumbnail
    return await image
      .resize({
        width: 100,
        height: 100,
        fit: 'cover', // Adjusts the image to cover the entire area defined by width x height
        position: sharp.strategy.entropy // Strategy to determine the important areas when resizing
      }).toBuffer()
  } catch (error) {
    console.error('Error creating thumbnail:', error);
  }
}
