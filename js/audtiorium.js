// minified snippet to load TalkJS without delaying our page
(function(t, a, l, k, j, s) {
    s = a.createElement('script');
    s.async = 1;
    s.src = "https://cdn.talkjs.com/talk.js";
    a.head.appendChild(s);
    k = t.Promise;
    t.Talk = {
        v: 3,
        ready: {
            then: function(f) {
                if (k) return new k(function(r, e) {
                    l.push([f, r, e])
                });
                l
                    .push([f])
            },
            catch: function() {
                return k && new k()
            },
            c: l
        }
    };
})(window, document, []);

var user = null;

function appendUser() {
    getUser();
    for (var i = 0; i < user.length; i++) {
        var user_status = null;
        if (user[i].user_status === 'active') {
            user_status = "user_active";
        } else if (user[i].user_status === 'away') {
            user_status = "user_away";
        } else {
            user_status = "user_dnd";
        }

        var static = '<a class="" href="';
        var linkedin_link = undefined;
        var twitter_link = undefined;
        if (user[i].linkedin_link !== undefined || user[i].linkedin_link !== null) {
            var linkedin_link = static + user[i].linkedin_link + '" style="margin-right:5px;"><img src="img/in.png" width="18" /></a>';
        } else {
            linkedin_link = null;
        }
        if (user[i].twitter_link !== undefined || user[i].twitter_link !== null) {
            twitter_link = static + user[i].twitter_link + '" style="margin-right:5px;"><img src="img/tw.png" width="20" /></a>';
        } else {
            twitter_link = null;
        }
        if (user[i].linkedin_link !== null && user[i].twitter_link !== null) {
            $(".clear").after($('<div class="col-lg-4 col-sm-6"> <div class="card hovercard"> <div class="cardheader"> </div> <div class="info"> ' +
                '<div class="avatar"> <object data="img' + user[i].image + '" type="image/png"> ' +
                ' <img alt="' + user[i].first_name + ' ' + user[i].last_name + '" src="img/user.jpg"> ' +
                ' <i class="' + user_status + '"></i></object></div>' +
                ' <div class="title"><a href="#">' + user[i].first_name + ' ' + user[i].last_name + '</a></div> <div class="desc">' + user[i].desgination +
                ' </div> <div class="desc"> ' + user[i].name_of_organisation + '</div><div class="bottom"> ' + linkedin_link + twitter_link +
                ' <a class="" href="inbox.html?id=' + user[i].id + '"><img src="img/chat-icon.png" width="22" /></a> </div></div></div>'));
        } else if (user[i].linkedin_link !== null && user[i].twitter_link === null) {
            $(".clear").after($('<div class="col-lg-4 col-sm-6"> <div class="card hovercard"> <div class="cardheader"> </div> <div class="info"> ' +
                '<div class="avatar"> <object data="img' + user[i].image + '" type="image/png"> ' +
                ' <img alt="' + user[i].first_name + ' ' + user[i].last_name + '" src="img/user.jpg"> ' +
                ' <i class="' + user_status + '"></i></object></div>' +
                ' <div class="title"><a href="#">' + user[i].first_name + ' ' + user[i].last_name + '</a></div> <div class="desc">' + user[i].desgination +
                ' </div> <div class="desc"> ' + user[i].name_of_organisation + '</div><div class="bottom"> ' + linkedin_link +
                ' <a class="" href="inbox.html?id=' + user[i].id + '" ><img src="img/chat-icon.png" width="22" /></a> </div></div></div>'));
        } else if (user[i].linkedin_link === null && user[i].twitter_link !== null) {
            $(".clear").after($('<div class="col-lg-4 col-sm-6"> <div class="card hovercard"> <div class="cardheader"> </div> <div class="info"> ' +
                '<div class="avatar"> <object data="img' + user[i].image + '" type="image/png"> ' +
                ' <img alt="' + user[i].first_name + ' ' + user[i].last_name + '" src="img/user.jpg"> ' +
                ' <i class="' + user_status + '"></i></object></div>' +
                ' <div class="title"><a href="#">' + user[i].first_name + ' ' + user[i].last_name + '</a></div> <div class="desc">' + user[i].desgination +
                ' </div> <div class="desc"> ' + user[i].name_of_organisation + '</div><div class="bottom"> ' + twitter_link +
                ' <a class="" href="inbox.html?id=' + user[i].id + '"><img src="img/chat-icon.png" width="22" /></a> </div></div></div>'));
        } else {
            $(".clear").after($('<div class="col-lg-4 col-sm-6"> <div class="card hovercard"> <div class="cardheader"> </div> <div class="info"> ' +
                '<div class="avatar"> <object data="img' + user[i].image + '" type="image/png"> ' +
                ' <img alt="' + user[i].first_name + ' ' + user[i].last_name + '" src="img/user.jpg"> ' +
                ' <i class="' + user_status + '"></i></object></div>' +
                ' <div class="title"><a href="#">' + user[i].first_name + ' ' + user[i].last_name + '</a></div> <div class="desc">' + user[i].desgination +
                ' </div> <div class="desc"> ' + user[i].name_of_organisation + '</div><div class="bottom"> ' +
                ' <a class="" href="inbox.html?id=' + user[i].id + '"><img src="img/chat-icon.png" width="22" /></a> </div></div></div>'));
        }

    }
}

function profileFunction() {
    var profile_display = $("#profile-ul").css("display");
    if (profile_display === undefined || profile_display === 'none') {
        $('#profile-ul').toggle().css("display", "flex");
    } else {
        $('#profile-ul').toggle().css("display", "none");
    }
}

function changeProfileStatus(status) {
    if (status === 'active') {
        $('#profile i').removeClass();
        $('#profile i').addClass('profile_btn_green');
        $('#profile-ul').css("display", "none");
    } else if (status === 'away') {
        $('#profile i').removeClass();
        $('#profile i').addClass('profile_btn_away');
        $('#profile-ul').css("display", "none");
    } else if (status === 'doNotDisturb') {
        $('#profile i').removeClass();
        $('#profile i').addClass('profile_btn_do_not_disturb');
        $('#profile-ul').css("display", "none");
    }
}

function getUser() {
    user = [{
        "id": 1,
        "first_name": "Rahul",
        "last_name": "Khan",
        "desgination": "Manager",
        "email": "aloksaxena755@gmail.ccm",
        "email_verified_at": null,
        "password": "4597",
        "mobile": "1234567890",
        "linkedin_link": null,
        "twitter_link": null,
        "image": "\/image1596967296.jpeg",
        "terms": "Yes",
        "name_of_organisation": "TCS",
        "address": "sdfghjk",
        "phone": "1234567890",
        "ficci_member": "Yes",
        "ficci_no": "123456789",
        "gst": "Yes",
        "gst_no": "123456789",
        "user_status": "active",
        "google_id": null,
    }, {
        "id": 2,
        "first_name": "Ankur",
        "last_name": "Banka",
        "desgination": "Manager",
        "email": "rahultomar89892@gmail.com",
        "email_verified_at": null,
        "password": "4114",
        "mobile": "1234567890",
        "linkedin_link": "https://www.linkedin.com",
        "twitter_link": null,
        "image": "\/image1596975339.jpeg",
        "terms": "Yes",
        "name_of_organisation": "Maruti",
        "address": "asdfghj",
        "phone": "1234567890",
        "ficci_member": "Yes",
        "ficci_no": "1234567890",
        "gst": "Yes",
        "gst_no": "1234567890",
        "user_status": "away",
        "google_id": null,
    }, {
        "id": 2,
        "first_name": "Ankur",
        "last_name": "Banka",
        "desgination": "Manager",
        "email": "rahultomar89892@gmail.com",
        "email_verified_at": null,
        "password": "4114",
        "mobile": "1234567890",
        "linkedin_link": null,
        "twitter_link": "https://www.twitter.com",
        "image": "\/image1596975339.jpeg",
        "terms": "Yes",
        "name_of_organisation": "Maruti",
        "address": "asdfghj",
        "phone": "1234567890",
        "ficci_member": "Yes",
        "ficci_no": "1234567890",
        "gst": "Yes",
        "gst_no": "1234567890",
        "user_status": "away",
        "google_id": null,
    }, {
        "id": 3,
        "first_name": "Ankur",
        "last_name": "Banka",
        "desgination": "Manager",
        "email": "rahultomar89892@gmail.com",
        "email_verified_at": null,
        "password": "4114",
        "mobile": "1234567890",
        "linkedin_link": null,
        "twitter_link": null,
        "image": "\/image1596975339.jpeg",
        "terms": "Yes",
        "name_of_organisation": "Maruti",
        "address": "asdfghj",
        "phone": "1234567890",
        "ficci_member": "Yes",
        "ficci_no": "1234567890",
        "gst": "Yes",
        "gst_no": "1234567890",
        "user_status": "away",
        "google_id": null,
    }, {
        "id": 4,
        "first_name": "Ankur",
        "last_name": "Banka",
        "desgination": "Manager",
        "email": "rahultomar89892@gmail.com",
        "email_verified_at": null,
        "password": "4114",
        "mobile": "1234567890",
        "linkedin_link": "https://www.linkedin.com",
        "twitter_link": "https://www.twitter.com",
        "image": "\/image1596975339.jpeg",
        "terms": "Yes",
        "name_of_organisation": "Maruti",
        "address": "asdfghj",
        "phone": "1234567890",
        "ficci_member": "Yes",
        "ficci_no": "1234567890",
        "gst": "Yes",
        "gst_no": "1234567890",
        "user_status": "away",
        "google_id": null,
    }, {
        "id": 5,
        "first_name": "Ankur",
        "last_name": "Banka",
        "desgination": "Manager",
        "email": "rahultomar89892@gmail.com",
        "email_verified_at": null,
        "password": "4114",
        "mobile": "1234567890",
        "linkedin_link": null,
        "twitter_link": null,
        "image": "\/image1596975339.jpeg",
        "terms": "Yes",
        "name_of_organisation": "Maruti",
        "address": "asdfghj",
        "phone": "1234567890",
        "ficci_member": "Yes",
        "ficci_no": "1234567890",
        "gst": "Yes",
        "gst_no": "1234567890",
        "user_status": "away",
        "google_id": null,
    }, {
        "id": 6,
        "first_name": "Ankur",
        "last_name": "Banka",
        "desgination": "Manager",
        "email": "rahultomar89892@gmail.com",
        "email_verified_at": null,
        "password": "4114",
        "mobile": "1234567890",
        "linkedin_link": null,
        "twitter_link": null,
        "image": "\/image1596975339.jpeg",
        "terms": "Yes",
        "name_of_organisation": "Maruti",
        "address": "asdfghj",
        "phone": "1234567890",
        "ficci_member": "Yes",
        "ficci_no": "1234567890",
        "gst": "Yes",
        "gst_no": "1234567890",
        "user_status": "away",
        "google_id": null,
    }];

    return user;
}