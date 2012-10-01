(function($){
    $(document).ready(function(){
        var images = [
            'http://monstermonth.bobholt.me/img/monsters/oct1.jpg',
            'http://monstermonth.bobholt.me/img/monsters/oct3.jpg',
            'http://monstermonth.bobholt.me/img/monsters/oct5.jpg',
            'http://monstermonth.bobholt.me/img/monsters/oct10.jpg',
            'http://monstermonth.bobholt.me/img/monsters/oct22.jpg',
            'http://monstermonth.bobholt.me/img/monsters/oct29.jpg',
            'http://media.drunkenfist.com/304/wp-content/uploads/2011/10/smokin.png',
            'http://media.drunkenfist.com/304/wp-content/uploads/2011/10/zombie-zombie.png',
            'http://media.drunkenfist.com/304/wp-content/uploads/2011/10/pushead.png',
            'http://media.drunkenfist.com/304/wp-content/uploads/2011/10/cupcake-monster.png',
            'http://media.drunkenfist.com/304/wp-content/uploads/2011/10/gorgo-the-foul.png',
            'http://media.drunkenfist.com/304/wp-content/uploads/2011/10/clubbing.jpg',
            'http://media.drunkenfist.com/304/wp-content/uploads/2011/10/snakeheaddude.jpg'
        ];
        var $container = $('.container');
        var containerHeight = $container.height();
        var bodyWidth = $('body').width();

        var addMonster = function(top, right){
            var id = 'canvas-' + top;
            var classes = ['monster'];
            if (right){
                classes.push('right');
            }
            else {
                classes.push('left');
            }
            var $canvas = $('<canvas />', {
                'id': id,
                'class': classes.join(' ')
            }).css('top', top).hide();

            $container.append($canvas);

            var canvas = $canvas.get(0);
            var context = canvas.getContext('2d');

            var monsterImage = new Image();
            var imgNumber = ~~(Math.random() * images.length);
            monsterImage.src = images[imgNumber];
            images.splice(imgNumber, 1);
            monsterImage.onload = function(){
                var width = 250;
                var height = monsterImage.height * width / monsterImage.width;
                canvas.width = width;
                canvas.height = height;
                context.drawImage(monsterImage, 0, 0, width, height);
                $canvas.fadeIn();
            };
        };

        var addMonsterRight = function(top) {
            addMonster(top, true);
        };

        var addMonsterLeft = function(top) {
            addMonster(top, false);
        };

        if(bodyWidth > 600){

            for(var top = 50; top < containerHeight - 350; top += 350){
                if (images.length > 0){
                    addMonsterRight(top);
                    addMonsterLeft(top);
                }
            }
        }
    });
})(jQuery);