import img1 from './images/Dgaming.jpg'
import img2 from './images/tower.jpg'



//an array will contain the data for our thumbnails
class DesktopType {

    static items = [
        {
            id: "1234",
            image: img1,
            title : "Gaming",
            device : "desktop",
            description: "Tower over your opponents! Acer’s arsenal of gaming machines are designed to give you a huge advantage on the competition. Awesome power, super speed, mind-blowing graphics and serious sound unite to deliver an unrivaled gaming experience."
        },
        {
            id: "1235",
            image: img2,
            title : "Tower",
            device : "desktop",
            description: "Tackle any task with ease—with speed, power and reliability. Several sizes and configurations available to fit your needs—and your budget!"
        }
        ];
}

export default DesktopType;

