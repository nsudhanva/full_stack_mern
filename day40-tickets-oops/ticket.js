const axios = require('axios');

class Ticket{
    constructor(params){
        this.name = params.name;
        this.department = params.department;
        this.priority = params.priority;
        this.message = params.message;
    }

    save() {
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=adaed46e71037faa',this)
        .then((response) => {
            console.log(response.data);
        })
    .catch((err) => {
        console.log(err);
    });
    }

    reset(){
        this.name = '',
        this.department = '',
        this.priority = '',
        this.message = ''
    }

    static findAll(){
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=adaed46e71037faa')
        .then((response) => {
            let tickets = response.data;
            tickets.forEach((ticket) => {
                console.log(`${ticket.ticket_code}-${ticket.name}-${ticket.department}-${ticket.priority}-${ticket.status}`);
            })
            .catch((err) => {
                console.log(err);
            });
        })
    }

    static findByCode(code){
        let temp = code;
        console.log(temp);
        axios.get(`http://dct-api-data.herokuapp.com/tickets/${temp}?api_key=adaed46e71037faa`)
        .then((response) => {
            console.log(response.data);
        })
        .catch(() => {
            console.log(err);
        })
    }

    static findByPriority(priority){
        let pri = priority;
        axios.get(`http://dct-api-data.herokuapp.com/tickets?priority=${pri}&api_key=adaed46e71037faa`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

module.exports = {
    Ticket
}