var questions = {"quiz": {"sport": {"q1": {"question": "Which one is correct team name in NBA?",
"options": ["New York Bulls","Los Angeles Kings","Golden State Warriros","Huston Rocket"],
"answer": "Huston Rocket"}
        },
        "maths": {"q1": {"question": "5 + 7 = ?","options": ["10","11","12","13"],"answer": "12"},
            "q2": {"question": "12 - 8 = ?","options": ["1","2","3","4"],"answer": "4"}
        }
    }
}

function answerIndex(a,b,c){
    if(a.includes(b)){
    return b.indexOf(c);
    };
}

console.log(answerIndex( "questions","Which one is correct team name in NBA?","Huston Rocket"))