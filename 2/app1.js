$(document).ready(function () {

    $("form").on('submit', function () {

    });

   // $('#m1').val('hell444444o');
    $('#m2').val('sdasd@sfdsf.ty');


    function onSubmit() {
//
        //var el = $("form").children('input');
        var el = $("form input").not("[type='submit']");
        console.log(el);
        el.each(function (index, el) {
            console.log(validate(el.attributes, el));
        })


    }


    function validate(attrs, el) {
        // required minlength  maxlength email

        var validationRezult = {obj: el};
        var validationAttr = 'validate-';
        var result = '';
        var emailRegExp = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/g;

        for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];

            //check if attrubete needs to be validate
            if (attr.name.indexOf(validationAttr) < 0) {
                continue;
            }


            if (attr.name === "validate-required") {
                validationRezult["validate-required"] = false;
                if (el.value) {
                    validationRezult["validate-required"] = true;
                }
            }

            if (attr.name === "validate-minlength") {
                validationRezult["validate-minlength"] = false;
                if ((+attr.value) <= el.value.length) {
                    validationRezult["validate-minlength"] = true;
                }
            }

            if (attr.name === "validate-maxlength") {
                validationRezult["validate-maxlength"] = false;
                if ((+attr.value) >= el.value.length) {
                    validationRezult["validate-maxlength"] = true;
                }
            }

            if (attr.name === "validate-email") {
                validationRezult["validate-email"] = false;
                if (el.value.match(emailRegExp)) {
                    validationRezult["validate-email"] = true;
                }
            }


        }


        return validationRezult;
    }

    onSubmit();


});

