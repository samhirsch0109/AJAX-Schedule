$(document).ready(function () {
    const scheduleUrl = 'https://api.npoint.io/d62afb01423e308e9037';

    const dailySchedule = {
        A: [1, 2, 3, 5, 6],
        B: [4, 1, 2, 7, 5],
        C: [3, 4, 1, 6, 7],
        D: [2, 3, 4, 5, 6],
        E: [1, 2, 3, 7, 5],
        F: [1, 2, 3, 6, 7],
        G: [3, 4, 7, 5, 6]
    };

    $('#submitDay').on('click', function () {
        const selectedDay = $('#dayInput').val()

        // Validate selected day
        if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(selectedDay)) {
            alert('You need to select a valid letter day!');
            return;
        }

        {
            $.ajax({
                url: 'https://api.npoint.io/d62afb01423e308e9037',
                method: 'GET',
                success: function (data) {
                    let schedule = data.schedule;
                    let dayOrder = dailySchedule[selectedDay]; // Get period order for the day
                    let daySchedule = []; //array to store data in correct order

                    // Use forEach to build daySchedule in the correct order
                    dayOrder.forEach(period => {
                        // Finds the first class item in the schedule array that has a matching period number
                        let classItem = schedule.find(item => item.period === period);
                        // If a matching class item is found, it is added to the day's schedule array
                        if (classItem) daySchedule.push(classItem);
                    });
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