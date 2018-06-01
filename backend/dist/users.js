"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            (another.email === this.email && another.password === this.password);
    };
    return User;
}());
exports.User = User;
exports.users = {
    "chico@gmail.com": new User('chico@gmail.com', 'Francisco Rafael Gomes', 'chico35'),
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana Silva', 'juliana23'),
    "amanda@gmail.com": new User('amanda@gmail.com', 'Amanda', 'amanda21')
};
