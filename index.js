const readButton = document.querySelector('.read-all-button');
const activeNotifications = document.querySelectorAll('.active');
const notificationsCounter = document.querySelector('.active-notifications')
const unreadButton = document.querySelector('.unread-all-button')
const allNotifications = document.querySelectorAll('.notification');
const notificationDot = document.querySelectorAll('.notification-dot');
const notificationDotContainer = document.querySelectorAll('.accent');
const notificationName = document.querySelectorAll('.notification-name');


for(let i = 0; i< 3; i++){
    notificationDotContainer[i].classList.add('dot');
}

unreadButton.addEventListener('click', function(){
    [...notificationDotContainer].forEach(notification => {
        notification.classList.add('dot');
    });
    [...allNotifications].forEach(element => element.classList.add('active'));
    notificationsCounter.textContent = [...allNotifications].length;
    }
)

readButton.addEventListener('click', function(){
    [...allNotifications].forEach(element => element.classList.remove('active'));
    notificationsCounter.textContent = 0;
    
    [...notificationDotContainer].forEach(notification => {
            notification.classList.remove('dot');
    });
    }
    
)

