const btn = $(scheduleDay)

btn.on('click', function () {
    $.ajax({
        url: 'https://api.npoint.io/d62afb01423e308e9037',
        method: 'GET',
        success: function (data) {
            const schedule = data.schedule
            function getClassesForDay(day) {
                return scheduleData.filter(item => item.days.includes(selectedDay));
            }
        });
});




