
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./Column"], factory);
    } else {
        root.c3chart_Bar = factory(root.c3chart_Column);
    }
}(this, function (Column) {
    function Bar(target) {
        Column.call(this);

        this._config.axis.rotated = true;
    }
    Bar.prototype = Object.create(Column.prototype);
    Bar.prototype.constructor = Bar;
    Bar.prototype._class += " c3chart_Bar";

    return Bar;
}));
