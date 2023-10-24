class Task {
    id;
    taskName;
    dateTime;
    reminder;
    constructor(taskName, dateTime, reminder) {
        this.id = Math.ceil(Math.random() * 1000);
        this.taskName = taskName;
        this.dateTime = dateTime;
        this.reminder = reminder;
    }
}
let t1 = new Task('Reset LMS Password', new Date(Date.UTC(2022, 3, 29, 3, 23)), false);
let t2 = new Task('Meet With Project Guide', new Date(Date.UTC(2022, 1, 24, 4, 00)), true);
let t3 = new Task('Submit SCSA2602 Assignment', new Date(Date.UTC(2022, 2, 22, 12, 15)), false);
let tasks1 = [t1, t2, t3];

let app = angular.module('app', []);

app.controller('controller', function($scope) {
    // $scope.taskName;
    $scope.option = false;
    $scope.tasks = tasks1;

    $scope.setReminder;
    $scope.dateTime;
    $scope.taskName;

    $scope.toggleReminder = function(element) {
        let currTask = element.currentTarget;
        let taskID = parseInt(currTask.id);
        // console.log(currTask.classList);
        // let taskToUpdate = $scope.tasks.find(taskID=> taskID == Task.id);
        if (currTask.classList.length == 1) {
            currTask.classList.add('reminder');
        } else {
            currTask.classList.remove('reminder');
        }
    }
    $scope.updateTasks = function() {
        // let taskName1 = ;
        // console.log($scope.taskName);
        if (!$scope.taskName) {
            alert('Task cannot be empty');
        } else {
            if (!$scope.dateTime) {
                $scope.dateTime = Date.now();
            }
            let createNewTask = new Task($scope.taskName, $scope.dateTime, $scope.reminder);
            $scope.tasks.push(createNewTask);
            $scope.option = false;
        }
    }
    $scope.deleteTask = function(element) {
        // console.log('inside delete');
        let taskID = parseInt(element.currentTarget.parentElement.parentElement.id);
        // console.log(taskID);
        $scope.tasks = $scope.tasks.filter((task) => task.id !== taskID);
    }
});