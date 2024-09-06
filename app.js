let day_night = document.getElementById('day_night');
let day_night2 = document.getElementById('day_night2');
day_night2.style.display = "none";
day_night.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1', 'rgb(184,184,184,.5)');
    document.documentElement.style.setProperty('--color-2', '#000');
    document.documentElement.style.setProperty('--color-3', '#fff');
    document.documentElement.style.setProperty('--color-4', 'rgb(0,0,0,.5');
    document.documentElement.style.setProperty('--color-5', '#663da6');
    day_night.style.display = "none";
    day_night2.style.display = "unset";
});
day_night2.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1', '#262b3f');
    document.documentElement.style.setProperty('--color-2', '#fff');
    document.documentElement.style.setProperty('--color-3', '#1e2337');
    document.documentElement.style.setProperty('--color-4', 'rgb(255, 255, 255, .5)');
    document.documentElement.style.setProperty('--color-5', 'greenyellow');
    day_night.style.display = "unset";
    day_night2.style.display = "none";
});

// Battery Navigator
let active_battery = document.getElementById('active_battery');
let battery_icon = document.getElementById('battery_icon');
let battery_level = document.getElementById('battery_level');
let audio1 = new Audio('audio/Charging.mp3');
// audio.play();

navigator.getBattery().then(battery => {
    const battery_level_change = () => {
        battery_level.innerText = (battery.level * 100) + "%";
    }
    setInterval(battery_level_change, 1000);
    battery_level_change();

    battery_icon.value = battery.charging;
    // alert(battery_icon.value);

    battery.addEventListener('chargingchange', () => {
        switch (battery.charging) {
            case true:
                battery_icon.classList.remove('bi-battery-half');
                battery_icon.classList.add('bi-battery-charging');
                active_battery.classList.add('active_battery');
                battery_icon.style.color = "#fff";
                audio1.play();
                break;
            case false:
                battery_icon.classList.add('bi-battery-half');
                battery_icon.classList.remove('bi-battery-charging');
                active_battery.classList.remove('active_battery');
                battery_icon.style.color = "unset";
                break;
        }
    })
});


let wifi = document.getElementById('wifi');
const wifi_change = () => {
    if (navigator.onLine) {
        wifi.style.color = "var(--color-5)";
    } else {
        wifi.style.color = "";
    }
}
setInterval(wifi_change, 100);
wifi_change();

// 2nd Page Javascript start

let img_change = document.getElementById('img_change');

const change_img_data = () => {
    setTimeout(() => {
        img_change.style.background = "url('img/pubg.jpg') no-repeat center center/cover";
    }, 0000);
    setTimeout(() => {
        img_change.style.background = "url('img/pubg1.jpg') no-repeat center center/cover";
    }, 3000);
    setTimeout(() => {
        img_change.style.background = "url('img/pubg2.webp') no-repeat center center/cover";
    }, 6000);
}

setInterval(change_img_data, 9000);
change_img_data();

// done

let play = document.getElementById('play');
let video = document.getElementById('video');


play.addEventListener('click', () => {
    if (video.paused || video.currentTime <= 0) {
        video.play();
        video.style.display = "flex";
        img_change.style.display = "none";
        play.innerHTML = `<i class="bi bi-pause-fill"></i> Pause`;
    } else {
        video.pause();
        video.style.display = '';
        img_change.style.display = '';
        play.innerHTML = `<i class="bi bi-play-fill"></i> Play`;
    }
});

video.addEventListener('ended', () => {
    video.pause();
    video.style.display = '';
    img_change.style.display = '';
    play.innerHTML = `<i class="bi bi-play-fill"></i> Play`;

});



const JoinData = [{
        name: "Jahid Khan [KDS CODER]",
        game: "Grand Theft Auto V",
        img: "user_img/user1.jfif",
        price: "$800"
    },
    {
        name: "Peter Clavin",
        game: "Sniper 2 Gost Worrior",
        img: "user_img/u1.webp",
        price: "$80"
    },
    {
        name: "Arya Milton",
        game: "Call Of Duty Mobile",
        img: "user_img/u2.jpg",
        price: "$85"
    },
    {
        name: "Siman Disuza",
        game: "War Face",
        img: "user_img/u3.webp",
        price: "$40"
    },
    {
        name: "Devid Parker",
        game: "PUBG",
        img: "user_img/u4.jpg",
        price: "$100"
    },
    // created all object 
]

let index = 0;

let join_new_member = document.getElementsByClassName('join_new_member')[0];


function UpdateDiv() {
    setInterval(() => {
        let card = document.createElement('div');
        card.classList.add('card');
        if (index == JoinData.length) {
            index = 0;
        } else {
            index++;
        }
        const { name, game, img, price } = JoinData[index - 1];
        card.innerHTML = `
        <img src="${img}" alt="">
                            <div class="content">
                                <div class="h6_price">
                                    <h5>${game}</h5>
                                    <span>Just Jion Now</span>
                                    <h6>${price}</h6>
                                </div>
                                <p>${name}</p>
                            </div>
        `
        join_new_member.appendChild(card);
        join_new_member.scrollTop += 100;
    }, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
    UpdateDiv();
});