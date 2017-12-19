/* inherited from awesomplete : https://github.com/LeaVerou/awesomplete */
(function () {
    var _ = require('./utils.js');
    var $ = _.$;
    var defaultConfig = require('./defaultconfig.js').autocomplete;
    var Autocomplete = function (input, options) {
        var me = this;

        // Keep track of number of instances for unique IDs
        Autocomplete.count = (Autocomplete.count || 0) + 1;
        this.count = Autocomplete.count;

        // Setup

        this.isOpened = false;

        this.input = $(input);
        this.input.setAttribute("autocomplete", "off");
        this.input.setAttribute("aria-owns", "autocomplete_list_" + this.count);
        this.input.setAttribute("role", "combobox");

        options = options || {};
        defaultConfig.data = Autocomplete.DATA;
        defaultConfig.filter = Autocomplete.FILTER_CONTAINS;
        defaultConfig.sort = options.sort === false ? false : Autocomplete.SORT_BYLENGTH;
        defaultConfig.item = Autocomplete.ITEM;
        defaultConfig.replace = Autocomplete.REPLACE;

        _.configure(this, defaultConfig, options);

        this.index = -1;

        // Create necessary elements

        this.container = $.create("div", {
            className: "autocomplete",
            around: input
        });

        this.ul = $.create("ul", {
            hidden: "hidden",
            role: "listbox",
            id: "autocomplete_list_" + this.count,
            inside: this.container
        });

        this.status = $.create("span", {
            className: "visually-hidden",
            role: "status",
            "aria-live": "assertive",
            "aria-atomic": true,
            inside: this.container,
            textContent: this.minChars !== 0 ? ("Type " + this.minChars + " or more characters for results.") : "Begin typing for results."
        });

        // Bind events

        this._events = {
            input: {
                "input": this.evaluate.bind(this),
                "blur": this.close.bind(this, {reason: "blur"}),
                "keydown": function (evt) {
                    var c = evt.keyCode;

                    // If the dropdown `ul` is in view, then act on keydown for the following keys:
                    // Enter / Esc / Up / Down
                    if (me.opened) {
                        if (c === 13 && me.selected) { // Enter
                            evt.preventDefault();
                            me.select();
                        }
                        else if (c === 27) { // Esc
                            me.close({reason: "esc"});
                        }
                        else if (c === 38 || c === 40) { // Down/Up arrow
                            evt.preventDefault();
                            me[c === 38 ? "previous" : "next"]();
                        }
                    }
                }
            },
            form: {
                "submit": this.close.bind(this, {reason: "submit"})
            },
            ul: {
                "mousedown": function (evt) {
                    var li = evt.target;

                    if (li !== this) {

                        while (li && !/li/i.test(li.nodeName)) {
                            li = li.parentNode;
                        }

                        if (li && evt.button === 0) {  // Only select on left click
                            evt.preventDefault();
                            me.select(li, evt.target);
                        }
                    }
                }
            }
        };

        $.bind(this.input, this._events.input);
        $.bind(this.input.form, this._events.form);
        $.bind(this.ul, this._events.ul);

        if (this.input.hasAttribute("list")) {
            this.list = "#" + this.input.getAttribute("list");
            this.input.removeAttribute("list");
        }
        else {
            this.list = this.input.getAttribute("data-list") || options.list || [];
        }

        Autocomplete.all.push(this);
    };

    Autocomplete.prototype = {
        set list(list) {
            if (Array.isArray(list)) {
                this._list = list;
            }
            else if (typeof list === "string" && list.indexOf(",") > -1) {
                this._list = list.split(/\s*,\s*/);
            }
            else { // Element or CSS selector
                list = $(list);

                if (list && list.children) {
                    var items = [];
                    slice.apply(list.children).forEach(function (el) {
                        if (!el.disabled) {
                            var text = el.textContent.trim();
                            var value = el.value || text;
                            var label = el.label || text;
                            if (value !== "") {
                                items.push({label: label, value: value});
                            }
                        }
                    });
                    this._list = items;
                }
            }

            if (document.activeElement === this.input) {
                this.evaluate();
            }
        },

        get selected() {
            return this.index > -1;
        },

        get opened() {
            return this.isOpened;
        },

        close: function (o) {
            if (!this.opened) {
                return;
            }

            this.ul.setAttribute("hidden", "");
            this.isOpened = false;
            this.index = -1;

            $.fire(this.input, "autocomplete-close", o || {});
        },

        open: function () {
            this.ul.removeAttribute("hidden");
            this.isOpened = true;

            if (this.autoFirst && this.index === -1) {
                this.goto(0);
            }

            $.fire(this.input, "autocomplete-open");
        },

        destroy: function () {
            //remove events from the input and its form
            $.unbind(this.input, this._events.input);
            $.unbind(this.input.form, this._events.form);

            //move the input out of the autocomplete container and remove the container and its children
            var parentNode = this.container.parentNode;

            parentNode.insertBefore(this.input, this.container);
            parentNode.removeChild(this.container);

            //remove autocomplete and aria-autocomplete attributes
            this.input.removeAttribute("autocomplete");
            this.input.removeAttribute("aria-autocomplete");

            //remove this awesomeplete instance from the global array of instances
            var indexOfAutocomplete = Autocomplete.all.indexOf(this);

            if (indexOfAutocomplete !== -1) {
                Autocomplete.all.splice(indexOfAutocomplete, 1);
            }
        },

        next: function () {
            var count = this.ul.children.length;
            this.goto(this.index < count - 1 ? this.index + 1 : (count ? 0 : -1));
        },

        previous: function () {
            var count = this.ul.children.length;
            var pos = this.index - 1;

            this.goto(this.selected && pos !== -1 ? pos : count - 1);
        },

        // Should not be used, highlights specific item without any checks!
        goto: function (i) {
            var lis = this.ul.children;

            if (this.selected) {
                lis[this.index].setAttribute("aria-selected", "false");
            }

            this.index = i;

            if (i > -1 && lis.length > 0) {
                lis[i].setAttribute("aria-selected", "true");

                this.status.textContent = lis[i].textContent + ", list item " + (i + 1) + " of " + lis.length;

                this.input.setAttribute("aria-activedescendant", this.ul.id + "_item_" + this.index);

                // scroll to highlighted element in case parent's height is fixed
                this.ul.scrollTop = lis[i].offsetTop - this.ul.clientHeight + lis[i].clientHeight;

                $.fire(this.input, "autocomplete-highlight", {
                    text: this.suggestions[this.index]
                });
            }
        },

        select: function (selected, origin) {
            if (selected) {
                this.index = $.siblingIndex(selected);
            } else {
                selected = this.ul.children[this.index];
            }

            if (selected) {
                var suggestion = this.suggestions[this.index];

                var allowed = $.fire(this.input, "autocomplete-select", {
                    text: suggestion,
                    origin: origin || selected
                });

                if (allowed) {
                    this.replace(suggestion);
                    this.close({reason: "select"});
                    $.fire(this.input, "autocomplete-selectcomplete", {
                        text: suggestion
                    });
                }
            }
        },

        evaluate: function () {
            var me = this;
            var value = this.input.value;

            if (value.length >= this.minChars && this._list.length > 0) {
                this.index = -1;
                // Populate list with options that match
                this.ul.innerHTML = "";

                this.suggestions = this._list
                    .map(function (item) {
                        return new Suggestion(me.data(item, value));
                    })
                    .filter(function (item) {
                        return me.filter(item, value);
                    });

                if (this.sort !== false) {
                    this.suggestions = this.suggestions.sort(this.sort);
                }

                this.suggestions = this.suggestions.slice(0, this.maxItems);

                this.suggestions.forEach(function (text, index) {
                    me.ul.appendChild(me.item(text, value, index));
                });

                if (this.ul.children.length === 0) {

                    this.status.textContent = "No results found";

                    this.close({reason: "nomatches"});

                } else {
                    this.open();

                    this.status.textContent = this.ul.children.length + " results found";
                }
            }
            else {
                this.close({reason: "nomatches"});

                this.status.textContent = "No results found";
            }
        }
    };

// Static methods/properties

    Autocomplete.all = [];

    Autocomplete.FILTER_CONTAINS = function (text, input) {
        return RegExp($.regExpEscape(input.trim()), "i").test(text);
    };

    Autocomplete.FILTER_STARTSWITH = function (text, input) {
        return RegExp("^" + $.regExpEscape(input.trim()), "i").test(text);
    };

    Autocomplete.SORT_BYLENGTH = function (a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a < b ? -1 : 1;
    };

    Autocomplete.ITEM = function (text, input, item_id, secondary_text) {
        var html = input.trim() === "" ? text : text.replace(RegExp($.regExpEscape(input.trim()), "gi"), "<mark>$&</mark>");
        if (typeof secondary_text !== 'undefined' && typeof secondary_text === "string") {
            html = html.replace(RegExp($.regExpEscape(secondary_text.trim()), "gi"), "<span>$&</span>");
        }
        return $.create("li", {
            innerHTML: html,
            "aria-selected": "false",
            "id": "autocomplete_list_" + this.count + "_item_" + item_id
        });
    };

    Autocomplete.REPLACE = function (text) {
        this.input.value = text.value;
    };

    Autocomplete.DATA = function (item/*, input*/) {
        return item;
    };

// Private functions

    function Suggestion(data) {
        var o = Array.isArray(data)
            ? {label: data[0], value: data[1], metadata: data[2]}
            : typeof data === "object" && "label" in data && "value" in data && "metadata" in data ? data : {
                label: data,
                value: data,
                metadata: data
            };

        this.label = o.label || o.value;
        this.value = o.value;
        this.metadata = o.metadata;
    }

    Object.defineProperty(Suggestion.prototype = Object.create(String.prototype), "length", {
        get: function () {
            return this.label.length;
        }
    });
    Suggestion.prototype.toString = Suggestion.prototype.valueOf = function () {
        return "" + this.label;
    };

// Helpers

    $.create = function (tag, o) {
        var element = document.createElement(tag);

        for (var i in o) {
            var val = o[i];

            if (i === "inside") {
                $(val).appendChild(element);
            }
            else if (i === "around") {
                var ref = $(val);
                ref.parentNode.insertBefore(element, ref);
                element.appendChild(ref);
            }
            else if (i in element) {
                element[i] = val;
            }
            else {
                element.setAttribute(i, val);
            }
        }

        return element;
    };

    $.bind = function (element, o) {
        if (element) {
            for (var event in o) {
                var callback = o[event];

                event.split(/\s+/).forEach(function (event) {
                    element.addEventListener(event, callback);
                });
            }
        }
    };

    $.unbind = function (element, o) {
        if (element) {
            for (var event in o) {
                var callback = o[event];

                event.split(/\s+/).forEach(function (event) {
                    element.removeEventListener(event, callback);
                });
            }
        }
    };

    $.fire = function (target, type, properties) {
        var evt = document.createEvent("HTMLEvents");

        evt.initEvent(type, true, true);

        for (var j in properties) {
            evt[j] = properties[j];
        }

        return target.dispatchEvent(evt);
    };

    $.regExpEscape = function (s) {
        return s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
    };

    $.siblingIndex = function (el) {
        /* eslint-disable no-cond-assign */
        for (var i = 0; el = el.previousElementSibling; i++) ;
        return i;
    };

    Autocomplete.$ = $;

// Make sure to export Autocomplete on self when in a browser
    if (typeof self !== "undefined") {
        self.Autocomplete = Autocomplete;
    }

// Expose Autocomplete as a CJS module
    if (typeof module === "object" && module.exports) {
        module.exports = Autocomplete;
    }

    return Autocomplete;

}());
