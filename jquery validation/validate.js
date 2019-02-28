$(document).ready(()=>{
    // custom validator
    $.validator.addMethod('customEmailValidator',(value,element)=>{
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValid = regex.test(value);
        return isValid; 
    });
    $.validator.addMethod('customPasswordValidator',(value,element)=>
    {
        let reg =/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[#@&_])([a-zA-Z0-9#@_]{8})$/;
        let isV = reg.test(value);
        return isV;
    });
    // validate the form
    $('#sbt-register').click(()=>{
        $('#frm-registration').validate({
            rules:{
                name: 'required',

                email: {
                    required: true,
                    customEmailValidator: true
                },
                phone: {
                    required: true,
                    min: 4000000001,
                    max: 9999999999
                },
                password: {
                    required: true,
                    customPasswordValidator: true

                }
            },
            messages:{
                name : 'Name cannot be left blank',
                email: {
                    required: 'Email cannot be left blank',
                    customEmailValidator: 'Please re-enter a valid email'
                },
                phone: {
                    required: 'Phone cannot be left blank',
                    min: 'Phone number cannot be less than 4000000001',
                    max: 'Phone number cannot be greater than 9999999999'
                },
                password: {
                    required: 'password cannot be empty',
                    
                 customPasswordValidator:'please enter a valid password'
                }
            }
        });
    });
}); 