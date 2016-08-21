$(document).ready(function () {

    $("form").on('submit', function () {

    });

    $('#rmm').val('hell444444o');


    function onSubmit() {
//
        //var el = $("form").children('input');
        var el = $("form input").not("[type='submit']");
        console.log(el );
        el.each(function (index, el) {
            console.log(validate(el.attributes, el));
        })


    }


    function validate(attrs, el) {
        // required minlength  maxlength email

        var validationRezult = {obj: el};
        var isForValidation = 'validate-';
        var result = '';

        for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];

            //check if attrubete needs to be validate
            if (attr.name.indexOf(isForValidation) < 0) {
                continue;
            }


            if (attr.name === "validate-required") {
                validationRezult["validate-required"] = true;
                if (attr.value == "") {
                    validationRezult["validate-required"] = false;
                }
            }

            if ( attr.name === "validate-minlength") {
                validationRezult["validate-minlength"] = true;
                if ((+attr.value) <= el.value.length) {
                    validationRezult["validate-minlength"] = false;
                }
            }

        }


        return validationRezult;
    }

    onSubmit();


});

