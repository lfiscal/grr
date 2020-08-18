$('#right').prepend('<label id="minutes">00</label>:<label id="seconds">00</label>')

function sortRows() {
    var divs = $("[class=transitions]:eq(1) div.rank-choice");
    var $divs = $("[class=transitions]:eq(1) div.rank-choice");
    alphabeticallyOrderedDivs = $divs.sort(function(a, b) {
        return $(a).find('div.domain-verb').text() > $(b).find('div.domain-verb').text();
    });
    $("[class=transitions]:eq(1)").html(alphabeticallyOrderedDivs);
    console.log("rows sorted");
}

function linkOnt() {
    var e = "https://lingo.siri.apple.com/production-en/ontology/";
    $(".domain-verb").click(function(t) {
        var i = $(this).text().split(' ')[12].trim();
        window.open(e + i + "/description", "_blank")
        t.metaKey && window.open(e + i + "/description", "_blank")
    });
    console.log("domain clicked");
}

function detectChange() {
    $(".top-ranked-list").change(function() {
        sortRows();
        console.log("change detected");
    });
}

function google() {
    base = "https://www.google.com/search?q=";
    $('[class=utterance-text]:eq(1)').click(function() {
        utt = $(this).text();
        window.open(base + utt, "_blank")
    })
}


function wolfram() {
    var e = "https://www.wolframalpha.com/input/?i=";
    $(".terminal-node").click(function(t) {
        var i = $(this).text().slice(10).trim();
        window.open(e + i + "/description", "_blank")
        t.metaKey && window.open(e + i + "/description", "_blank")
    });
    console.log("domain clicked");
}

var checkProbes = function() {
        $('#probe-widget #menu-wrapper .tree-menu #menu-wrapper:contains("failure")').addClass("fail").css("color", "red");
        $('#probe-widget #menu-wrapper .tree-menu #menu-wrapper:contains("success")').addClass("succeed").css("color", "green");

        var fails = $('#menu-wrapper.fail .category-wrapper').text().replace(/(\r\n|\n|\r)/gm, "", " ").split("  ").filter(item => item);
        var succeeds = $('#menu-wrapper.succeed .category-wrapper').text().replace(/(\r\n|\n|\r)/gm, "", " ").split("  ").filter(item => item);

        probeArray = []

        $(".domain-verb").each(function() {
                    probe = $(this).text().replace(/(\r\n|\n|\r)/gm, "", " ").split("probe: ").pop().split('  ')[0];
                    if (fails.includes(probe)) {
                        console.log("found failed probe" + probe)
                        $(this).css("color", "red");
                    } else if {
                        $(".domain-verb").each(function() {
                                probe = $(this).text().replace(/(\r\n|\n|\r)/gm, "", " ").split("probe: ").pop().split('  ')[0];
                                if (succeeds.includes(probe)) {
                                    console.log("found successful probe" + probe)
                                    $(this).css("color", "green");
                                }
                            }
                        });
                }

                var minutesLabel = document.getElementById("minutes");
                var secondsLabel = document.getElementById("seconds");
                var totalSeconds = 0; setInterval(setTime, 1000);

                function setTime() {
                    ++totalSeconds;
                    secondsLabel.innerHTML = pad(totalSeconds % 60);
                    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
                }

                function pad(val) {
                    var valString = val + "";
                    if (valString.length < 2) {
                        return "0" + valString;
                    } else {
                        return valString;
                    }
                }

                $(document).keypress(function(e) {
                    if (e.metaKey && (e.which === 13)) {
                        $('#navigation-wrapper > button:nth-child(2)').click();
                    }
                });
                if (counter) throw counter.init(), "resetting";
                var counter = {
                        docObj: $("<span contenteditable='true' tabindex='-1' style='padding: 6px 8px;border-radius:5px;border:1px solid lightgray; margin: 0px 10px;'>0</span"),
                        projectName: $("#project-name").text(),
                        skip: !0,
                        id: "",
                        init: function() {
                            this.docObj.insertBefore("#skip"), localStorage.getItem(this.projectName) ? this.docObj.text(localStorage.getItem(this.projectName)) : localStorage.setItem(this.projectName, this.docObj.text()), this.onload()
                        },
                        incr: function() {
                            this.docObj.text(String(parseInt(this.docObj.text()) + 1)), localStorage.setItem(this.projectName, this.docObj.text())
                        },
                        onload: function() {
                            this.incr()
                            totalSeconds = 0;
                        }
                    },
                    s_ajaxListener = {
                        tempOpen: XMLHttpRequest.prototype.open,
                        tempSend: XMLHttpRequest.prototype.send,
                        callback: function() {
                            this.url.includes("save_grade") && counter.onload()
                            sortRows();
                            linkOnt();
                            detectChange();
                            google();
                            checkProbes();
                        }
                    }; XMLHttpRequest.prototype.open = function(e, t) {
                    if (!e) e = "";
                    if (!t) t = "";
                    s_ajaxListener.tempOpen.apply(this, arguments), s_ajaxListener.method = e, s_ajaxListener.url = t, "get" == e.toLowerCase() && (s_ajaxListener.data = t.split("?"), s_ajaxListener.data = s_ajaxListener.data[1])
                }, XMLHttpRequest.prototype.send = function(e, t) {
                    if (!e) e = "";
                    if (!t) t = "";
                    s_ajaxListener.tempSend.apply(this, arguments), "post" == s_ajaxListener.method.toLowerCase() && (s_ajaxListener.data = e), s_ajaxListener.callback()
                }, hideParseSetting = !1, counter.init();
