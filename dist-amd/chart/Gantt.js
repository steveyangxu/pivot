
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./Bar"], factory);
    } else {
        root.chart_Gantt = factory(root.chart_Bar);
    }
}(this, function (Bar) {
    function Gantt(target) {
        Bar.call(this);

        this
            .orientation_default("vertical")
            .xAxisType_default("ordinal")
            .yAxisType_default("time")
        ;
    }
    Gantt.prototype = Object.create(Bar.prototype);
    Gantt.prototype.constructor = Gantt;
    Gantt.prototype._class += " chart_Gantt";

    return Gantt;
}));
