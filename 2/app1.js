$(document).ready(function () {
    var isSubmit;

    $('#m1').val('Text');
    $('#m2').val('name@gmail.com');
    $('#m3').val('01.01.2016');
    $('#m4').val('192.168.0.1');
    $("#validation-info").hide();


    $("form").on('submit', function (e) {
        e.preventDefault();

        onSubmit();
        if (isSubmit==true) {
          //  this.submit();
            console.log('submitted');
        }

    });


    function onSubmit() {
        isSubmit=true;
        var inputs = $("form input").not("[type='submit']");
        $(inputs).removeClass('invalid');
        $("#validation-info").hide();
        //console.log(inputs);
        inputs.each(function (index, el) {

            var validationObj = validate(el.attributes, el);
            console.log(validationObj);
            console.log(_.values(validationObj));
            if (!(_.values(validationObj).every(function (el) {
                    return el == false ? false : true;
                }))) {
                $(el).addClass("invalid");
                //set visible
                $("#validation-info").show();
                isSubmit=false;

            }


        })


    }


    function validate(attrs, el) {

        var validationRezult = {obj: el};
        var validationAttr = 'validate-';
        var result = '';
        var emailRegExp = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/g;
        var dateRegExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g;
        var ipRegExp = /^\d+\.\d+\.\d+\.\d+$/g;

        for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];

            //check if attribute needs to be validate
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

            if (attr.name === "validate-date") {
                validationRezult["validate-date"] = false;
                if (el.value.match(dateRegExp)) {
                    validationRezult["validate-date"] = true;
                }
            }

            if (attr.name === "validate-regexp") {
                validationRezult["validate-regexp"] = false;
                if (el.value.match(ipRegExp)) {
                    validationRezult["validate-regexp"] = true;
                }
            }


        }


        return validationRezult;
    }

    //onSubmit();
});

