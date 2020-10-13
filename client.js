const ws=new WebSocket('ws://localhost:8080', 'broadcast-protocol');

ws.onopen = () => {
    console.log('Connected');
};
ws.onmessage = (e) => {
    const msg = e.data;
    //console.log(msg);
    txtReceived.innerHTML += msg + '\n';
}
ws.onerror = (e) => {
    console.log(e);
}
ws.onclose = (e) => {
    console.log('Connection closed');
    console.log(e);
}

const txtReceived = document.getElementById('txtReceived');
const txtSend = document.getElementById('txtSend');
const btnSend = document.getElementById('btnSend');
btnSend.addEventListener('click', () => {
    ws.send(txtSend.value);
});