var Tags = function (element, cfg) {
    var tags = cfg.tags;
    var selectedTags = cfg.selectedTags;
    var selection = cfg.selection;
    var tagElems = {};

    for (var tag in tags) {
        if (tags.hasOwnProperty(tag)) {

            var selected = !!selectedTags[tag];

            var elem = $("<div>" + tag + "</div>");
            elem.css({
                "user-select":"none",
                "cursor":"pointer",
                "-moz-border-radius":"2px",
                "border-radius":"2px",
                "font-family":"arial",
                "color": selected ?  "#226622" : "#777777",
                "float":"left",
                "padding-left":"3px",
                "padding-right":"3px",
                "padding-top":"1px",
                "padding-bottom":"1px",
                background:selected ? "#ccFFcc" : "#F0EEEE",
                margin:"2px",
                border:selected ? "1px solid rgb(101, 184, 101)" : "1px solid #DDDADA",
                "font-size":"16px"
//                ,
//                width:"auto"
            });
            element.append(elem);

            (function () {
                var _tag = tag;
                var _elem = elem;
                elem.click(function (e) {
                    e.preventDefault();
                    var selected = !selectedTags[_tag];
                    selectedTags[_tag] = selected;
                    _elem.css({
                        background:selected ? "#ccFFcc" : "#F0EEEE",
                        border:selected ? "1px solid rgb(101, 184, 101)" : "1px  solid #DDDADA",
                        "color": selected ?  "#226622" : "#444444"

                    });
                    selection(selectedTags);
                });
            })();

            tagElems[tag] = elem;
        }
    }
    element.append("<div style='clear: left;'></div>");
};