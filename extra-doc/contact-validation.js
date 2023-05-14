import 'jquery-validation';
import Utils from '../../util/utils';
const ContactForm = {

    _jForm: $('.jsContactForm'),
    email: '',
    init() {
        this.initValidations();
        jQuery.validator.addMethod('lettersonly', function(value, element) {
            return this.optional(element) || /^[a-z\s]+$/i.test(value);
        }, 'Please provide only alphabetical characters');
        jQuery.validator.addMethod('validemail', function(value) {
            var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            return pattern.test(value);
        }, 'Please provide a valid e-mail address');
        jQuery.validator.addMethod('customphone', function(value, element) {
            return this.optional(element) || /^\+?([0-9]{2})\)?[-. ]?([0-9]{6,15})$/.test(value);
        }, 'Please provide a valid phone number');


    },

    initValidations() {
        const me = this;
        if (this._jForm.length > 0) {
            var config = Utils.getValidationConfig({
                ignore: [],
                rules: {
                    your_name: {
                        required: true,
                        //minlength: 2,
                        lettersonly: true,
                    },
                    your_email: {
                        required: true,
                        validemail: true,

                    },
                    phone_number: {
                        required: true,
                        minlength: 8,
                        //digits: true,
                        maxlength: 15,
                        customphone: true,

                    },
                    job_title: {
                        required: true,
                        lettersonly: true,
                    },

                    company_name: {
                        required: true,
                        // lettersonly: true,
                    },


                },
                messages: {

                    your_name: {
                        required: 'Please provide your Name',
                    },
                    your_email: {
                        required: 'Please provide your E-mail address',
                    },
                    phone_number: {
                        required: 'Please provide your Phone number',
                        matches: '[0-9]+',
                        minlength: 'Please provide 8 digit number',
                        //noSpace: 'Space are not allowed',
                        //maxlength: 'Maximum limit: 15 digits.',
                        maxlength: 'Maximum 15 digit number allowed',
                    },
                    job_title: {
                        required: 'Please provide your Job title',
                        minlength: 'Please provide your Job categories',
                    },
                    company_name: {
                        required: 'Please provide your Company name',
                        minlength: 'Please provide your Company name',
                    },


                },
                submitHandler: function() {
                    me.onFormSubmit();
                },
            });
            this._jForm.validate(config);
        }
    },
    onFormSubmit() {
        if (this._jForm.valid()) {
            var $form = this._jForm;
            var unindexed_array = $form.serializeArray();
            var indexed_array = {};
            jQuery.map(unindexed_array, function(n) {
                indexed_array[n['name']] = n['value'];
            });
            var formData = {};
            formData = indexed_array;
            // formData.form_type = 'plans_from';
            Utils.sendRequest({
                'url': '/wp-admin/admin-ajax.php',
                'data': {
                    'action': 'getContactForm',
                    'formData': formData,
                },
                'onDone': $.proxy(this._onSuccess, this),
            });
        }
        return false;
    },
    _onSuccess(response) {
        this._jForm[0].reset();
        Utils.showLoader(true);
        Utils.notify({
            'message': response.message,
        });

    },


}
export default ContactForm;