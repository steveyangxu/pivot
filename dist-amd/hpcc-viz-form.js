
define('css!src/form/Input',[],function(){});

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/form/Button',["d3", "../common/HTMLWidget", "../api/IInput", "css!./Input"], factory);
    } else {
        root.form_Button = factory(root.d3, root.common_HTMLWidget, root.api_IInput);
    }
}(this, function (d3, HTMLWidget, IInput) {
    function Button() {
        HTMLWidget.call(this);
        IInput.call(this);

        this._tag = "div";
        this._inputElement = [];
    }
    Button.prototype = Object.create(HTMLWidget.prototype);
    Button.prototype.constructor = Button;
    Button.prototype._class += " form_Button";
    Button.prototype.implements(IInput.prototype);

    Button.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        var context = this;
        this._inputElement[0] = element.append("button")
            .attr("name", this.name())
            .on("click", function (w) {
                w.click(w);
            })
            .on("blur", function (w) {
                w.blur(w);
            })
            .on("change", function (w) {
                context.value([context._inputElement[0].property("value")]);
                w.change(w);
            })
        ;
    };

    Button.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        this._inputElement[0].text(this.value());
    };

    return Button;
}));

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/form/CheckBox',["d3", "../common/HTMLWidget", "../api/IInput", "css!./Input"], factory);
    } else {
        root.form_CheckBox = factory(root.d3, root.common_HTMLWidget, root.api_IInput);
    }
}(this, function (d3, HTMLWidget, IInput) {
    function CheckBox() {
        HTMLWidget.call(this);
        IInput.call(this);

        this._tag = "div";
        this._inputElement = [];
    }
    CheckBox.prototype = Object.create(HTMLWidget.prototype);
    CheckBox.prototype.constructor = CheckBox;
    CheckBox.prototype._class += " form_CheckBox";
    CheckBox.prototype.implements(IInput.prototype);

    CheckBox.prototype.publish("selectOptions", [], "array", "Array of options used to fill a dropdown list");

    CheckBox.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        var context = this;

        var checkboxContainer = element.append("ul");
        if (!this.selectOptions().length) {
            this.selectOptions().push(""); // create an empty radio if we using .value and not selectOptions array
        }
        this.selectOptions().forEach(function(val, idx) {
            context._inputElement[idx] = checkboxContainer.append("li").append("input").attr("type", "checkbox");
            context._inputElement[idx].node().insertAdjacentHTML("afterend", "<text>" + val + "</text>");
        });

        this._inputElement.forEach(function(e, idx) {
            e.attr("name", context.name());
            e.on("click", function (w) {
                w.click(w);
            });
            e.on("blur", function (w) {
                w.blur(w);
            });
            e.on("change", function (w) {
                var vals = [];
                context._inputElement.forEach(function(d, idx) {
                    if (d.property("checked")) {
                        vals.push(d.property("value"));
                    }
                });
                context.value(vals);
                w.change(w);
            });
        });
    };

    CheckBox.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        var context = this;

        this._inputElement.forEach(function(e, idx) {
            e.property("value", context.selectOptions()[idx]);
            if (context.value().indexOf(context.selectOptions()[idx]) !== -1 && context.value() !== "false") {
                e.property("checked", true);
            } else {
                e.property("checked", false);
            }
        });
    };

    CheckBox.prototype.insertSelectOptions = function (optionsArr) {
        var optionHTML = "";
        if (optionsArr.length > 0) {
            optionsArr.forEach(function (opt) {
                var val = (opt instanceof Array ? opt[0] : opt);
                var text = (opt instanceof Array ? (opt[1] ? opt[1] : opt[0]) : opt);
                optionHTML += "<option value='" + val + "'>" + text + "</option>";
            });
        } else {
            optionHTML += "<option>selectOptions not set</option>";
        }
        this._inputElement[0].html(optionHTML);
    };

    return CheckBox;
}));

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/form/ColorInput',["d3", "../common/HTMLWidget", "../api/IInput", "css!./Input"], factory);
    } else {
        root.form_ColorInput = factory(root.d3, root.common_HTMLWidget, root.api_IInput);
    }
}(this, function (d3, HTMLWidget, IInput) {
    function ColorInput() {
        HTMLWidget.call(this);
        IInput.call(this);

        this._tag = "div";
        this._inputElement = [];
    }
    ColorInput.prototype = Object.create(HTMLWidget.prototype);
    ColorInput.prototype.constructor = ColorInput;
    ColorInput.prototype._class += " form_ColorInput";
    ColorInput.prototype.implements(IInput.prototype);

    ColorInput.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);

        var context = this;

        this._inputElement[0] = element.append("input").attr("type", "text");
        this._inputElement[0].classed("color-text", true);
        this._inputElement[1] = element.append("input").attr("type", "color");

        this._inputElement.forEach(function(e, idx) {
            e.on("click", function (w) {
                w.click(w);
            });
            e.on("blur", function (w) {
                w.blur(w);
            });
            e.on("change", function (w) {
                if (idx === 0) {
                    context._inputElement[1].property("value",d3.rgb(context._inputElement[0].property("value")).toString());
                    context.value(context._inputElement[0].property("value"));
                } else {       
                    context._inputElement[0].property("value",context._inputElement[1].property("value"));
                    context.value(d3.rgb(context._inputElement[1].property("value")).toString());
                } 
                w.change(w);
            });
        });
    };

    ColorInput.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        var context = this;
        this._inputElement.forEach(function(e) {
            e.attr("name", context.name());
        });

        this._inputElement[0].attr("type", "text");
        this._inputElement[1].attr("type", "color");
        this._inputElement[0].property("value", this.value());
        this._inputElement[1].property("value", d3.rgb(this.value()).toString());
    };

    return ColorInput;
}));

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/form/Input',["d3", "../common/HTMLWidget", "../api/IInput", "css!./Input"], factory);
    } else {
        root.form_Input = factory(root.d3, root.common_HTMLWidget, root.api_IInput);
    }
}(this, function (d3, HTMLWidget, IInput) {
    function Input() {
        HTMLWidget.call(this);
        IInput.call(this);

        this._tag = "div";
        this._inputElement = [];
        this._labelElement = [];
    }
    Input.prototype = Object.create(HTMLWidget.prototype);
    Input.prototype.constructor = Input;
    Input.prototype._class += " form_Input";
    Input.prototype.implements(IInput.prototype);

    Input.prototype.publish("type", "text", "set", "Input type", ["number", "button", "checkbox", "date", "text", "textarea", "search", "email", "time", "datetime", "hidden"]);
    Input.prototype.publish("inlineLabel", null, "string", "Input Label", null, { optional: true });

    Input.prototype.checked = function (_) {
        if (!arguments.length) return this._inputElement[0] ? this._inputElement[0].property("checked") : false;
        if (this._inputElement[0]) {
            this._inputElement[0].property("checked", _);
        }
        return this;
    };

    Input.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);

        this._labelElement[0] = element.append("label")
            .attr("for", this.id() + "_input")
            .style("visibility", this.inlineLabel_exists() ? "visible" : "hidden")
        ;

        var context = this;
        switch (this.type()) {
            case "button":
                this._inputElement[0] = element.append("button")
                    .attr("id", this.id() + "_input")
                ;
                break;
            case "textarea":
                this._inputElement[0] = element.append("textarea")
                    .attr("id", this.id() + "_input")
                ;
                break;
            default:
                this._inputElement[0] = element.append("input")
                    .attr("id", this.id() + "_input")
                    .attr("type", this.type())
                ;
                break;
        }

        this._inputElement.forEach(function(e, idx) {
            e.attr("name", context.name());
            e.on("click", function (w) {
                w.click(w);
            });
            e.on("blur", function (w) {
                w.blur(w);
            });
            e.on("change", function (w) {
                context.value([e.property("value")]);
                w.change(w);
            });
        });
    };

    Input.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        this._labelElement[0]
            .style("visibility", this.inlineLabel_exists() ? "visible" : "hidden")
            .text(this.inlineLabel())
        ;
        switch (this.type()) {
            case "button":
                this._inputElement[0].text(this.value());
                break;
           case "textarea":
                this._inputElement[0].property("value", this.value());
                break;
            default:
                this._inputElement[0].attr("type", this.type());
                this._inputElement[0].property("value", this.value());
                break;
        }
    };

    return Input;
}));

define('css!src/form/Slider',[],function(){});

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/form/Slider',["d3", "../common/SVGWidget", "../api/IInput", "../chart/Axis", "../common/Icon", "css!./Slider"], factory);
    } else {
        root.form_Slider = factory(root.d3, root.common_SVGWidget, root.api_IInput, root.chart_Axis, root.common_Icon);
    }
}(this, function (d3, SVGWidget, IInput, Axis, Icon) {
    function Slider() {
        SVGWidget.call(this);
        IInput.call(this);

        this.selectionLabel("");
        this._playing = false;
        this._loop = false;

        this.axis = new Axis()
        ;

        var context = this;
        this._playIcon = new Icon()
            .faChar("\uf04b")
        ;
        this._playIcon.click = function (d) {
            d3.event.stopPropagation();
            if (context._playing) {
                context.pause();
            } else {
                context.play();
            }
        };

        this._loopIcon = new Icon()
            .faChar("\uf01e")
            .image_colorFill(this._loop ? null : "#bbb")
            .shape_colorFill(this._loop ? null : "white")
            .paddingPercent(33)
        ;
        this._loopIcon.click = function (d) {
            if (context._loop) {
                context._loop = false;
            } else {
                context._loop = true;
            }
            context._loopIcon
                .image_colorFill(context._loop ? null : "#bbb")
                .shape_colorFill(context._loop ? null : "white")
                .render()
            ;
        };

        this.brush = d3.svg.brush()
            .extent([0, 0])
            .on("brushstart", function (d) { context.brushstart(d, this); })
            .on("brush", function (d) { context.brushmove(d, this); })
            .on("brushend", function (d) { context.brushend(d, this); })
        ;
        this.brush.empty = function () {
            return false;
        };

        this._inputElement = [];
    }
    Slider.prototype = Object.create(SVGWidget.prototype);
    Slider.prototype.constructor = Slider;
    Slider.prototype._class += " form_Slider";
    Slider.prototype.implements(IInput.prototype);

    Slider.prototype.publish("padding", 16, "number", "Outer Padding", null, { tags: ["Basic"] });
    Slider.prototype.publish("fontSize", null, "number", "Font Size", null, { tags: ["Basic"] });
    Slider.prototype.publish("fontFamily", null, "string", "Font Name", null, { tags: ["Basic"] });
    Slider.prototype.publish("fontColor", null, "html-color", "Font Color", null, { tags: ["Basic"] });

    Slider.prototype.publish("allowRange", false, "boolean", "Allow Range Selection", null, { tags: ["Intermediate"] });
    Slider.prototype.publish("low", "0", "string", "Low", null, { tags: ["Intermediate"] });
    Slider.prototype.publish("high", "100", "string", "High", null, { tags: ["Intermediate"] });
    Slider.prototype.publish("step", 10, "number", "Step", null, { tags: ["Intermediate"] });
    Slider.prototype.publish("selectionLabel", "", "string", "Selection Label", null, { tags: ["Intermediate"] });

    Slider.prototype.publishProxy("tickCount", "axis", "tickCount");
    Slider.prototype.publishProxy("tickFormat", "axis", "tickFormat");
    Slider.prototype.publishProxy("type", "axis");
    Slider.prototype.publishProxy("timePattern", "axis");
    Slider.prototype.publishProxy("powExponent", "axis", "powExponent");
    Slider.prototype.publishProxy("logBase", "axis", "logBase");
    Slider.prototype.publishProxy("overlapMode", "axis");
    Slider.prototype.publishProxy("labelRotation", "axis");

    Slider.prototype.publish("showPlay", false, "boolean", "Show Play Button");
    Slider.prototype.publish("playInterval", 1000, "number", "Play Interval");
    Slider.prototype.publishProxy("playDiameter", "_playIcon", "diameter", 32);
    Slider.prototype.publish("playGutter", 4, "number", "Play Gutter");
    Slider.prototype.publishProxy("loopDiameter", "_loopIcon", "diameter", 24);
    Slider.prototype.publish("loopGutter", 4, "number", "Play Gutter");

    Slider.prototype.name = function (_) {
        return Slider.prototype.columns.apply(this, arguments);
    };

    var value = Slider.prototype.value;
    Slider.prototype.value = function (_) {
        var retVal = value.apply(this, arguments);
        if (arguments.length) {
            SVGWidget.prototype.data.apply(this, arguments);
        }
        return retVal;
    };

    Slider.prototype.play = function () {
        this._playing = true;
        this._playIcon
            .faChar("\uf04c")
            .render()
        ;
        var tick = this.data();
        if (tick < this.low() || tick >= this.high()) {
            tick = this.low();
            this
                .data(tick)
                .render()
            ;
            this._click();
        }
        var context = this;
        this.intervalHandler = setInterval(function () {
            tick += context.step();
            if (tick > context.high()) {
                if (context._loop === true) {
                    tick = context.low();
                    context
                        .data(tick)
                        .render()
                    ;
                    context._click();
                } else {
                    context.pause();
                }
            } else {
                context
                    .data(tick)
                    .render()
                ;
                context._click();
            }
        }, context.playInterval());
    };

    Slider.prototype.pause = function () {
        this._playing = false;
        this._playIcon
            .faChar("\uf04b")
            .render()
        ;
        clearInterval(this.intervalHandler);
    };

    Slider.prototype.data = function (_) {
        var retVal = SVGWidget.prototype.data.apply(this, arguments);
        if (arguments.length) {
            if (this.brushg) {
                this.brushg
                    .call(this.brush.extent(this.allowRange() ? this.data() : [this.data(), this.data()]))
                ;
            }
        }
        return retVal;
    };

    Slider.prototype.enter = function (domNode, element) {
        this.sliderElement = element.append("g");
        this._inputElement.push(this.sliderElement);

        this.axis
            .target(this.sliderElement.node())
            .x(this.width())
            .y(0)
            .width(this.width() - this.padding())
            .low(this.low())
            .high(this.high())
            .render()
        ;

        this.axis.d3Axis
              //.tickValues(null)
              .tickSize(0)
              .tickPadding(12)
        ;
        
        this.brushg = this.sliderElement.append("g")
            .attr("class", "brush")
            .call(this.brush)
        ;

        this.brushg.select(".background")
            .attr("y", -9)
            .attr("height", 18)
        ;

        this.brushg.select(".extent")
            .attr("y", "-10")
            .attr("height", "20")
        ;

        this.brushg.selectAll(".resize").select("rect")
            .attr("x", function (d) { return d === "e" ? 0 : -8; })
            .attr("y", "-10")
            .attr("width", "8")
            .attr("height", "20")
        ;

        this.handle = this.brushg.selectAll(".resize").append("path")
            .attr("class", "handle")
            .attr("transform", "translate(0,-27)")
        ;

        this._playIcon
            .target(this.sliderElement.node())
            .render()
        ;

        this._loopIcon
            .target(this.sliderElement.node())
            .render()
        ;
    };

    Slider.prototype.update = function (domNode, element) {
        var context = this;
        var width = this.width() - this.padding() / 2;

        this._playIcon
            .pos({ x: width - (this.loopDiameter() + this.loopGutter() + this.playDiameter() / 2), y: 0 })
            .diameter(this.playDiameter())
            .display(this.showPlay())
            .render()
        ;

        this._loopIcon
            .pos({ x: width - (this.loopDiameter() / 2), y: 0 })
            .diameter(this.loopDiameter())
            .display(this.showPlay())
            .render()
        ;

        if ((this.high() - this.low()) / this.step() <= 10) {
            //this.axis.tickValues(d3.merge([d3.range(this.low(), this.high(), this.step()), [this.high()]]));
        } else {
            //this.axis.tickValues(null);
        }

        var offset = this.showPlay() ? this.loopDiameter() + this.loopGutter() + this.playDiameter() + this.playGutter() : 0;
        width -= offset;
        var overlap = this.axis.calcOverflow(element);
        this.axis
            .x(this.width() / 2 - offset / 2)
            .y(overlap.depth)
            .width(this.width() - this.padding() - offset)
            .low(this.low())
            .high(this.high())
            .render()
        ;

        this.brushg
            .attr("transform", "translate(" + this.padding() / 2 + ", 0)")
        ;

        this.handle
            .attr("d", function (d) { return context.handlePath(d); })
        ;

        if (this.data().length === 0) {
            if( this.allowRange()) {
                  this.data([this.low(),this.low()]);
             } else {
                 this.data(this.low());
            }
        }

        this.axis.d3Scale.clamp(true);
        this.brush
            .x(this.axis.d3Scale)
        ;

        this.brushg
            .call(this.brush.extent(this.allowRange() ? this.data() : [this.data(), this.data()]))
        ;

        var bbox = this.sliderElement.node().getBBox();
        this.sliderElement.attr("transform", "translate(" + -this.width() / 2 + ", " + -(bbox.y + bbox.height / 2) + ")");
    };

    Slider.prototype.brushstart = function (d, self) {
        if (!d3.event || !d3.event.sourceEvent) return;
        d3.event.sourceEvent.stopPropagation();
    };

    Slider.prototype.brushmove = function (d, self) {
        if (!d3.event || !d3.event.sourceEvent) return;
        d3.event.sourceEvent.stopPropagation();
        if (!this.allowRange()) {
            var mouseX = this.axis.invert(d3.mouse(self)[0]);
            d3.select(self)
                .call(this.brush.extent([mouseX, mouseX]))
            ;
        }
    };

    Slider.prototype.brushend = function (d, self) {
        if (!d3.event || !d3.event.sourceEvent) return;
        d3.event.sourceEvent.stopPropagation();
        if (!this.allowRange()) {
            var mouseX = this.nearestStep(this.axis.invert(d3.mouse(self)[0]));
            d3.select(self)
                .call(this.brush.extent([mouseX, mouseX]))
            ;
            this.value(this.axis.parseInvert(mouseX));
            this._click();
        } else {
            var extent = this.brush.extent();
            extent[0] = this.nearestStep(extent[0]);
            extent[1] = this.nearestStep(extent[1]);
            d3.select(self)
                .call(this.brush.extent(extent))
            ;
            this.newSelection(this.axis.parseInvert(extent[0]), this.axis.parseInvert(extent[1]));
        }
    };

    Slider.prototype.nearestStep = function (value) {
        switch (this.type()) {
            case "time":
                return value;
            default:
                return +this.axis.parse(this.low()) + Math.round((value - +this.axis.parse(this.low())) / +this.step()) * +this.step();
        }
    };

    Slider.prototype.handlePath = function (d, i) {
        var e = +(d === "e");
        var x = e ? 1 : -1;
        var xOffset = this.allowRange() ? 0.5 : 0.0;
        var y = 18;
        var retVal = "M" + (xOffset * x) + "," + y +
            "A6,6 0 0 " + e + " " + (6.5 * x) + "," + (y + 6) +
            "V" + (2 * y - 6) +
            "A6,6 0 0 " + e + " " + (xOffset * x) + "," + (2 * y)
        ;
        if (this.allowRange()) {
            retVal += "Z" +
                "M" + (2.5 * x) + "," + (y + 8) +
                "V" + (2 * y - 8) +
                "M" + (4.5 * x) + "," + (y + 8) +
                "V" + (2 * y - 8)
            ;
        } else {
            retVal += "M" + (1 * x) + "," + (y + 8) +
                "V" + (2 * y - 8)
            ;
        }
        return retVal;
    };

    Slider.prototype._click = function() {
        if (this.selectionLabel()) {
            var clickData = {};
            clickData[this.selectionLabel()] = this.data();
            this.click(clickData);
        } else {
            this.click(this.data());
        }
    };

    Slider.prototype.newSelection = function (value, value2) {
        console.log("newSelection:  " + value + ", " + value2);
    };

    return Slider;
}));


define('css!src/form/Form',[],function(){});

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/form/Form',["d3", "../common/HTMLWidget", "../common/SVGWidget", "../common/WidgetArray", "./Input", "./Button", "./Slider", "css!./Form"], factory);
    } else {
        root.form_Form = factory(root.d3, root.common_HTMLWidget, root.common_SVGWidget, root.common_WidgetArray, root.form_Input, root.form_Button, root.form_Slider);
    }
}(this, function (d3, HTMLWidget, SVGWidget, WidgetArray, Input, Button, Slider) {
    function Form() {
        HTMLWidget.call(this);

        this._tag = "form";
    }
    Form.prototype = Object.create(HTMLWidget.prototype);
    Form.prototype.constructor = Form;
    Form.prototype._class += " form_Form";

    Form.prototype.publish("validate", true, "boolean", "Enable/Disable input validation");
    Form.prototype.publish("inputs", [], "widgetArray", "Array of input widgets");
    Form.prototype.publish("showSubmit", true, "boolean", "Show Submit/Cancel Controls");
    Form.prototype.publish("omitBlank", false, "boolean", "Drop Blank Fields From Submit");
    Form.prototype.publish("allowEmptyRequest", false, "boolean", "Allow Blank Form to be Submitted");

    Form.prototype.data = function (_) {
        if (!arguments.length) {
            var retVal = [];
            this.inputsForEach(function (input) {
                retVal.push(input.value());
            });
            return retVal;
        } else {
            this.inputsForEach(function (input, idx) {
                if (_.length > idx) {
                    input.value(_[idx]).render();
                }
            });
        }
        return this;
    };

    Form.prototype.inputsForEach = function (callback, scope) {
        var idx = 0;
        this.inputs().forEach(function (inp) {
            var inpArray = inp instanceof WidgetArray ? inp.content() : [inp];
            inpArray.forEach(function (inp) {
                if (scope) {
                    callback.call(scope, inp, idx++);
                } else {
                    callback(inp, idx++);
                }
            });
        });
    };

    Form.prototype.calcMaxColumns = function () {
        var retVal = 0;
        this.inputs().forEach(function (inputWidget) {
            var inputWidgetArray = inputWidget instanceof WidgetArray ? inputWidget.content() : [inputWidget];
            if (inputWidgetArray.length > retVal) {
                retVal = inputWidgetArray.length;
            }
        });
        return retVal;
    };

    Form.prototype.values = function (_) {
        if (!arguments.length) {
            var dataArr = {};
            this.inputsForEach(function (inp) {
                var value = inp.value();
                if (value || !this.omitBlank()) {
                    dataArr[inp.name()] = inp.value();
                }
            }, this);
            return dataArr;
        } else {
            this.inputsForEach(function (inp) {
                if (_[inp.name()]) {
                    inp.value(_[inp.name()]);
                } else if (this.omitBlank()){
                    inp.value("");
                }
            }, this);
        }
        return this;
    };

    Form.prototype.submit = function(){
        var isValid = true;
        if (this.validate()) {
            isValid = this.checkValidation();
        }
        if (!this.allowEmptyRequest() && !this.inputs().some(function(w) {
            if (w._class.indexOf("WidgetArray") !== -1) {
                return w.content().some(function(wa) {
                    return wa.hasValue();
                });
            }
            return w.hasValue(); 
        })) {
            return;
        }
        this.click(isValid ? this.values() : null);
    };

    Form.prototype.clear = function () {
        this.inputsForEach(function(inp){
            switch(inp.classID()) {
                case "form_Slider":
                    if (inp.allowRange()) {
                        inp.value([inp.low(), inp.low()]).render();
                    } else {
                        inp.value(inp.low()).render();
                    }
                break;
                case "form_CheckBox":
                    inp.value(false).render();
                break;
                case "form_Button":
                    /* skip */
                break;
                default:
                    inp.value("").render();
                break;
            }
        });
    };

    Form.prototype.checkValidation = function(){
        var ret = true;
        var msgArr = [];
        this.inputsForEach(function (inp) {
            if (!inp.isValid()) {
                msgArr.push("'" + inp.label() + "'" + " value is invalid.");
            }
        });
        if(msgArr.length > 0){
            alert(msgArr.join("\n"));
            ret = false;
        }
        return ret;
    };

    Form.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        element.on("submit", function () {
            d3.event.preventDefault();
        });

        this._parentElement.style("overflow", "auto");
        var table = element
            .append("table")
        ;
        this.tbody = table.append("tbody");
        this.tfoot = table.append("tfoot");
        this.btntd = this.tfoot.append("tr").append("td")
            .attr("colspan", 2)
        ;

        var context = this;
        this._controls = [
                new Button()
                    .value("Submit")
                    .on("click", function () {
                        context.submit(context.values());
                    }, true),
                new Button()
                    .value("Clear")
                    .on("click", function () {
                        context.clear({});
                    }, true)
        ];
        var rightJust = context.btntd
            .append("div")
            .style("float", "right")
        ;
        this._controls.forEach(function (w) {
            var leftJust = rightJust
                .append("span")
                .style("float", "left")
            ;
            w.target(leftJust.node()).render();
        });
    };

    Form.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        this._maxCols = this.calcMaxColumns();

        var context = this;
        var rows = this.tbody.selectAll("tr").data(this.inputs());
        rows.enter().append("tr")
            .each(function (inputWidget, i) {
                var element = d3.select(this);

                var inputWidgetArray = inputWidget instanceof WidgetArray ? inputWidget.content() : [inputWidget];
                inputWidgetArray.forEach(function (inputWidget, idx) {
                    element.append("td")
                        .attr("class", "prompt")
                        .text(inputWidget.label() + ":")
                    ;
                    var input = element.append("td")
                        .attr("class", "input")
                    ;
                    if (idx === inputWidgetArray.length - 1 && inputWidgetArray.length < context._maxCols) {
                        input.attr("colspan", (context._maxCols - inputWidgetArray.length + 1) * 2);
                    }
                    inputWidget.target(input.node()).render();
                    if (inputWidget instanceof SVGWidget) {
                        var bbox = inputWidget.element().node().getBBox();
                        input.style("height", bbox.height + "px");
                        inputWidget.resize().render();
                    }

                    if (inputWidget._inputElement instanceof Array) {
                        inputWidget._inputElement.forEach(function(e) {
                            e.on("change.form", function(w) {
                                setTimeout(function() {

                                    context._controls[0].disable(!context.allowEmptyRequest() && !context.inputs().some(function(w) { 
                                        if (w._class.indexOf("WidgetArray") !== -1) {
                                            return w.content().some(function(wa) {
                                                return wa.hasValue();
                                            });
                                        }
                                        return w.hasValue(); 
                                    }));
                                }, 100);
                            });
                        });
                    }
                });
            })
        ;
        rows.exit().remove();

        this.tfoot
            .style("display",this.showSubmit() ? "table-footer-group" : "none")
        ;
        this.btntd
            .attr("colspan", this._maxCols * 2)
        ;
        
        // Disable Submit unless there is data
        if (!this.allowEmptyRequest()) {
            setTimeout(function() {
                context._controls[0].disable(!context.allowEmptyRequest() && !context.inputs().some(function(w) { 
                    if (w._class.indexOf("WidgetArray") !== -1) {
                        return w.content().some(function(wa) {
                            return wa.hasValue();
                        });
                    }
                    return w.hasValue(); 
                }));
            }, 100);
        }

    };

    Form.prototype.exit = function (domNode, element) {
        this.inputs_reset();
        this._controls.forEach(function (w) {
            w.target(null);
        });
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    Form.prototype.click = function (row) {
        console.log("Clicked Submit: "+JSON.stringify(row));
    };

    return Form;
}));

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/form/Radio',["d3", "../common/HTMLWidget", "../api/IInput", "css!./Input"], factory);
    } else {
        root.form_Radio = factory(root.d3, root.common_HTMLWidget, root.api_IInput);
    }
}(this, function (d3, HTMLWidget, IInput) {
    function Radio() {
        HTMLWidget.call(this);
        IInput.call(this);

        this._tag = "div";
        this._inputElement = [];
    }
    Radio.prototype = Object.create(HTMLWidget.prototype);
    Radio.prototype.constructor = Radio;
    Radio.prototype._class += " form_Radio";
    Radio.prototype.implements(IInput.prototype);

    Radio.prototype.publish("selectOptions", [], "array", "Array of options used to fill a dropdown list");

    Radio.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);

        var context = this;

        var radioContainer = element.append("ul");
        if (!this.selectOptions().length) {
            this.selectOptions().push(""); // create an empty radio if we using .value and not selectOptions array
        }
        this.selectOptions().forEach(function(val, idx) {
            context._inputElement[idx] = radioContainer.append("li").append("input").attr("type", "radio");
            context._inputElement[idx].node().insertAdjacentHTML("afterend", "<text>" + val + "</text>");
        });

        this._inputElement.forEach(function(e, idx) {
            e.attr("name", context.name());
            e.on("click", function (w) {
                w.click(w);
            });
            e.on("blur", function (w) {
                w.blur(w);
            });
            e.on("change", function (w) {
                context.value([e.property("value")]);
                w.change(w);
            });
        });
    };

    Radio.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        var context = this;
        
        this._inputElement.forEach(function(e, idx) {
            e.property("value", context.selectOptions()[idx]);
            if (context.value().indexOf(context.selectOptions()[idx]) !== -1 && context.value() !== "false") {
                e.property("checked", true);
            } else {
                e.property("checked", false);
            }
        });
    };

    return Radio;
}));

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/form/Range',["d3", "../common/HTMLWidget", "../api/IInput", "css!./Input"], factory);
    } else {
        root.form_Range = factory(root.d3, root.common_HTMLWidget, root.api_IInput);
    }
}(this, function (d3, HTMLWidget, IInput) {
    function Range() {
        HTMLWidget.call(this);
        IInput.call(this);

        this._tag = "div";
        this._inputElement = [];
    }
    Range.prototype = Object.create(HTMLWidget.prototype);
    Range.prototype.constructor = Range;
    Range.prototype._class += " form_Range";
    Range.prototype.implements(IInput.prototype);

    Range.prototype.publish("type", "text", "set", "Input type", ["html-color", "number", "checkbox", "button", "select", "textarea", "date", "text", "range", "search", "email", "time", "datetime"]);
    Range.prototype.publish("selectOptions", [], "array", "Array of options used to fill a dropdown list");
    Range.prototype.publish("low", null, "number", "Minimum value for Range input");
    Range.prototype.publish("high", null, "number", "Maximum value for Range input");
    Range.prototype.publish("step", null, "number", "Step value for Range input");

    Range.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        
        var context = this;

        this._inputElement[0] = element.append("input").attr("type", "range");
        this._inputElement[1] = element.append("input").attr("type", "number");

        this._inputElement.forEach(function(e, idx) {
            e.attr("name", context.name());
            e.on("click", function (w) {
                w.click(w);
            });
            e.on("blur", function (w) {
                w.blur(w);
            });
            e.on("change", function (w) {
                if (idx === 0) {
                    context._inputElement[1].property("value",d3.rgb(context._inputElement[0].property("value")).toString());
                    context.value(context._inputElement[0].property("value"));
                } else {       
                    context._inputElement[0].property("value",context._inputElement[1].property("value"));
                    context.value(d3.rgb(context._inputElement[1].property("value")).toString());
                }     
                w.change(w);
            });
        });
    };

    Range.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        this._inputElement[0].attr("type", "range");
        this._inputElement[0].property("value", this.value());
        this._inputElement[0].attr("min", this.low());
        this._inputElement[0].attr("max", this.high());
        this._inputElement[0].attr("step", this.step());
        this._inputElement[1].attr("type", "number");
        this._inputElement[1].property("value", this.value());
        this._inputElement[1].attr("min", this.low());
        this._inputElement[1].attr("max", this.high());
        this._inputElement[1].attr("step", this.step());
    };

    Range.prototype.insertSelectOptions = function (optionsArr) {
        var optionHTML = "";
        if (optionsArr.length > 0) {
            optionsArr.forEach(function (opt) {
                var val = (opt instanceof Array ? opt[0] : opt);
                var text = (opt instanceof Array ? (opt[1] ? opt[1] : opt[0]) : opt);
                optionHTML += "<option value='" + val + "'>" + text + "</option>";
            });
        } else {
            optionHTML += "<option>selectOptions not set</option>";
        }
        this._inputElement[0].html(optionHTML);
    };

    return Range;
}));

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/form/Select',["d3", "../common/HTMLWidget", "../api/IInput", "css!./Input"], factory);
    } else {
        root.form_Select = factory(root.d3, root.common_HTMLWidget, root.api_IInput);
    }
}(this, function (d3, HTMLWidget, IInput) {
    function Select() {
        HTMLWidget.call(this);
        IInput.call(this);

        this._tag = "div";
        this._inputElement = [];
    }
    Select.prototype = Object.create(HTMLWidget.prototype);
    Select.prototype.constructor = Select;
    Select.prototype._class += " form_Select";
    Select.prototype.implements(IInput.prototype);

    Select.prototype.publish("selectOptions", [], "array", "Array of options used to fill a dropdown list");
    Select.prototype.publish("maxWidth", 120, "number", "Width", null, { optional: true });

    Select.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);

        var context = this;

        this._inputElement[0] = element.append("select")
            .attr("name", this.name())
            .on("click", function (w) {
                w.click(w);
            })
            .on("blur", function (w) {
                w.blur(w);
            })
            .on("change", function (w) {
                context.value([context._inputElement[0].property("value")]);
                w.change(w);
            })
        ;
    };

    Select.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        this.insertSelectOptions(this.selectOptions());
        this._inputElement[0]
            .property("value", this.value())
            .style("max-width", this.maxWidth_exists() ? this.maxWidth() + "px" : null)
        ;
    };


    Select.prototype.insertSelectOptions = function (optionsArr) {
        var optionHTML = "";
        if (optionsArr.length > 0) {
            optionsArr.forEach(function (opt) {
                var val = (opt instanceof Array ? opt[0] : opt);
                var text = (opt instanceof Array ? (opt[1] ? opt[1] : opt[0]) : opt);
                optionHTML += "<option value='" + val + "'>" + text + "</option>";
            });
        } else {
            optionHTML += "<option>selectOptions not set</option>";
        }
        this._inputElement[0].html(optionHTML);
    };

    return Select;
}));

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('src/form/TextArea',["d3", "./Input"], factory);
    } else {
        root.form_TextArea = factory(root.d3, root.form_Input);
    }
}(this, function (d3, Input) {
    function TextArea() {
        Input.call(this);

        this._tag = "div";
        this.type("textarea");
    }
    TextArea.prototype = Object.create(Input.prototype);
    TextArea.prototype.constructor = TextArea;
    TextArea.prototype._class += " form_TextArea";

    TextArea.prototype.publish("rows", null, "number", "Rows", null, { optional: true });
    TextArea.prototype.publish("cols", null, "number", "Columns", null, { optional: true });
    TextArea.prototype.publish("wrap", "off", "set", "Wrap", ["off", "on"]);
    TextArea.prototype.publish("minHeight", null, "number", "Minimum Height", null, { optional: true });
    TextArea.prototype.publish("spellcheck", null, "boolean", "Input spell checking", { optional: true });

    TextArea.prototype.enter = function (domNode, element) {
        Input.prototype.enter.apply(this, arguments);
    };

    TextArea.prototype.calcHeight = function () {
        return Math.max(this.minHeight_exists() ? this.minHeight() : 0, this.height());
    };

    TextArea.prototype.update = function (domNode, element) {
        Input.prototype.update.apply(this, arguments);
        this._inputElement[0]
            .attr("rows", this.rows())
            .attr("cols", this.cols())
            .attr("wrap", this.wrap())
            .attr("spellcheck", this.spellcheck())
            .style("height", this.calcHeight() + "px")
        ;
    };

    return TextArea;
}));

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.form_Input button,.form_Input input,.form_Input select,.form_Input textarea{padding:2px}.form_Input button{cursor:pointer}.form_Input input.color-text{width:120px}.form_Input input.color-text+input{width:57px;position:absolute}.form_Input input[type=textbox],.form_Input textarea{width:100%;box-sizing:border-box;display:block}.form_Input ul{list-style-type:none;float:left;padding:0;margin:0}.form_Input li{float:left;list-style-position:inside}.form_Slider text{color:#000}.form_Slider .chart_Axis{-webkit-user-select:none;-moz-user-select:none;user-select:none}.form_Slider .chart_Axis .domain{fill:none;stroke:#d3d3d3;stroke-width:10px;stroke-linecap:round}.form_Slider .extent{fill:#fff;opacity:.5}.form_Slider .background{fill:red;opacity:.5}.form_Slider .handle{fill:#fff;stroke:#bbb;stroke-opacity:.5;stroke-width:1px;pointer-events:none}.form_Slider .common_Icon .common_Widget .common_Shape{fill:#ccc;stroke:#bbb}.form_Slider .common_Icon:hover{cursor:pointer}.form_Slider .common_Icon:hover .common_Widget .common_Shape{stroke:#aaa}.form_Form{color:#404040}.form_Form tbody td{white-space:nowrap;border:1px solid #e5e5e5}.form_Form td.prompt{padding:5px;vertical-align:top;background-color:#e5e5e5}.form_Form td.input{padding:5px;width:100%;vertical-align:middle}.form_Form tfoot button{margin:5px}.form_Form tbody tr:hover{background-color:#fafafa}');

define("hpcc-viz-form", function(){});
