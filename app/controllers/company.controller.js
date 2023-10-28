const db = require('../models')
const Company = db.company

//post user api
exports.upadte = async (req,res) => {
    try {
        const data = req.body
        const { company, email, phone1, phone2, add1, add2, add3, city, state, country }= req.body
        console.log('company: ',data)
        let upadteColumnArray = []
        const companyData ={
            id: 1
        } 
        if(company){
            console.log("company")
            upadteColumnArray.push('company')
            companyData.company = company
        }
        if(email){
            upadteColumnArray.push('email')
            companyData.email = email
        }
        if(phone1){
            upadteColumnArray.push('phone1')

            companyData.phone1 = phone1
        }
        if(phone2){
            upadteColumnArray.push('phone2')
            companyData.phone2 = phone2
        }
        if(add1){
            upadteColumnArray.push('company')
            companyData.add1 = add1
        }
        if(add2){
            upadteColumnArray.push('add2')
            companyData.add2 = add2
        }
        if(add3){
            upadteColumnArray.push('add3')
            companyData.add3 = add3
        }
    
        if(city){
            upadteColumnArray.push('city')
            companyData.city = city
        }
    
        if(state){
            upadteColumnArray.push('state')
            companyData.state = state
        }
    
        if(country){
            upadteColumnArray.push('country')
            companyData.country = country
        }
    
        if (!data) {
          return res.status(400).json({
            message: 'nothing to upadte'
          })
        }
    
        if(upadteColumnArray.length)
        {
        const data = await Company.bulkCreate([companyData], {updateOnDuplicate: upadteColumnArray})
        if (data.length){
            return res.status(200).json({
                success: true,
                data
              })
          }
          else{
            console.log("data: ", data)
            return res.status(404).send({ message: 'company not updated.', success: false, data })
        }}
        else{
            return res.status(200).json({
                message: 'nothing to upadte updated.',
                success: true
              })
        }
      } catch (err) {
        console.log('*******', err)
        return res.status(500).json({
          message: 'Internal server error'
        })
      }

}

exports.findOne = async(req, res) => {
    try{
       
        const id = req.params.id
        const data = await Company.findByPk(id)
        
        if(data){
            console.log("data: ", data)
            return res.status(200).send({ message: 'company found.', success: true, data })
        }
        return res.status(404).json({
            message: 'not found',
            success: false,
            data
        })
    }
    catch(err){
        console.log('*******', err)
        return res.status(500).json({
          message: 'Internal server error'
        })
    }
}