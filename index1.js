$(function () {


    $("#loadwebapi").click(function () {

        $("#wpanel").empty();
        var city = $("#city").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
        url += "&APPID=3bc3c2e3b52472fa8c59df44febe99a9";


        $.get(url, function (data) {

            console.log(data);

            var row = "<h3><font color='white'>" + data.weather[0].description + "</font></h3>";
            row += "<h3><font color='white'>" + Math.round(data.main.temp / 10) + "&#8451</font></h3>";
            var row1 = data.weather[0].icon;

            if (row1 == ('02n') || row1 == ("03n") || row1 == ("03d")) {
                var img = new Image();
                img.src = 'http://www.weatherclipart.net/free_weather_clipart/cartoon_sun_and_clouds_icon_0521-1009-2213-0401_SMU.jpg';
            } else if (row1 == ('04n') || row1 == ('04d')) {
                var img = new Image();
                img.src = 'https://images.clipartof.com/small/1186832-Cartoon-Of-A-Broken-Cloud-Royalty-Free-Vector-Illustration.jpg';
            } else if (row1 == ('01n') || row1 == ('01d')) {
                var img = new Image();
                img.src = 'https://i.pinimg.com/736x/07/6c/ed/076cedb23fa6db5dd8e670c9f9fd52ff--cartoon-online-mr-bean.jpg';
            } else if (row1 == ('50d') || row1 == ('50n')) {
                var img = new Image();
                img.src = 'http://imgsrc.allposters.com/img/print/posters/bill-woodman-sequence-of-three-drawings-in-which-a-man-s-hat-is-blown-off-by-the-wind-a-new-yorker-cartoon_a-G-9187369-8419447.jpg';
            } else if (row1 == ('09n')|| row1==('10d')) {
                var img = new Image();
                img.src = 'https://i.pinimg.com/236x/e8/e0/f6/e8e0f6f7da64d76916b3fe723dd4d34d--cloud-wallpaper-pretty-phone-wallpaper.jpg';
            } else if (row1 == ('10n')) {
                var img = new Image();
                img.src = 'http://icons.iconarchive.com/icons/custom-icon-design/weather/256/light-rain-icon.png';
            } else if (row1 == ('03n')) {
                var img = new Image();
                img.src = '';
            } else if (row1 == ('02d')) {
                var img = new Image();
                img.src = 'https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Overcast.png';
            } else if (row1 == "11n") {
                var img = new Image();
                img.src = 'https://thumb1.shutterstock.com/display_pic_with_logo/2848729/285999548/stock-vector-thunderstorm-with-heavy-rainfall-vector-illustration-of-weather-icon-285999548.jpg';
            }

          
            $("#wpanel").append(row);
            $("#wpanel").append(img);
        });
    });


    

});