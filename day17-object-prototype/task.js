function Task(title,isCompleted){
    this.title = title;
    this.createdAt = new Date();
    this.isCompleted = isCompleted;
    this.markAsComplete = function(){
         this.isCompleted = true;
    }
    this.markAsInComplete = function(){
         this.isCompleted = false;
    }
    this.details = function(){
        return `${this.title}-${this.createdAt}-${this.isCompleted}`
    }
}

var tasks = [];
var task1 = new Task('go for a walk',true);
var task2 = new Task('cook food',true);
var task3 = new Task('turn off wifi',false);
var task4 = new Task ('bring groceries',true);
tasks.push(task1,task2,task2,task4);

var completedTasks = tasks.filter(function(task){
    return task.iscompleted;
})

var inCompleteTasks = tasks.filter(function(task){
    return !task.iscompleted;
})

function print(){
    console.log('listing completed tasks');
for(var i = 0;i < completedTasks.length;i++){
    console.log(completedTasks[i].details());
}
console.log('listing non complete tasks');
for(var i = 0;i < inCompleteTasks.length;i++){
    console.log(inCompleteTasks[i].details());
}
}

console.log(print());


