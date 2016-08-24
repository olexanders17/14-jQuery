$(function () {
    $.fn.trunk = function (limit) {
        var limit = limit || 0;
        var originalText = this.text();
        var HELLIP = '\u2026';
        var txt = this.text()
            .slice(0, limit)
            .concat(HELLIP);


        //save
        this.attr('data-original-text', originalText);
        this.attr('data-trunked', "trunked");

        var self = this;

        this.on('click', function () {
            //short text
            if (self.attr('data-trunked') == 'trunked') {
                self.text(txt);
                self.attr('data-trunked', "notTrunked");
            }
            //original text
            else {
                self.text(self.attr("data-original-text"));
                self.attr('data-trunked', "trunked");
            }

        });

        return self;
    }

    var block = $("<div>");

    block.trunk(7).append('body');
    console.log($('#content').trunk(7));

});


