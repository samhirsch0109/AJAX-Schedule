$(document).ready(function () {
    const scheduleUrl = 'https://api.npoint.io/d62afb01423e308e9037';

    const bellSchedule = {
        1: { start: '8:24 AM', end: '9:31 AM' },
        2: { start: '9:36 AM', end: '10:43 AM' },
        3: { start: '10:48 AM', end: '11:55 AM' },
        4: { start: '12:41 PM', end: '1:48 PM' },
        5: { start: '1:53 PM', end: '3:00 PM' },
    }

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
                    <td>${classItem.class}</td>
                    <td>${classItem.teacher}</td>
                    <td>${classItem.room}</td>
                </tr>
            `);
        });
    }
});