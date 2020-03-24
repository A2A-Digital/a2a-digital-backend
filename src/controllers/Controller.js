import nodeMailer from "nodemailer";
const dotenv = require("dotenv");
dotenv.config();

class Controller {

    constructor(service) {
      this.service = service;
      this.getAll = this.getAll.bind(this);
      this.find = this.find.bind(this);
      this.insert = this.insert.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);

    }
  
    async getAll(req, res) {
      return res.status(200).send(await this.service.getAll(req.query));
    }
    
    async find(req, res){
      const { title } = req.params;
      console.log(req.params);
      let response = await this.service.find({title});
      return res.status(response.statusCode).send(response);
    }
    async insert(req, res) {
      let response = await this.service.insert(req.body);
      if (response.error) return res.status(response.statusCode).send(response);
      return res.status(201).send(response);
    }
  
    async update(req, res) {
      const { id } = req.params;
  
      let response = await this.service.update(id, req.body);
  
      return res.status(response.statusCode).send(response);
    }
  
    async delete(req, res) {
      const { id } = req.params;
  
      let response = await this.service.delete(id);
  
      return res.status(response.statusCode).send(response);
    }
    // Sending Email
    async sendMail(req, res){
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EM_USER,
                pass: process.env.EM_PASS
            }
        });
        let mailOptions = {
            from: process.env.EM_USER,
            to: 'a2adigital@kit.edu.kh',
            subject: req.body.name,
            text: req.body.country, // plain text body
            html: `<h3>Email: ${req.body.email}</h3> 
              <h3>Name: ${req.body.name}</h3> 
              <h3>Country: ${req.body.country}</h3>
              <h3>Feedback: ${req.body.feedback}</h3>` // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                let status ={
                    error: true,
                    statusCode: 400,
                    data: error.toString()
                };
                return res.status(status.statusCode).send(status);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            let status = {
                error: false,
                statusCode: 200,
                data: 'Successfully'
            };
            return res.status(status.statusCode).send(status);
        });

    }
    // Sending Email Japan website
    async sendMailJapan(req, res){
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EM_USER,
                pass: process.env.EM_PASS
            }
        });
        let mailOptions = {
            from: process.env.EM_USER,
            to: 'a2adigital@kit.edu.kh',
            subject: req.body.message,
            text: req.body.message, // plain text body
            html: `<h3>Email: ${req.body.email}</h3> 
              <h3>FirstName: ${req.body.first_name}</h3> 
              <h3>LastName: ${req.body.last_name}</h3>
              <h3>Message: ${req.body.message}</h3>` // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                let status ={
                    error: true,
                    statusCode: 400,
                    data: error.toString()
                };
                return res.status(status.statusCode).send(status);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            let status = {
                error: false,
                statusCode: 200,
                data: 'Successfully'
            };
            return res.status(status.statusCode).send(status);
        });

    }
  
  }
  
  export default Controller;