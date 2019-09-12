 //Dark 




//Dark




jQuery(document).ready(function($){
    var $form_modal = $('.cd-user-modal'),
        $form_login = $form_modal.find('#cd-login'),
        $form_signup = $form_modal.find('#cd-signup'),
        $form_forgot_password = $form_modal.find('#cd-reset-password'),
        $form_modal_tab = $('.cd-switcher'),
        $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
        $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
        $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
        $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
        $main_nav = $('.main-nav');

    //open modal
    $main_nav.on('click', function(event){

        if( $(event.target).is($main_nav) ) {
            // on mobile open the submenu
            $(this).children('ul').toggleClass('is-visible');
        } else {
            // on mobile close submenu
            $main_nav.children('ul').removeClass('is-visible');
            //show modal layer
            $form_modal.addClass('is-visible'); 
            //show the selected form
            ( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
        }

    });

    //close modal
    $('.cd-user-modal').on('click', function(event){
        if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
            $form_modal.removeClass('is-visible');
        }   
    });
    //close modal when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $form_modal.removeClass('is-visible');
        }
    });

    //switch from a tab to another
    $form_modal_tab.on('click', function(event) {
        event.preventDefault();
        ( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
    });

    //hide or show password
    $('.hide-password').on('click', function(){
        var $this= $(this),
            $password_field = $this.prev('input');
        
        ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
        ( 'Hide' == $this.text() ) ? $this.text('Show') : $this.text('Hide');
        //focus and move cursor to the end of input field
        $password_field.putCursorAtEnd();
    });

    //show forgot-password form 
    $forgot_password_link.on('click', function(event){
        event.preventDefault();
        forgot_password_selected();
    });

    //back to login from the forgot-password form
    $back_to_login_link.on('click', function(event){
        event.preventDefault();
        login_selected();
    });

    function login_selected(){
        $form_login.addClass('is-selected');
        $form_signup.removeClass('is-selected');
        $form_forgot_password.removeClass('is-selected');
        $tab_login.addClass('selected');
        $tab_signup.removeClass('selected');
    }

    function signup_selected(){
        $form_login.removeClass('is-selected');
        $form_signup.addClass('is-selected');
        $form_forgot_password.removeClass('is-selected');
        $tab_login.removeClass('selected');
        $tab_signup.addClass('selected');
    }

    function forgot_password_selected(){
        $form_login.removeClass('is-selected');
        $form_signup.removeClass('is-selected');
        $form_forgot_password.addClass('is-selected');
    }

    //REMOVE THIS - it's just to show error messages 
    $form_login.find('input[type="submit"]').on('click', function(event){
        event.preventDefault();
        $form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
    });
    $form_signup.find('input[type="submit"]').on('click', function(event){
        event.preventDefault();
        $form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
    });


    //IE9 placeholder fallback
    //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
    if(!Modernizr.input.placeholder){
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    }

});


//credits https://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
    return this.each(function() {
        // If this function exists...
        if (this.setSelectionRange) {
            // ... then use it (Doesn't work in IE)
            // Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
            var len = $(this).val().length * 2;
            this.setSelectionRange(len, len);
        } else {
            // ... otherwise replace the contents with itself
            // (Doesn't work in Google Chrome)
            $(this).val($(this).val());
        }
    });
};

jQuery('#cody-info ul li').eq(1).on('click', function(){
$('#cody-info').hide();
});
//the login page / the sign up page
/*============================*/

var gun=Gun("https://gunjs.herokuapp.com/gun").get("XeDedsEdfdEdfs"),_c=$("div.chat-container"),_in=$("input.name"),_l=$("div.loginbox"),_cb=$("div.chatbox"),_fc=$("form#chat"),_cm=$(".chatmessage");function scrollToButton(){_cb.stop().animate({scrollTop:_cb[0].scrollHeight})}function LoginChat(){localStorage.setItem("userName",_in.val()),_in.val()?(_c.addClass("show"),_l.addClass("hidden")):alert("Please type username!"),scrollToButton()}$("img.circle").on("click",function(){localStorage.setItem("userImage",$(this).attr("src"))}),$("button.goChat").on("click",function(){LoginChat()}),_in.keypress(function(t){13==t.which&&LoginChat()});var uname=localStorage.getItem("userName");uname&&""!==uname&&(_c.addClass("show"),_l.addClass("hidden")),_fc.on("submit",function(t){t.preventDefault();var n=localStorage.getItem("userImage"),e=_fc.find("input.msg").val();if(uname&&e){var a={status:"online"};a.img=n||"https://ui-avatars.com/api/?name="+uname+"&background=000&color=fff",a.what=e,a.when=(new Date).getTime(),a.who=uname,gun.set(a),_fc.find("input.msg").val("")}}),gun.map().val(function(t,n){if(t&&(t.who||""===t.who||t.img||""===t.img)){var e=$($("#"+n).get(0)||$(".model").find("li").clone(!0).attr({id:n,class:"collection-item chatmsg",name:t.who,status:t.status}).appendTo(".chatmessage"));e.find(".userImage").attr("src",t.img),e.find(".who").text(t.who),e.find(".what").text(t.what),e.find(".when").text(moment(t.when).fromNow()),e.find(".status").addClass(t.status),scrollToButton()}}),$("input.msg").keypress(function(t){13==t.which&&(t.preventDefault(),_fc.find("input.msg").val()?_fc.submit():alert("Please do not leave input blank"))}),$("button.logout").on("click",function(){var t=[uname];_cm.find("li").each(function(){t.indexOf($(this).attr("name"))>-1&&gun.get(this.id).put({status:"offline"}),localStorage.clear(),$(this).removeClass("show"),_c.removeClass("show"),_l.removeClass("hidden")}),location.reload()}),setInterval(function(){var t=[];_cm.find("li[status='online']").each(function(){t.push($(this).attr("name"))});var n=function(t){for(var n=[],e=0;e<t.length;e++)-1==n.indexOf(t[e])&&n.push(t[e]);return n}(t);if(n.length){var e='<ul class="collection">';for(i=0;i<n.length;i++)e+='<li class="collection-item">'+n[i]+'<i class="status online"></i></li>';e+="</ul>"}else e='<ul class="collection"><li class="collection-item">No user is online.</li></ul>';$("div.onlinebox").html(e)},4e3);