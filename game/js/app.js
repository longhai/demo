jQuery(document).ready(function(jQuery){
 if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $('.post-thumb').hover(function() {
            var videoEl, videoUrl, videoPoster;
            if (videoUrl = $(this).data('video')) {
                videoPoster = $(this).data('poster');
                videoEl = $('<video />').css({'height': '100%', 'width':'100%'}).prop('autoplay', true).attr('poster', videoPoster).prop('loop', true).attr('src', videoUrl);
                $(this).find('.hover-posts').html('').append(videoEl);
            }
        }, function() {
            if ($(this).data('video')) {
                $(this).find('.hover-posts').html('');
            }
        });
    }
});
