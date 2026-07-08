// here we write the code that ki windoe pe ham koi bhi key ko press karne toh screen pe eke table aa jaye jisme hame key aur uske code dikh jaye 

const table = document.querySelector('.table')

window.addEventListener('keydown', (event) => {
        table.style.display = "block";
    table.innerHTML = `
        <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        
        <tr>
            <td>${event.key === " " ? "Space" : event.key}</td>
            <td>${event.keyCode}</td>
            <td>${event.code}</td>
        </tr>
    </table>
    `
})