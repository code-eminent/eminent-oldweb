module.exports = {

  sendMail(name,fromEmail,contact,message){

    let response='success';

var nodemailer = require('nodemailer');

// Create the transporter with the required configuration for Gmail
// change the user and pass !
var transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'dontreply@eminentinnovative.com',
        pass: 'providepasswordhere'
    }
    
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: '"Enquiry " dontreply@eminentinnovative.com', // sender address (who sends)
    to: 'info@eminentinnovative.com', // list of receivers (who receives)
    //bcc: 'info@eminentinnovative.com',
    subject: 'EminentQuery',
    html: " Name - "+name+"<br>Sender :- "+fromEmail+"<br> Phone:- "+contact+"<br> Message:- "+message//'<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    console.log(mailOptions);

    if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
	return response;

      }

});
    
 
   // return response;

 
}   
};