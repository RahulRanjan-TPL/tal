require.def('antie/widgets/carousel/strips/utility/initstate',
    [
        'antie/widgets/carousel/strips/utility/state',
        'antie/widgets/carousel/strips/utility/attachedstate'
    ],
    function (State, AttachedState) {
        'use strict';
        var InitState;
        InitState = State.extend({
            init: function () {
            },

            append: function (context, parent, widget) {
                this._render(widget);
                this._attach(context, parent, widget, 'prependChildElement');
            },

            prepend: function (context, parent, widget) {
                this._render(widget);
                this._attach(context, parent, widget, 'prependChildElement');
            },

            detach: function (context, widget) {
            },

            attached: function () {
                return false;
            },

            _getDevice: function (widget) {
                return widget.getCurrentApplication().getDevice();
            },

            _render: function (widget) {
                var device = this._getDevice(widget);
                widget.render(device);
            },

            _attach: function (context, parent, widget, attachMethodName) {
                var device = this._getDevice(widget);
                device[attachMethodName](parent.outputElement, widget.outputElement);
                context.setState(AttachedState);
            }
        });

        return InitState;
    }
);