var serviceuser = /** @class */ (function () {
    function serviceuser() {
        this.users = [
            {
                id: 10,
                name: 'divya',
                salary: 10000
            }
            // {
            //  id :20,
            //name:'bindhu',
            // salary:20000
            // }
        ];
    }
    return serviceuser;
}());
var businessuser = /** @class */ (function () {
    function businessuser() {
        this.users1 = [
            {
                name: 'vedavathi',
                email: 'veda@gmail.com',
                salary: 300000
            }
            // {
            //name:'bindhusree',
            // email:'bindhu@gmail.com',
            //salary:200000
            // }
        ];
    }
    return businessuser;
}());
var service = new serviceuser();
var business = new businessuser();
var identifyUser = function (obj, obj1) {
    if (obj.salary < obj1.salary) {
        console.log('this is employee');
    }
    else {
        console.log('this is businessuser');
    }
};
identifyUser(service, business);
