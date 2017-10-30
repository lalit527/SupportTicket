var nodemailer = require("nodemailer");
	
exports.mailFunc = function(subject, recepient, text, fn){
	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: '',
	    pass: ''
	  }
	});
  
  //for(var user=0; user< recepient.length; user++){
      var mailOptions = {
              from: 'ensemble@no-reply.com',
              to: recepient,
              subject: subject,
              text: text
       };   
       var response = transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
                fn(error);
              } else {
                console.log('Email sent: ' + info.response);
                
                fn('Email sent: ' + info.response);
              }
       });
  //}
    	
}
