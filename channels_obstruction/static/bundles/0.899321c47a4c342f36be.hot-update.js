webpackHotUpdate(0,{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactWebsocket = __webpack_require__(186);

var _reactWebsocket2 = _interopRequireDefault(_reactWebsocket);

var _jquery = __webpack_require__(83);

var _jquery2 = _interopRequireDefault(_jquery);

var _PlayerGames = __webpack_require__(187);

var _PlayerGames2 = _interopRequireDefault(_PlayerGames);

var _AvailableGames = __webpack_require__(188);

var _AvailableGames2 = _interopRequireDefault(_AvailableGames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LobbyBase = function (_React$Component) {
    _inherits(LobbyBase, _React$Component);

    function LobbyBase(props) {
        _classCallCheck(this, LobbyBase);

        var _this = _possibleConstructorReturn(this, (LobbyBase.__proto__ || Object.getPrototypeOf(LobbyBase)).call(this, props));

        _this.state = {
            player_game_list: [],
            available_game_list: []
        };

        // bind button click
        _this.sendSocketMessage = _this.sendSocketMessage.bind(_this);
        return _this;
    }

    _createClass(LobbyBase, [{
        key: 'getPlayerGames',
        value: function getPlayerGames() {
            this.serverRequest = _jquery2.default.get(this.props.server_url + '/player-games/?format=json', function (result) {
                this.setState({
                    player_game_list: result
                });
            }.bind(this));
        }
    }, {
        key: 'getAvailableGames',
        value: function getAvailableGames() {
            this.serverRequest = _jquery2.default.get(this.props.server_url + '/available-games/?format=json', function (result) {
                this.setState({
                    available_game_list: result
                });
            }.bind(this));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getPlayerGames();
            this.getAvailableGames();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.serverRequest.abort();
        }
    }, {
        key: 'handleData',
        value: function handleData(data) {
            //receives messages from the connected websocket
            var result = JSON.parse(data);
            // new games, so get an updated list of this player's game
            this.getPlayerGames();
            // we've received an updated list of available games
            this.setState({ available_game_list: result });
        }
    }, {
        key: 'sendSocketMessage',
        value: function sendSocketMessage(message) {
            // sends message to channels back-end
            var socket = this.refs.socket;
            socket.state.ws.send(JSON.stringify(message));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(_reactWebsocket2.default, { ref: 'socket', url: this.props.socket,
                    onMessage: this.handleData.bind(this), reconnect: true }),
                _react2.default.createElement(
                    'div',
                    { className: 'col-lg-4' },
                    _react2.default.createElement(_PlayerGames2.default, { player: this.props.current_user, game_list: this.state.player_game_list,
                        sendSocketMessage: this.sendSocketMessage })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-lg-4' },
                    _react2.default.createElement(_AvailableGames2.default, { player: this.props.current_user, game_list: this.state.available_game_list,
                        sendSocketMessage: this.sendSocketMessage })
                )
            );
        }
    }]);

    return LobbyBase;
}(_react2.default.Component);

LobbyBase.propTypes = {
    socket: _react2.default.PropTypes.string
};

exports.default = LobbyBase;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvailableGames = function (_React$Component) {
    _inherits(AvailableGames, _React$Component);

    function AvailableGames(props) {
        _classCallCheck(this, AvailableGames);

        var _this = _possibleConstructorReturn(this, (AvailableGames.__proto__ || Object.getPrototypeOf(AvailableGames)).call(this, props));

        _this.state = {
            game_list: _this.props.game_list
        };

        _this.renderGameList = _this.renderGameList.bind(_this);

        return _this;
    }

    _createClass(AvailableGames, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(newProp) {
            this.setState({ game_list: newProp.game_list });
        }
    }, {
        key: "renderGameList",
        value: function renderGameList() {
            // clear out games owned by this player
            var player_removed = this.props.game_list.filter(function (game) {
                return game.creator.id !== this.props.player.id;
            }, this);

            if (player_removed.length > 0) {
                return player_removed.map(function (game) {
                    return _react2.default.createElement(
                        "li",
                        { key: game.id, className: "list-group-item" },
                        _react2.default.createElement(
                            "span",
                            { className: "badge pull-left" },
                            game.id
                        ),
                        "\xA0 \xA0",
                        _react2.default.createElement(
                            "span",
                            null,
                            game.creator.username,
                            " vs???"
                        ),
                        _react2.default.createElement(
                            "a",
                            { className: "btn btn-sm btn-primary pull-right", href: "/game/" + game.id + "/" },
                            "Play"
                        )
                    );
                }, this);
            } else {
                return "No Available Games";
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "panel panel-primary" },
                    _react2.default.createElement(
                        "div",
                        { className: "panel-heading" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "Available Games"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "panel-body" },
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(
                                "ul",
                                { className: "list-group games-list" },
                                this.renderGameList()
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AvailableGames;
}(_react2.default.Component);

AvailableGames.defaultProps = {};

AvailableGames.propTypes = {
    game_list: _react2.default.PropTypes.array,
    player: _react2.default.PropTypes.object

};

exports.default = AvailableGames;

/***/ })

})