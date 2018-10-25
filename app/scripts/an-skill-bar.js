    /*
    * Plugin: an-progress-bar
    * Version: 1.0.1
    * Description: A plugin that fills bars with a percentage you set.
    * Author: Hasan Misbah
    * Copyright 2018, Hasan Misbah
    * Free to use and abuse under the MIT license.
    * http://www.opensource.org/licenses/mit-license.php
    */

(function ($) {

    $.fn.skillbar = function (options) {


        var settings = $.extend(
            {
                speed: 1000,
                bg: ''
            },
            options
        );


        var color = settings.bg;
        var $filled = $(this).find('.filled');
        var $title = $(this).find('.title');

        if (color) {

            $filled.css({
                'background-color': color
            });

            $title.css({
                'background-color': 'rgba(0,0,0,0.5)'
            });
        } else{



            this.each(function (i) {
                var $fill = $(this).find('.filled');

                $fill.animate({
                    width: $(this).find('.filled').data('width')
                },
                    settings.speed
                );
            });
        }
        return this;
    };
})(jQuery);
