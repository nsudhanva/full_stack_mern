var axios = require('axios');
function ContactForm(data){
    this.name = data.name;
    this.email = data.email;
    this.mobile = data.mobile;
    this.message = data.message;
    this.submit = function(){
        var dataToSend = {
            name:this.name,
            email:this.email,
            mobile:this.mobile,
            message:this.message
        };
        var phone = parseInt(data.mobile);
        var phoneValidation;
        var emailValidation;
        var nameValidation ;
        var falseStatements = [];
        function validate_phone (){
            if(data.mobile.length == 10){
                phoneValidation = true;
                console.log('I am in 1');
            }
            else{
                console.log('I am in 2');
                falseStatements.push('phone number should be 10 digits');

            }
        }
        function validate_email(){
            if(data.email.length > 0){
                console.log('I am in 3');
                emailValidation = true;
            }
            else{
                console.log('I am in 4');
                falseStatements.push('email should not e empty');
            }
        }
        function validate_name(){
            if(data.name.length > 0){
                console.log('I am in 5');
                nameValidation = true;
            }
            else{
                console.log('I am in 6');
                falseStatements.push('name should not be empty');
            }
        }
        function validate(){
            validate_email();
            validate_phone();
            validate_name();
        }
        validate();

        if(phoneValidation == true && emailValidation == true && nameValidation == true){
            axios.post('http://dct-api-data.herokuapp.com/contact_forms.json',dataToSend)
            .then(function(response){
                
                console.log('data coming from server this time');
                console.log(response.data);
            
            })
            .catch(function(err){
                //server side error being displayed in the ui
                console.log('These errors prohibited the form from being saved')
            // console.log(err.response);
                var errors = err.response.data;
                for(var key in errors){
                    console.log(key, errors[key].join(', '));
                }
            })
    }   
    else{
        console.log(falseStatements);
    }
}
}

var cf1  = new ContactForm({name:'',email:'',mobile:'968643549',message:'call back'});
cf1.submit();