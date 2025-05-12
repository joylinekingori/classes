// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName
    this.isEnabled = isEnabled
    this.userGroupAccess = userGroupAccess
}
FeatureToggle.prototype.canAccess = function () {
    if (!this.isEnabled) {
        return false;
    }
    if (this.userGroupAccess.includes('all')) {
        return true;

    } else {
        return false;
    }
};
FeatureToggle.prototype.togglefeature = function (stopUser) {
    this.isEnabled = stopUser;
};
const admin = new FeatureToggle('Home', true, ['admins', 'users']);
const shopping = new FeatureToggle('Shopping cart', false, ['testers']);
const light = new FeatureToggle('LightMode', true, ['all']);
console.log(admin.canAccess('admins'))
console.log(shopping.canAccess('testers'))
console.log(light.canAccess('guest'))

// 2.In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.
// function TimeLog(freelancerName,projectDetails){
//     this.freelancerName=freelancerName
//     this.projectDetails=projectDetails   
// }
// TimeLog.prototype.addlog=function(date,hoursWorked){
//     this.record.push({date,hoursWorked}) 
// }
// TimeLog.prototype.calculateEarnings=function(){
//     return this.records.reduce((acc,item)=>acc+(item.hoursWorked*this.projectDetails),0);

// };
// // TimeLog.prototype.filterlogs=function(startDate,endDate){
// //     const start=new Date(startDate);
// //     const end=new Date(endDate);   
// // }
// // return this.records.filter(item=>{
// //     const recordDate=new Date(item.date)
// //     return
// // })
// const freelance=new TimeLog('Joy King',{name:'Article Writing',hourlyRate:20});
// freelance.addlog('2024-08-10',8);
// freelance.addlog('2025-20-10',10);
// console.log(freelance.calculateEarnings())



// You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.
function Order(customer, items, status) {
    this.customer = customer
    this.items = items
    this.status = status
}
Order.prototype.addTotals = function () {
    return this.items.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);
};
Order.prototype.updateStatus = function (paymentStatus) {
    switch (paymentStatus) {
        case "paid":
            this.status = "processing";
            break;
        case "failed":
            this.status = "payment-failed";
            break;
        case "refund":
            this.status = "refunded";
            break;
        default:
            this.status = "pending";

    }
}
Order.prototype.categories = function () {
    let total = this.addTotals();
    if (this.status === 'processing' && total > 500) {
        return 'very high'
    } else if (this.status === 'processing' && total > 100) {
        return 'medium';

    } else {
        return 'low';
    }
};
const orderNew = new Order({ name: 'Mercy' }, [{ productName: 'Laptop', quantity: 1, unitPrice: 1200 }, { productName: 'tablet', quantity: 2, unitPrice: 800 }])
console.log(orderNew.addTotals())
//  In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.
function Employee(id, name, performanceMetrics, feedback) {
    this.id = id
    this.name = name
    this.performanceMetrics = performanceMetrics
    this.feedback = feedback
}
Employee.prototype.calcAvg = function () {
    let score = Object.values(this.performanceMetrics);
    return score.reduce((acc, item) => acc + item, 0) / score.length;
}
Employee.prototype.employeePerformance = function () {
    let avg = this.calcAvg();
    if (avg >= 4.5) {
        return 'excellent';
    } else if (avg >= 3.5) {
        return 'good';
    } else {
        return 'below average'
    }

}
const empolyee = (new Employee(10001, 'Jane Wanjiru', { skills: 4, integrity: 3, communication: 4 }, ['Great employee']))
console.log(empolyee.calcAvg())
// Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.
    function Course(title,instructor,students){
        this.title=title
        this.instructor=instructor
        this.students=[]
    }
Course.prototype.add=function(student){
    this.students.push(student)
    return student
}
const newCourse=new Course('Python',{name:'Sharon Myles', job:'Backend Dev'})
newCourse.add({name:'Philo',status:'completed',job:'Front-end'});
console.log(newCourse.add())