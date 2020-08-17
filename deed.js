$('#right').prepend('<label id="minutes">00</label>:<label id="seconds">00</label>')

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);
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

//Uppercase
$('textarea').keypress(function(e){
var str = $(this).val()
var sents = function(){
    first = str.charAt(0).toUpperCase();
    str = str.slice(1);
    str = first+str
	$(this).val(str);
}
sents();
});
//End Uppercase

$(document).keypress(function(e){
if ( e.metaKey && ( e.which === 13 ) ) {
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
	  $(".rank-choice:odd").css('background-color', '#d5d5d5');
		var divs = $("[class=transitions]:eq(1) div.rank-choice");
$(document).ready(function(e) {
    var $divs = $("[class=transitions]:eq(1) div.rank-choice");
var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find('div.domain-verb').text() > $(b).find('div.domain-verb').text();
    });
    $("[class=transitions]:eq(1)").html(alphabeticallyOrderedDivs);
});
        }
    };
XMLHttpRequest.prototype.open = function(e, t) {
    if (!e) e = "";
    if (!t) t = "";
    s_ajaxListener.tempOpen.apply(this, arguments), s_ajaxListener.method = e, s_ajaxListener.url = t, "get" == e.toLowerCase() && (s_ajaxListener.data = t.split("?"), s_ajaxListener.data = s_ajaxListener.data[1])
}, XMLHttpRequest.prototype.send = function(e, t) {
    if (!e) e = "";
    if (!t) t = "";
    s_ajaxListener.tempSend.apply(this, arguments), "post" == s_ajaxListener.method.toLowerCase() && (s_ajaxListener.data = e), s_ajaxListener.callback()
}, hideParseSetting = !1, counter.init();
