alert('Started adding Atoms!')

function updateAtoms() {
    $.get('/api/user', function(data) {
        userData = JSON.parse(data);
        var atomsLocalized = userData.atoms.toLocaleString();
        document.getElementById("#userAtoms").innerText = atomsLocalized;
    });
}

function buyBox() {
    var postData = 'crate=add';
    $.post('/api/open/', postData, function(data) {});
}


function b() {
    var postData = 'crate=slippery';
    $.post('/api/open/', postData, function(data) {});
var postData = 'crate=all';
    $.post('/api/open/', postData, function(data) {});
}

setInterval(() => {
    buyBox();
    b()
    updateAtoms()
}, 1001);
