$(document).ready(function () {
    const scheduleUrl = 'https://api.npoint.io/d62afb01423e308e9037';

    $('#submitDay').on('click', function () {
        const selectedDay = $('#dayInput').val().trim().toUpperCase();

        if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(selectedDay)) {
            alert('You need to type a valid letter day!');
            return;
        } else {
            $.ajax({
                url: 'https://api.npoint.io/d62afb01423e308e9037',
                method: 'GET',
                success: function (data) {
                    let schedule = data.schedule;
                    let daySchedule = schedule.filter(classItem => classItem.days.includes(selectedDay));
                    renderHTML(daySchedule);
                },

                error: function () {
                    console.log('Connection error');
                }
            });
        }
    });

    function renderHTML(data) {
        $('#scheduleList').empty();
        data.forEach(classItem => {

            $('#scheduleList').append(`
                <tr>
                    <td>${classItem.period}</td>
                    <td>${classItem.time}</td>
                    <td>${classItem.class}</td>
                    <td>${classItem.teacher}</td>
                    <td>${classItem.room}</td>
                </tr>
            `);
        });
    }
});