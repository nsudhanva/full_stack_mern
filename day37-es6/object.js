//es5
var person = {
    name: 'Rakesh',
    skills:['js','rb','py'],
    details: function(){
        console.log(this);
        console.log(this.name);
        console.log(this.skills);
        var that = this;
        this.skills.forEach(function(skill){
            console.log(`${that.name} knows ${skill}`);
        });
    }
}
console.log(person.details());

var person = {
    name:'Rakesh',
    skills:['js','rb','py'],
    details:function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)
        }.bind(this));
    }
}
console.log(person.details());