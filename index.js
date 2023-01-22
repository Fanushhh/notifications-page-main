const readButton = document.querySelector('.read-all-button');
const activeNotifications = document.querySelectorAll('.active');
const notificationsCounter = document.querySelector('.active-notifications')
const unreadButton = document.querySelector('.unread-all-button')
const allNotifications = document.querySelectorAll('.notification');
const notificationDot = document.querySelectorAll('.notification-dot');
const notificationDotContainer = document.querySelectorAll('.accent');
const notificationName = document.querySelectorAll('.notification-name');

unreadButton.addEventListener('click', function(){
    
    [...notificationDotContainer].forEach(notification => {
        if(!notification.hasChildNodes()){
            const newDot = document.createElement('span');
            newDot.classList.add('notification-dot');
            notification.append(newDot)
        }
        
    });
    [...notificationDot].forEach(dot => dot.style.display = 'block');
    [...allNotifications].forEach(element => element.classList.add('active'));
    notificationsCounter.textContent = [...allNotifications].length;
    }
)

readButton.addEventListener('click', function(){
    [...allNotifications].forEach(element => element.classList.remove('active'));
    notificationsCounter.textContent = 0;
    [...notificationDot].forEach(dot => dot.style.display = 'none');
    [...notificationDotContainer].forEach(notification => {
        if(notification.hasChildNodes()){
            const dotNot = notification.lastChild;
            notification.removeChild(dotNot);
        }
        
    });
    }
)

