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

Talk.ready.then(function() {
    var me = new Talk.User({
        id: "123456",
        name: "RishirajMedia",
        email: "rishiraj@example.com"
    });
    window.talkSession = new Talk.Session({
        appId: "tM11CHH8",
        me: me
    });

    var inbox = window.talkSession.createInbox();
    inbox.mount(document.getElementById("inbox-container"));
});