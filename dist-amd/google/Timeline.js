
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["d3", "../common/HTMLWidget", "goog!visualization,1,packages:[timeline]"], factory);
    } else {
        root.google_Timeline = factory(root.d3, root.common_HTMLWidget);
    }
}(this, function (d3, HTMLWidget) {

    function Timeline() {
        HTMLWidget.call(this);

        this._chartType = "Timeline";
        this._tag = "div";
        this._data_google = [];
        this._selection = {};
    }
    Timeline.prototype = Object.create(HTMLWidget.prototype);
    Timeline.prototype.constructor = Timeline;
    Timeline.prototype._class += " google_Timeline";

    Timeline.prototype.publish("tooltipIsHtml", true, "boolean", "Set to false to use SVG-rendered (rather than HTML-rendered) tooltips. See Customizing Tooltip Content for more details.",null,{tags:["Advanced"]});
    Timeline.prototype.publish("tooltipTrigger", "focus", "set", "The user interaction that causes the tooltip to be displayed: focus - The tooltip will be displayed when the user hovers over the element; none - The tooltip will not be displayed.",["none", "focus"],{tags:["Basic"]});
    Timeline.prototype.publish("backgroundColor", null, "html-color", "The background color for the main area of the chart. Can be either a simple HTML color string, for example:  or '#00cc00'.",null,{tags:["Basic"]});

    Timeline.prototype.publish("avoidOverlappingGridLines", true, "boolean", "Whether display elements (e.g., the bars in a timeline) should obscure grid lines. If false, grid lines may be covered completely by display elements. If true, display elements may be altered to keep grid lines visible.",null,{tags:["Basic"]});
    Timeline.prototype.publish("timelineColorByRowLabel", false, "boolean", "If set to true, colors every bar on the row the same. The default is to use one color per bar label.",null,{tags:["Basic"]});
    Timeline.prototype.publish("timelineGroupByRowLabel", true, "boolean", "If set to false, creates one row for every dataTable entry. The default is to collect bars with the same row label into one row.",null,{tags:["Basic"]});
    Timeline.prototype.publish("timelineShowBarLabels", true, "boolean", "If set to false, omits bar labels. The default is to show them.", null,{tags:["Basic"]});
    Timeline.prototype.publish("timelineShowRowLabels", true, "boolean", "If set to false, omits row labels. The default is to show them.",null,{tags:["Basic"]});
    Timeline.prototype.publish("timelineSingleColor", null, "html-color", "Colors all bars the same. Specified as a hex value (e.g., '#8d8').",null,{tags:["Basic"]});
    Timeline.prototype.publish("timePattern", "%Y-%m-%d", "string", "Time format of the data.",null,{tags:["Basic"]});

    Timeline.prototype.getChartOptions = function () {
        var retVal = [];

        retVal.avoidOverlappingGridLines = this.avoidOverlappingGridLines();
        retVal.backgroundColor = this.backgroundColor();
        retVal.timelineColorByRowLabel = this.timelineColorByRowLabel();
        retVal.timelineGroupByRowLabel = this.timelineGroupByRowLabel();
        retVal.timelineShowBarLabels = this.timelineShowBarLabels();
        retVal.timelineShowRowLabels = this.timelineShowRowLabels();
        retVal.timelineSingleColor = this.timelineSingleColor();
        retVal.tooltipIsHtml = this.tooltipIsHtml();
        retVal.tooltipTrigger = this.tooltipTrigger();
        retVal.width = this.width();
        retVal.height = this.height();
        retVal.timePattern = this.timePattern();

        return retVal;
    };

    Timeline.prototype.data = function (_) {
        var retVal = HTMLWidget.prototype.data.apply(this, arguments);
        if (arguments.length) {
            this._data_google = new google.visualization.DataTable();

            this._data_google.addColumn({ type: "string", id: "Label A" });
            this._data_google.addColumn({ type: "string", id: "Label B" });
            this._data_google.addColumn({ type: "date", id: "start" });
            this._data_google.addColumn({ type: "date", id: "end" });

            var start;
            var end;
            var parseDate = d3.time.format(this.timePattern()).parse;

            _.forEach(function(d) {
                start = parseDate(d[2]);
                end = parseDate(d[3]);
                this._data_google.addRows([ [ d[0], d[1], start, end ] ]);
            }, this);
        }
        return retVal;
    };

    Timeline.prototype.click = function (row, column, selected) {
        console.log("Click:  " + JSON.stringify(row) + ", " + column + ", " + selected);
    };

    Timeline.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        element.style("overflow", "hidden");
        this._chart = new google.visualization[this._chartType](domNode);

        var context = this;
        google.visualization.events.addListener(this._chart, "select", function () {
            var selectedItem = context._chart.getSelection()[0];
            context._selection = {
                data: context.rowToObj(context.data()[selectedItem.row] || {}),
                column: context.columns()[selectedItem.column] || null
            };
            
            context.click(context._selection.data, context._selection.column, Object.keys(context._selection).length !== 0);
        });
    };

    Timeline.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);
        this._chart.draw(this._data_google, this.getChartOptions());
    };

    return Timeline;
}));
