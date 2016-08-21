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
        var self = this;

        this.on('click', function () {
            self.text(self.attr("data-original-text"));
        });


        return this.text(txt);
    }

    var block = $("<div>");

    block.trunk(7).append('body');
    console.log($('#content').trunk(7));

});


