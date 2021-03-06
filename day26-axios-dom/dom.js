var appHandle  = document.getElementById('app');

var links = [
    {
        title:'website',
        url: 'http://www.dctacademy.com'},
    {
        title:'facebook',
        url:'http://www.facebook.com/dctacademy.bangalore'
    },
    {
        title:'github',
        url:'http://www.github.com/dctacademy'
    }];

    var table = document.createElement('table');
    table.setAttribute('border', 1);

    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var text1 = document.createTextNode('title');
    var text2 = document.createTextNode('url');

    th1.appendChild(text1);
    th2.appendChild(text2);

    tr.appendChild(th1);
    tr.appendChild(th2);

    thead.appendChild(tr);
    table.appendChild(thead);

    table.appendChild(tbody);

    tr.appendChild(th1);
    tr.appendChild(th2);
    
    appHandle.appendChild(table);
    
    // console.log(table);

    for(var i = 0;i < links.length;i++){
        var row = document.createElement('tr');
        tbody.appendChild(row);

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        
        var td1text = document.createTextNode(links[i].title);
        var td2text = document.createTextNode(links[i].url);

        row.appendChild(td1);
        row.appendChild(td2);
        
        var anchor = document.createElement('a');
        //var href = document.createAttribute('href');
        //href.value = links.url;
        anchor.setAttribute('href',links[i].url);
        anchor.appendChild(td1text);
        td1.appendChild(anchor);
        td2.appendChild(td2text);
        
    }