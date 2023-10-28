const db = require('../models')
const Testimonial = db.testimonial

//get user api
exports.findAll = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll()
    // console.log("--------------------------",user)
    if (!testimonials) {
      return res.status(404).send({ message: 'testimonials Not found.', success: false })
    }

    return res.status(200).send({
      success: true,
      testimonials
    })
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}
//post user api
exports.create = async (req,res) => {
    try {
        const data= req.body
        console.log('Testimonials: ',data)
        const testimonialData = {
          desg: data.desg,
          message: data.message,
          name: data.name
        }
    
        if (!data) {
          return res.status(400).json({
            message: 'username, email and password is required for creating user'
          })
        }
    
        const testimonial = await Testimonial.create(testimonialData)
        if (!testimonial) {
            return res.status(404).send({ message: 'testimonials Not create.', success: false })
          }
        return res.status(200).json({
          success: true,
          testimonial
        })
      } catch (err) {
        console.log('*******', err)
        return res.status(500).json({
          message: 'Internal server error'
        })
      }

}

exports.deleteTestimonialById = async (req, res) => {
  try {
    const {id} = req.params;

    // Find the testimonial by ID and delete it
    const result = await Testimonial.destroy({
      where: { id: id },
    });

    if (result === 0) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found or already deleted',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Testimonial deleted successfully',
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

